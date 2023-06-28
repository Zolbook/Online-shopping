import React, { useState } from 'react';
import UserProfile from './UserProfile';
import homeImage from './pages/imgs/home.png';


import { Link } from 'react-router-dom';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse, MDBBadge
} from 'mdb-react-ui-kit';
import logo from './pages/imgs/logo.png';
import Search from './Search/Search';


 export default function Navbar(props) {
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light' className='sticky-pop'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <img
                            src={logo}
                            height='60'
                            width='60'
                            alt=''
                            loading='lazy'
                        />
                    </MDBNavbarBrand>


                    <MDBNavbarToggler
                        type='button'
                        aria-label='Toggle navigation'
                        onClick={toggleShow}

                    >
                        <MDBIcon icon='bars' fas />

                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showShow}>
                        <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">

                            <MDBNavbarItem>
                                <Link to='/Home'><img src={homeImage} style={{ paddingRight: '20px' }} /></Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem className="d-flex flex-row align-items-center w-auto">
                                <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='nav-link' role='button '>Ангилал</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem >
                                           
                                            <Link to='/Beauty'><i className="fas fa-eye">          Гоо сайхан</i></Link>
                                         
                                            <ul className='dropdown-menu dropdown-submenu'>
                                                <MDBDropdownItem>
                                                    <Link to='/skincares'>Арьс арчилгаа</Link>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <Link to='/makeups'>Нүүр будалт</Link>
                                                </MDBDropdownItem>
                                            </ul>
                                        </MDBDropdownItem>
                                        <MDBDropdownItem >
                                            <Link to='/Clothes'><i className= 'fas fa-tshirt me-auto' >          Хувцас</i></Link>
                                            <ul className='dropdown-menu dropdown-submenu'>
                                                <MDBDropdownItem>
                                                    <Link to='/MenCloth'>Эрэгтэй хувцас</Link>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <Link to='/WomenCloth'>Эмэгтэй хувцас</Link>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <Link to='/kidsclothes'>Хүүхдийн хувцас</Link>
                                                </MDBDropdownItem>
                                            </ul>
                                        </MDBDropdownItem>
                
                                        <MDBDropdownItem>
                                            <Link to='/Jewelry'><i className= 'fas fa-ring me-4'>           Үнэт эдлэл</i></Link>
                                            <ul className='dropdown-menu dropdown-submenu'>
                                                <MDBDropdownItem>
                                                    <Link to='/Earrings'>Ээмэг зүүлт</Link>
                                                </MDBDropdownItem>
                                                <MDBDropdownItem>
                                                    <Link to='/Ring'>Бөгж</Link>
                                                </MDBDropdownItem>
                                            </ul>
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>

                        </MDBNavbarNav>
                    </MDBCollapse >
                    <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
                        <Search />
                    </MDBNavbarNav>

                    <MDBNavbarNav className="d-flex flex-row align-items-center w-auto" >


                        <MDBNavbarLink><Link to='/Basket'><MDBIcon fas icon="cart-plus" className='fa-lg' /></Link>
                            {props.countCartItems ? (<MDBBadge className=' top-0 start-100 translate-middle badge rounded-pill bg-danger'>{props.countCartItems}</MDBBadge>

                            ) : ('')}
                        </MDBNavbarLink>
                      <MDBNavbarLink>
                        <Link to='/Favorite'><i className="far fa-heart fa-lg"></i></Link>
                        {props.countFavorites ? (<MDBBadge className=' top-0 start-100 translate-middle badge rounded-pill bg-danger'>{props.countFavorites}</MDBBadge>

                            ) : ('')}
                   </MDBNavbarLink>
                        <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
                            <UserProfile />
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}