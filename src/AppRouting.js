import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import {ItemList} from "./components/ItemList/ItemList"
import { Navbar } from "./components/Navbar/Navbar";
import { Cart } from "./components/Cart/Cart";
import { Login } from "./components/Login/Login";

export const AppRouting = () => {
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ItemList/>} />
        <Route path="/category/:id" element={<ItemList/>} />
        <Route path="/item/:id" element={<ItemDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>
}