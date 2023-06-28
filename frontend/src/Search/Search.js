import React, {useContext, useState} from 'react';
import Scroll from './Scroll';
import {MDBCollapse, MDBNavbarItem, MDBInput, MDBIcon, MDBListGroup, MDBListGroupItem} from 'mdb-react-ui-kit';
import SearchList from './SearchList';
import { DataContext } from '../Context';


const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

export default function Search () {

    const {makeup, skincare, kidClothes, menclothes, womenClothes, rings, chains} = useContext(DataContext)
    const details1 = chains
    const details2 = kidClothes
    const details4 = makeup
    const details5 = rings
    const details6 = menclothes
    const details7 = womenClothes
    const details8 = skincare
    
    const [searchBar, setSearchBar] = useState('');
    const[searchShow, setSearchShow] = useState (false);
   
    const filteredPr1 =(searchBar) => {
        return details1.filter(item => item.name.toLowerCase().includes(searchBar.toLowerCase()))
         
      };
    const filteredPr2 = (searchBar)=> {
    return details2.filter(item=>item.name.toLowerCase().includes(searchBar.toLowerCase()))
    }
    
    const filteredPr4 = (searchBar)=> {
    return details4.filter(item=>item.name.toLowerCase().includes(searchBar.toLowerCase()))
    }
    const filteredPr5 = (searchBar)=> {
    return details5.filter(item=>item.name.toLowerCase().includes(searchBar.toLowerCase()))
    }
    const filteredPr6 = (searchBar)=> {
    return details6.filter(item=>item.name.toLowerCase().includes(searchBar.toLowerCase()))
    }
    const filteredPr7 = (searchBar)=> {
    return details7.filter(item=>item.name.toLowerCase().includes(searchBar.toLowerCase()))
    }
    const filteredPr8 = (searchBar)=> {
    return details8.filter(item=>item.name.toLowerCase().includes(searchBar.toLowerCase()))
    }
    
   const filteredsearch1 = filteredPr1(searchBar);
   const filteredsearch2 = filteredPr2(searchBar);
 
   const filteredsearch4 = filteredPr4(searchBar);
   const filteredsearch5 = filteredPr5(searchBar);
   const filteredsearch6 = filteredPr6(searchBar);
   const filteredsearch7 = filteredPr7(searchBar);
   const filteredsearch8 = filteredPr8(searchBar);
   
   const handleChange =e=> {
    setSearchBar(e.target.value);
    if (e.target.value===''){
        setSearchShow(false)
    } else {
        setSearchShow(true)
    }
}

const handleClick =() => {
    setSearchBar('')
    setSearchShow(false);
}

function searchList () {
    if (searchShow)
    return (
        <Scroll >
            <SearchList    filteredProduct1={filteredsearch1}
                        filteredProduct2={filteredsearch2} 
                        filteredProduct4={filteredsearch4} filteredProduct5={filteredsearch5}
                        filteredProduct6={filteredsearch6} filteredProduct7={filteredsearch7} filteredProduct8={filteredsearch8}
                        />
     
        </Scroll>
    );
}

return (
    <>

    
    <MDBNavbarItem className="d-flex align-items-center"> 
    <MDBListGroupItem className='float-md-start'> {searchList()}</MDBListGroupItem>
      <MDBInput id='form1' type='text' value={searchBar} onChange={handleChange}/>
      <MDBIcon fas icon="search mx-2"/>
    </MDBNavbarItem>  
 

 
</>
)
}



  



