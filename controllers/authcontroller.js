const User=require("../models/UserModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
exports.register = async (req, res) => {
    try {
      const {name,phone,area, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ name,phone,area,email, password: hashedPassword });
    await user.save();

    const token =await jwt.sign({ userId: user._id }, process.env.SECRETE_KEY, {
        expiresIn: '1h',
      });
      res.status(201).json({ token,user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error',err });
    }
  };

  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email},{name:1,email:1,password:1,area:1,accountType:1});
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRETE_KEY, {
        expiresIn: '1h',
      });
      res.json({ token ,user});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };  
  