import React from "react";

export const Profile = ({ userInfo }) => {

    if (!userInfo || !Object.keys(userInfo).length) {
        return <div>Loading or not authenticated...</div>;
    }

    return (
        <>
            <h4>Хэрэглэгчийн мэдээлэл</h4>
            <img src={userInfo.imageUrl} alt="Profile" />
            <h2>Нэр: {userInfo.name}</h2>
            <h2>Email хаяг: {userInfo.email}</h2>
            <h2>Хүргэлтийн хаяг</h2>
        </>
    );
}
