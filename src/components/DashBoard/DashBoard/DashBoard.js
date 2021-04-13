import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByData from '../AppointmentsByDate/AppointmentsByData';
import SideBar from '../SideBar/SideBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: "#F4FDFB",
    height:"100%"
}

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);

    }

    useEffect(() => {
        fetch('http://localhost:8001/appointmentsByData', {
            method: 'POSt',
            headers: {'content-Type': 'application/json'},
            body: JSON.stringify({date: selectedDate, email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-5 d-flex justify-content-center">
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
                </div>
                <div className="col-md-5">
                    <AppointmentsByData appointments={appointments}></AppointmentsByData>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;