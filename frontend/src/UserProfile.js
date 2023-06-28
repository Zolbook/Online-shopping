import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";


export default function UserProfile() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <>
            {isAuthenticated ? (

                <MDBDropdown>

                    <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                        <img src={user.picture} className="rounded-circle" height="22" alt="pic" />
                    </MDBDropdownToggle >
                    <MDBDropdownMenu >
                        <MDBDropdownItem style={{textAlign:'center'}}>
                          <Link to='/Profile' style={{textDecoration:'none'}}>Хэрэглэгчийн <br/> хэсэг</Link>
                        </MDBDropdownItem>
                        <MDBDropdownItem style={{textAlign:'center'}}>
                            <MDBBtn onClick={() => logout({ returnTo: window.location.origin })}>
                                Гарах </MDBBtn>
                        </MDBDropdownItem>
                    </MDBDropdownMenu>

                </MDBDropdown>
            ) : (

                <MDBBtn onClick={() => loginWithRedirect()}>Нэвтрэх</MDBBtn>

            )}

        </>
    )
}