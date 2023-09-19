import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import AppContext from './contexts/AppContext'
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainApplication(){
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [accountType,setAccountType]=useState("");//ordinary or official
    const [token,setToken]=useState(null)
    const [profile,setProfile]=useState(null);

    const globalData = {
        isLoggedIn,setIsLoggedIn,
        accountType,setAccountType,
        token,setToken,
        profile,setProfile
    };

    return (
        <AppContext.Provider value={globalData} >
            <App/>
        </AppContext.Provider>
    )
}

root.render(<MainApplication/>);