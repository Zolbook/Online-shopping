import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile =() => {

    const {user } = useAuth0();

return (
    <>
    <h4>Хэрэглэгчийн мэдээлэл</h4>
    <img src={user.picture}/>
    <h2>Нэр {user.name}</h2>
    <h2>Email хаяг {user.email}</h2>
    <h2>Хүргэлтийн хаяг</h2>
    </>

);
}