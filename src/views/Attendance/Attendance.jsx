import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AttendanceForm from '../../components/Attendance/AttendanceForm'
import ListAttendance from '../../components/Attendance/ListAttendance';
import ListEvent from '../../components/Attendance/ListEvent';
import Logo from '../../assets/usac.png'

function Attendance(){
    //https://image.ibb.co/n7oTvU/logo_white.png
    const SEND_REPORT = 0;
    const LIST_REPORT = 1;
    const VIEW_REPORT = 2;
    const [view, setView] = useState(0);

    const viewHandler = (e) => {
        setView(Number(e.target.value))
    }

    return (
        <div className="register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img className="img-logo" src={Logo} alt="Usac"/>
                    <h3>Bienvenido</h3>
                    <p>Puedes hacer consultas de reportes aquí!</p>
                    <div className="btn-group-vertical" style={{marginBottom:20}}>
                        <Link className="btn btn-info" to="/report">Reportes</Link>
                    </div>
                    <br />
                    <div className="btn-group-vertical" style={{marginBottom:20}}>
                        <button className="btn btn-primary" value={SEND_REPORT} onClick={viewHandler}>Registrar Asistencia</button>
                        <button className="btn btn-primary" value={LIST_REPORT} onClick={viewHandler}>Asistencias</button>
                        <button className="btn btn-primary" value={VIEW_REPORT} onClick={viewHandler}>Eventos</button>
                    </div>
                </div>
                { 
                    view === SEND_REPORT ? <AttendanceForm /> :
                    view === LIST_REPORT ? <ListAttendance /> :
                    <ListEvent />
                }
            </div>
        </div>
    )
}

export default Attendance;