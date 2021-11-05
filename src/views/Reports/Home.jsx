import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from '../../components/Reports/CreateForm'
import ViewForm from '../../components/Reports/ViewForm'
import ListForm from '../../components/Reports/ListForm'
import Logo from '../../assets/usac.png'

function Home(){
    //https://image.ibb.co/n7oTvU/logo_white.png
    const SEND_REPORT = 0;
    const LIST_REPORT = 1;
    const VIEW_REPORT = 2;
    const [view, setView] = useState(0);
    const [selectedReport, setSelectedReport] = useState(undefined)

    const viewHandler = (e) => {
        setView(Number(e.target.value))
    }

    const viewReportHandler = (item) => {
        setSelectedReport(item)
        setView(VIEW_REPORT)
    }

    return (
        <div className="register">
            <div className="row">
                <div className="col-md-3 register-left">
                    <img className="img-logo" src={Logo} alt="Usac"/>
                    <h3>Bienvenido</h3>
                    <p>Puedes hacer consultas de reportes aquí!</p>
                    <div className="btn-group-vertical" style={{marginBottom:20}}>
                        <Link className="btn btn-info" to="/asistencia">Asistencia</Link>
                    </div>
                    <br />
                    <div className="btn-group-vertical" style={{marginBottom:20}}>
                        <button className="btn btn-primary" value={SEND_REPORT} onClick={viewHandler}>Enviar Reporte</button>
                        <button className="btn btn-primary" value={LIST_REPORT} onClick={viewHandler}>Listar Reportes</button>
                    </div>
                </div>
                { 
                    view === SEND_REPORT ? <CreateForm /> :
                    view === LIST_REPORT ? <ListForm selectReport={viewReportHandler}/> :
                    <ViewForm report={selectedReport} />
                }
            </div>
        </div>
    )
}

export default Home;