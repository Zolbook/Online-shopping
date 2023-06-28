import React, { useContext } from 'react';
import { DataContext } from '../Context';
import trash from '../pages/imgs/trash.svg'


export default function Favorite () {
     const {addFav, removeFav, favDelete, favoritePr, handleChange} = useContext(DataContext);
     const itemPrice = favoritePr.reduce((prevItem, currentItem)=>prevItem+ currentItem.qty*currentItem.price,0);
    return (
        <>
        {favoritePr.length===0&<div>Хадгалсан бараа хоосон</div>}
        <main><article>
      
      {favoritePr.map((favProduct) =>( 
   
            
        <table key={favProduct._id} className='box'>
          <tr className='boxContents'>
          
          <td className='row'>
          <img style={{height: '100px', width:'130px', borderRadius:'15px', boxShadow:'0px 0px 10px gray', marginTop:'15px'}} src={favProduct.url}/>
          </td>
          
          <td className='row' style={{justifyContent:'center'}}>{favProduct.name}</td>
          <td className='row' style={{justifyContent:'center', marginBottom:'15px'}}>{favProduct.qty*favProduct.price}₮</td>
          
          <td > <button className='quantity1' onClick={()=>addFav(favProduct)}>+</button>{favProduct.qty}
             <button className='quantity2' onClick={()=>removeFav(favProduct)} disabled={favProduct.qty===1}>-</button>  </td>
       <td value={favProduct._id} onClick={handleChange(favProduct._id)}><img onClick={()=>favDelete(favProduct._id)} className= 'trash' src={trash}/>  </td>
          </tr>
   

</table>
))}</article>
</main>

      
        </>

)
}