import { Route, Routes, Navigate } from "react-router-dom";


import Home from "../pages/Home";
import Payment from "../pages/Payment";
const Router = () => {

    return (
        <>
            <Routes>
                <Route path="/" exact={true} element={<Home/>} />
                <Route path="payment" element={<Payment/>}/>
            </Routes>
        </>
    );
};

export default Router;