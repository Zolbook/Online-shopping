import React from 'react';

import { Link } from 'react-router-dom';

export default function Beauty() {
    return(
    <>
  <ul>
    <li><Link to='/Makeup'>Нүүр будалт</Link></li>
    <li><Link to='/Skincare'>Арьс арчилгаа</Link></li>
    
  </ul>
    </>
    );
}

