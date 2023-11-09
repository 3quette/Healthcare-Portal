import "./components/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorList from "./components/DoctorList";
import MedicineList from "./components/MedicineList";
import Cart from "./components/Cart";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import AdminPortal from "./components/AdminPortal";
import PharmacistCRUD from "./components/PharmacistCRUD";
import DoctorCRUD from "./components/DoctorCRUD";
import MedicineCRUD from "./components/MedicineCRUD";
import HospitalCRUD from "./components/HospitalCRUD";
import DoctorAdd from "./components/DoctorAdd";
import ScheduleAdd from "./components/ScheduleAdd";
import DoctorEdit from "./components/DoctorEdit";
import DoctorView from "./components/DoctorView";
import DoctorDelete from "./components/DoctorDelete";
import MedicineAdd from "./components/MedicineAdd";
import MedicineDelete from "./components/MedicineDelete";
import MedicineEdit from "./components/MedicineEdit";
import HospitalEdit from "./components/HospitalEdit";
import HospitalDelete from "./components/HospitalDelete";
import PharmacistEdit from "./components/PharmacistEdit";
import PharmacistDelete from "./components/PharmacistDelete";
import PharmacistAdd from "./components/PharmacistAdd";
import Appointments from "./components/Appointments";
import OnlineConsult from "./components/OnlineConsult";
import HospitalList from "./components/HospitalList";
import DoctorSchedule from "./components/DoctorSchedule";
import Slider from "react-swift-slider";
import ScrollToTopButton from "./components/ScrollToTopButton";
import HospitalAdd from "./components/HospitalAdd";
import Orders from "./components/Orders";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/DoctorList" element={<DoctorList />}></Route>
          <Route path="/MedicineList" element={<MedicineList />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>
          <Route path="/AdminPortal" element={<AdminPortal />}></Route>
          <Route path="/PharmacistCRUD" element={<PharmacistCRUD />}></Route>
          <Route path="/MedicineCRUD" element={<MedicineCRUD />}></Route>
          <Route path="/DoctorCRUD" element={<DoctorCRUD />}></Route>
          <Route path="/HospitalCRUD" element={<HospitalCRUD />}></Route>
          <Route path="/DoctorAdd" element={<DoctorAdd />}></Route>
          <Route path="/AddSchedule" element={<ScheduleAdd />}></Route>
          <Route path="/DoctorEdit" element={<DoctorEdit />}></Route>
          <Route path="/DoctorView" element={<DoctorView />}></Route>
          <Route path="/DoctorDelete" element={<DoctorDelete />}></Route>
          <Route path="/MedicineAdd" element={<MedicineAdd />}></Route>
          <Route path="/MedicineDelete" element={<MedicineDelete />}></Route>
          <Route path="/MedicineEdit" element={<MedicineEdit />}></Route>
          <Route path="/HospitalEdit" element={<HospitalEdit />}></Route>
          <Route path="/HospitalDelete" element={<HospitalDelete />}></Route>
          <Route path="/PharmacistEdit" element={<PharmacistEdit />}></Route>
          <Route path="/PharmacistDelete" element={<PharmacistDelete />}></Route>
          <Route path="/PharmacistAdd" element={<PharmacistAdd />}></Route>
          <Route path="/Appointments" element={<Appointments />}></Route>
          <Route path="/OnlineConsultancy" element={<OnlineConsult />}></Route>
          <Route path="/HospitalList" element={<HospitalList />}></Route>
          <Route path="/DoctorSchedule" element={<DoctorSchedule />}></Route>
          <Route path="/Slider" element={<Slider />}></Route>
          <Route path="/ScrollToTopButton" element={<ScrollToTopButton />}></Route>
          <Route path="/HospitalAdd" element={<HospitalAdd />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
         


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
