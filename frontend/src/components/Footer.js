
import React from 'react';

import  {MDBFooter, MDBCol, MDBRow, MDBIcon, MDBBtn, MDBContainer} from 'mdb-react-ui-kit'
export default function Footer() {
  return (
    <MDBFooter className='text-center sticky-bottom' color='white'>
      <MDBContainer fluid style={{height:'auto'}}>
    

        <section >
          <MDBRow >
            <MDBCol style={{marginTop:'20px'}}> 
                <h6>Zolboo's shopping</h6>
            <p>
         Бид хамгийн чанартай бараа бүтээгдэхүүнийг <br/>түргэн шуурхай хүргэж өгч үйлчилнэ.
          </p>
            </MDBCol>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{marginTop:'20px'}}>
              <h6>Дүрэм журам</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Бидний тухай
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Үйлчилгээний нөхцөл
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Нууцлалын баталгаа
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0' style={{marginTop:'20px'}}>
              <h6>Хэрэглэгчийн булан</h6>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Худалдан авах заавар
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Түгээмэл асуулт
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white text-decoration-none'>
                    Хүргэлтийн нөхцөл
                  </a>
                </li>
    
              </ul>
            </MDBCol>

         <MDBCol >
            <h6>Холбоо барих</h6>
            <MDBRow>
             
           <MDBCol>
            <MDBIcon    className='ms-1'icon='phone' />
            <p></p>
             <MDBIcon className='ms-1' icon='envelope'/>
           </MDBCol>
      
           
            <MDBCol>
                <p>89555118</p>
                <p>zolboo@gmail.com</p> 
            </MDBCol>
          
       </MDBRow>
            <section className='mb-4 ms-4 '>
              
          <MDBBtn outline color="light" floating className='m-2 btn-sm mb-4 ms-4' href='https://www.facebook.com/zolboo.dorjpalam/' role='button'>
            <MDBIcon fab icon='facebook-f fa-xs' />
          </MDBBtn>
   
          <MDBBtn outline color="light" floating className='m-2 btn-sm mb-4'  href='https://www.instagram.com/zolbuuh/' role='button'>
            <MDBIcon fab icon='instagram fa-xs' />
          </MDBBtn>


        </section>
         </MDBCol>
<hr/>
          </MDBRow> 
        </section>
  
      <div className='text-center ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Copyright 2023 
       
          Zolboo
        </div>
         </MDBContainer>
    </MDBFooter>
  );
}

