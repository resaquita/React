import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/ItemDetail/ItemDetail";
import {ItemList} from "./components/ItemList/ItemList"
import { Navbar } from "./components/Navbar/Navbar";

export const AppRouting = () => {
    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ItemList/>} />
        <Route path="/category/:id" element={<ItemList/>} />
        <Route path="/item/:id" element={<ItemDetail/>} />
    </Routes>
    </BrowserRouter>
}