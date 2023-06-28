import React from 'react';
import {Link} from 'react-router-dom';

export default function Jewelry() {
    return(
        <ul>
        <li><Link to='/Earrings'>Ээмэг зүүлт</Link></li>
        <li><Link to='/Ring'>Бөгж</Link></li>
        </ul>
    );
}