import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context";
import { useAuth0 } from "@auth0/auth0-react";
import trash from '../pages/imgs/trash.svg'
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { elements } from "./Select";

export default function Basket() {
    const { onAdd, onRemove, cartItems, onDelete, handleChangeCart } = useContext(DataContext);
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const [currentElementIndex, setCurrentElementIndex] = useState(0);

    const [visible, setVisible] = useState(true);
    const handle = () => {
        setCurrentElementIndex((currentElementIndex + 1) % elements.length);

    }
    const w = () => {
        setVisible(false);
    }

    const t = () => {
        setVisible(true);
    }



    return (<div className='shopping'>

        {cartItems.length === 0 && <div>Сагс хоосон</div>}
        <main><article>
            <div style={{ marginLeft: '30%' }} className="row  flex-col  mt-5">
                <div className='col-1'>
                    {currentElementIndex === 0 && <i className='fas fa-shopping-basket fa-xl text-success' />}
                    {currentElementIndex === 1 && <i className='fas fa-shopping-basket text-secondary fa-xl' />}
                    {currentElementIndex === 2 && <i className='fas fa-shopping-basket text-secondary fa-xl' />}
                </div><div className='col-1'>
                    <i className="fas fa-arrow-right text-muted"></i></div>
                <div className='col-1'>
                    {currentElementIndex === 0 && <i className='fas fa-home fa-xl text-secondary' />}
                    {currentElementIndex === 1 && <i className='fas fa-home text-success fa-xl' />}
                    {currentElementIndex === 2 && <i className='fas fa-home text-secondary fa-xl' />}
                </div><div className='col-1'>
                    <i className="fas fa-arrow-right text-muted"></i></div>
                <div className='col-1'>
                    {currentElementIndex === 0 && <i className='fas fa-money-bill-alt text-secondary fa-xl' />}
                    {currentElementIndex === 1 && <i className='fas fa-money-bill-alt text-secondary fa-xl' />}
                    {currentElementIndex === 2 && <i className='fas fa-money-bill-alt fa-xl text-success' />}
                </div>
            </div>{visible &&
               cartItems.map((item) => (
                <table key={item.product._id} className='box'>
                  <tr className='boxContents'>
                    <td className='row'>
                      <img style={{ height: '100px', width: '130px', borderRadius: '15px', boxShadow: '0px 0px 10px gray', marginTop: '15px' }} 
                      src={`${process.env.REACT_APP_API_URI}/${item.product.img}`} />
                    </td>
                    <td className='row' style={{ justifyContent: 'center' }}>{item.product.name}</td>
                    <td className='row' style={{ justifyContent: 'center', marginBottom: '15px' }}>{item.product.price * item.quantity}₮</td>
                    <td>
                      <button className='quantity1' onClick={() => onAdd(item.product)}>+</button>{item.quantity}
                      <button className='quantity2' onClick={() => onRemove(item.product)} disabled={item.quantity === 1}>-</button>
                    </td>
                    <td onClick={() => onDelete(item.product._id)}><img className='trash' src={trash} />  </td>
                  </tr>
                </table>
              ))}
              </article>
            {elements[currentElementIndex]}
        </main>

        <section className='total'>
            <aside >
                {cartItems.length !== 0 && (<div className='priceSection'>

                   


                </div>)}  
                { currentElementIndex === 0 && <div onClick={w}><MDBBtn onClick={handle}>Худалдан авах</MDBBtn></div>}
                {currentElementIndex === 1 && <MDBBtn onClick={handle}>Төлбөр төлөх</MDBBtn>}
                {currentElementIndex === 2 && <div onClick={t}><MDBBtn onClick={handle}>Сагс руу буцах</MDBBtn></div>}
            </aside>
        </section>
    </div>

    );
}

