import "./Complaint.css"
import { Alert, Button, FormControlLabel, InputAdornment, LinearProgress, Radio, RadioGroup, Snackbar, TextField, Typography } from "@mui/material"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { useState } from "react";
import storage from "../../APIs/firebase_credentials"
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage"
function Complaint() {


    const textFieldStyle = {
        margin: "5px"
    }

    const [complaintType, setComplaintType] = useState("citizen-careless")
    const [file, setFile] = useState(null)
    const [fileName, setFileName] = useState("choose picture")
    const [imgSrc, setImgSrc] = useState(null)
    const [isFileUploading, setIsFileUploading] = useState(false)
    const [fileUpoadProgress, setFileUploadProgress] = useState(0)
    const [fileURL, setFileURL] = useState(null)
    const [showSnackbar, setShowSnackbar] = useState(false)
    const [snackbarSeverity,setSnackbarSeverity] = useState("success")
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
                reject(err)
            }, async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref)
                console.log(url)
                setSnackbarSeverity("success")
                setShowSnackbar(true)
                setFileUploadProgress(0)
                setIsFileUploading(false)
                setFileURL(url)
                resolve("success")
            })
        })
        return promise;
    }

    async function registerComplaint() {
        if (file) {
            await uploadFile(file)
        } else {
            alert("fill the required details")
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
                <TextField
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
                />
                <TextField
                    placeholder="Desciption about the complaint"
                    type="text"
                    sx={textFieldStyle}
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
                        {snackbarSeverity==="success" ? "Complaint Raised Successfully" : "Failed to Raise the Complaint" }
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default Complaint