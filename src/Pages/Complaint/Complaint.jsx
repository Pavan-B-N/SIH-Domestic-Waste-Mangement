import "./Complaint.css"
import { Alert, Button, FormControlLabel, InputAdornment, LinearProgress, Radio, RadioGroup, Snackbar, TextField, Typography } from "@mui/material"
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useContext, useState } from "react";
import storage from "../../APIs/firebase_credentials"
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage"
import AppContext from "../../contexts/AppContext"
import axios_client from "../../APIs/AxiosClient";
import {useNavigate} from "react-router-dom"
function Complaint() {
    const { profile } = useContext(AppContext)
    const navigate=useNavigate()
    const textFieldStyle = {
        margin: "5px"
    }

    const [complaintType, setComplaintType] = useState("citizen-careless")
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("choose picture")
    const [imgSrc, setImgSrc] = useState(null)
    const [isFileUploading, setIsFileUploading] = useState(false)
    const [fileUpoadProgress, setFileUploadProgress] = useState(0)
    const [fileURL, setFileURL] = useState(null)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarSeverity, setSnackbarSeverity] = useState("success")
    const [snapbarMessage, setSnackbarMessage] = useState();
    function handleChange(event) {
        setComplaintType(event.target.value)
    }
    function handleImageChange(event) {
        const file = event.target.files[0];
        setFile(file)
        setFileName(file.name)
        const url = URL.createObjectURL(file)
        setImgSrc(url)
    }
    function uploadFile(file) {
        const promise = new Promise(function (resolve, reject) {
            console.log(storage)
            setFileUploadProgress(0)
            setIsFileUploading(true)
            const storageRef = ref(storage, file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)
            uploadTask.on("state_changed", (snapshot) => {
                const per = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(per)
                setFileUploadProgress(per)
            }, (err) => {
                console.log(err)
                setSnackbarSeverity("error")
                setSnackbarMessage("Cannot upload file")
                reject(err)
            }, async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref)
                console.log(url)
                setSnackbarSeverity("success")
                setSnackbarMessage("File uploaded successfully")
                setShowSnackbar(true)
                setFileUploadProgress(0)
                setIsFileUploading(false)
                setFileURL(url)
                resolve(url)
            })
        })
        return promise;
    }

    async function registerComplaint() {
        console.log(file)
        if (file) {
            console.log("file")
            let location = ""
            navigator.geolocation.getCurrentPosition((success, failure) => {
                console.log(success)
                location = "lat=" + success.coords.latitude + " lon=" + success.coords.longitude
            })
            const url=await uploadFile(file)
            
            const details = {
                complaintType,
                userId: profile._id,
                location,
                description,
                imageURl: url,
            }
            try {
                console.log("uploading to server")
                const { data } = await axios_client.post("/complaints/raisecomplaints", details)
                setSnackbarSeverity("success")
                setSnackbarMessage("Complaint Raised Successfully")
                setShowSnackbar(true)
                setTimeout(()=>navigate("/"),4000)
            } catch (err) {
                setSnackbarSeverity("error")
                setSnackbarMessage("Something went wrong")
                setShowSnackbar(true)
                alert(err)
            }

        } else {
            setSnackbarSeverity("warning")
            setSnackbarMessage("Select Picture or Proof")
            setShowSnackbar(true)
        }
    }
    return (
        <div>
            <h1 className="register-complaint-title">Register Your Complaint</h1>
            <div className="complaint-form">
                <RadioGroup
                    name="controlled-radio-buttons-group"
                    row
                    value={complaintType}
                    onChange={handleChange}
                >
                    <FormControlLabel value="citizen-careless" control={<Radio />} label="citizen-careless" />
                    <FormControlLabel value="garbage-on-road" control={<Radio />} label="garbage-on-road" />
                    <FormControlLabel value="dustbin-full" control={<Radio />} label="dustbin-full" />
                    <FormControlLabel value="others" control={<Radio />} label="others" />
                </RadioGroup>
                {/* <TextField
                    placeholder="UserID"
                    type="text" sx={textFieldStyle}
                />
                <TextField
                    placeholder="Location"
                    type="text"
                    sx={textFieldStyle}
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><AddLocationAltIcon /></InputAdornment>,
                    }}
                /> */}
                <TextField
                    placeholder="Desciption about the complaint"
                    type="text"
                    sx={textFieldStyle}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="file-upload">
                    <label htmlFor="file-upload" className="file-upload-btn">Upload the Picture</label>
                    <input type="file" id="file-upload" hidden onChange={handleImageChange} accept="image/*" />
                    <Typography >{fileName}</Typography>
                </div>
                {file && <img src={imgSrc} alt={fileName} className="complaint-img" />}
                {
                    isFileUploading &&
                    <LinearProgress variant="determinate" color="success" value={fileUpoadProgress} size="large" sx={{ height: 10, borderRadius: 5, margin: "10px" }} />
                }
                <Button variant="contained" color="success" sx={textFieldStyle} size="large" onClick={registerComplaint} >Raise Complaint</Button>
                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setShowSnackbar(false)}
                >
                    <Alert
                        onClose={() => setShowSnackbar(false)}
                        severity={snackbarSeverity}
                        sx={{ width: '100%' }}>
                        {snapbarMessage}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default Complaint