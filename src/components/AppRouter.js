import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Cars from './Cars';
import CreateAgreement from './CreateAgreement';
import AddCar from "./AddCar";
import Customers from "./Customers";
import AddCustomer from "./addCustomer";
import SeeReservations from "./SeeReservations";
import CreateDamageReport from "./CreateDamageReport";
import SeeDamageReports from "./SeeDamageReports";

// BrowserRouter with routes, notice homepage being well, the home page at the root
const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/cars" element={<Cars />} />
                    <Route path="/addCar" element={<AddCar />} />
                    <Route path="/makeOrder" element={<CreateAgreement />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/addCustomer" element={<AddCustomer />} />
                    <Route path="/reservations" element={<SeeReservations />} />
                    <Route path="/createDamageReport" element={<CreateDamageReport />} />
                    <Route path="/damageReports" element={<SeeDamageReports />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;