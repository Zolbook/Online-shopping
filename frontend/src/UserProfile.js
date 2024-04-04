import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdb-react-ui-kit';

function UserProfile() {
    const [isLogged, setIslogged] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch("/api/current_user", { credentials: 'include' })
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(data => {
                if (data && data.googleId) {
                    setIslogged(true);
                    setUserInfo(data);
                } else {
                    setIslogged(false);
                    setUserInfo({});
                }
            })
            .catch(error => {
                console.error("Error checking user session:", error);
            });
    }, []);

    const handleLogout = () => {
        fetch("http://localhost:5001/auth/logout", { 
            credentials: 'include', 
            method: "POST" 
        })
            .then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response.json();
            })
            .then(() => {
                setIslogged(false);
                setUserInfo({});
            })
            .catch(err => {
                console.error("Logout failed:", err);
            });
    };

    return (
        <div>
            {isLogged ? (
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={() => window.location.href = "http://localhost:5001/auth/google"}>
                    Login with Google
                </button>
            )}
        </div>
    );
}

export default UserProfile;



