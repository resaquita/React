import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./components/Cart/Cart";
import { Login } from "./components/Login/Login";
import { Checkout } from "./components/Checkout/Checkout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

export const AppRouting = () => {
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/checkout" element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
}