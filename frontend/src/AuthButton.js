import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';


const AuthButton =()=>{
    const [isLogged, setIslogged] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URI}/auth/profile`, {credentials:'include'})
        .then((res)=>res.json())
        .then((data)=>{
            setIslogged(true)
        })
        .catch((err)=>{
            console.log(err);
            setIslogged(false)
        })
    }, []);

    const handleLogin = ()=>{
        window.location.href = `${process.env.REACT_APP_API_URI}/auth/google/callback`
    }

    const handleLogout =()=>{
        fetch(`${process.env.REACT_APP_API_URI}/auth/logout`, {credentials:'include'})
        .then((response)=>{
            setIslogged(false)
            navigate('/')
        })
        .catch((error)=>{
            console.error(error)
        })}

        return (
            <>
            {isLogged?(<button onClick={handleLogout}>Logout</button>):(<button onClick={handleLogin}>Login</button>)}
            </>
        )

    
}

export default AuthButton;