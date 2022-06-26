import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Personal from "../../pages/Personal";
import DetailNft from "../../components/organism/Detail";
const PublickRoute = () => {
    return (
        <Routes>
            <Route element={<Home/>} path={"/"}/>
            <Route element={<Personal/>} path={"/personal"}/>
            <Route element={<DetailNft/>} path={"/nft/:id"}></Route>
        </Routes>
    );
};

export default PublickRoute;