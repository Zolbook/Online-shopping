
import React, { useContext } from "react";
import { DataContext } from "./Context";
import Skincare from "./pages/BeautySection/Skincare";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beauty from "./pages/BeautySection/Beauty";
import Clothes from "./pages/ClothesSection/Clothes";
import Jewelry from "./pages/JewelrySection/Jewelry"
import WomenCloth from "./pages/ClothesSection/WomenCloth";
import MenCloth from "./pages/ClothesSection/MenCloth";
import KidCloth from "./pages/ClothesSection/KidCloth";
import Basket from "./components/Basket";
import Home from "./pages/Home";
import Makeup from "./pages/BeautySection/Makeup";
import Ring from "./pages/JewelrySection/Ring";
import Earrings from "./pages/JewelrySection/Earrings";
import RingProduct from "./pages/JewelrySection/RingProduct";
import { Profile } from "./components/Profile";
import Navbar from "./NavbarPage";
import Favorite from "./components/Favorite";
import SkincareProduct from "./pages/BeautySection/SkincareProduct";
import KidClothesProduct from "./pages/ClothesSection/KidClothesProduct";
import MakeupProduct from "./pages/BeautySection/MakeupProduct";
import MenclothProduct from "./pages/ClothesSection/MenclothProduct";
import WomenClothProduct from "./pages/ClothesSection/WomenClothProduct";
import ChainProduct from "./pages/JewelrySection/ChainProduct";
export const BrRouter = () => {
    const { onAdd, onRemove, cartItems, products, favoritePr, addFav, removeFav, favDelete } = useContext(DataContext);

    return (
        <>
            <div className="App">
                <BrowserRouter>

                    <Navbar countCartItems={cartItems.length} countFavorites={favoritePr.length} />
                    <Routes>
                        <Route path="/Clothes" element={<Clothes />} />
                        <Route path="/Jewelry" element={<Jewelry />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Beauty" element={<Beauty />} />
                        <Route path='/skincares/:_id' element={<SkincareProduct/>}/>
                        <Route path="/skincares" element={<Skincare/>} />
                        <Route path='/kidsclothes/:_id' element={<KidClothesProduct/>}/>
                        <Route path="/kidsclothes" element={<KidCloth />} />
                        <Route path='/makeups' element={<Makeup />} />
                        <Route path='/makeups/:_id' element={<MakeupProduct />} />
                        <Route path="/WomenCloth" element={<WomenCloth />} />
                        <Route path="/WomenCloth/:_id" element={<WomenClothProduct />} />
                        <Route path="/MenCloth" element={<MenCloth />} />
                        <Route path="/MenCloth/:_id" element={<MenclothProduct />} />
                        <Route path='/Ring' element={<Ring />} />
                        <Route path='/Ring/:_id' element={<RingProduct />} />
                        <Route path='/Earrings' element={<Earrings />} />
                        <Route path='/Earrings/:_id' element={<ChainProduct />} />


                        <Route path="/Basket" element={<Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} />}></Route>

                        

                        <Route path='/Profile' element={<Profile />} />

                        <Route path='/Favorite' element={<Favorite addFav={addFav} removeFav={removeFav} favDelete={favDelete}
                            favoritePr={favoritePr} />} />

                      

                    </Routes>
                </BrowserRouter>

            </div>
        </>
    );
}