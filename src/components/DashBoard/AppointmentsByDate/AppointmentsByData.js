import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByData = ({ appointments }) => {
    console.log(appointments.length);
    return (
        <div>
            <h2>Appointments: {appointments.length}</h2>
            {
                // appointments.map(app => <li key ={app._id}>{app.name}</li>)

                appointments.length ?
                    <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                    :
                    <div className="p-5">
                        <h4 className="lead text-center">No Appointments for this Date</h4>
                    </div>
            }
        </div>
    );
};

export default AppointmentsByData;