import React, { useState } from 'react';
import Attendance from '../../services/Attendance';
const Default = 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif';

function ListAttendance(props){
    const [idEvent, setIdEvent] = useState('');
    const [list, setList] = useState([]);
    const [processBy, setProcessBy] = useState('');

    const idEventHandler = ({target}) => setIdEvent(target.value);

    const search = async () => {
        if(idEvent === '') return;
        const { array, server } = await Attendance.getList(idEvent);
        setList(array);
        setProcessBy(server);
    }

    const keyUpHandler = (e) => {
        if(e.keyCode === 13) search()
    }

    //const selectReport = (item) => props?.selectReport(item)

    const getList = () => {
        return list.map((row, index)=>(
            <tr key={index} >
                <th scope="row">{row.evento}</th>
                <td>{row.carnet}</td>
                <td>{row.estudiante}</td>
                <td>{Attendance.convertDate(row.fecha)}</td>
                <td>{row.servidor}</td>
                <td>
                    <a href={!!row.image? row.image === '' ? Default : row.image : row.image } className="btn btn-sm btn-secondary" target="_blank">
                        <i className="fas fa-image fa-ms"></i>
                    </a>
                </td>
            </tr>
        ))
    }

    return(
        <div className="col-md-9 register-right">
            <div className="tab-content" >
                <h3 className="register-heading">Listado de Asistencia</h3>
                <div className="row search-form">
                    <label>ID Evento:</label>
                    <div className="col">
                        <input type="number" className="form-control" 
                            placeholder="Ingrese ID del evento"
                            value={idEvent}
                            onChange={idEventHandler}
                            onKeyUp={keyUpHandler}
                        />
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary" onClick={search}>Buscar</button>
                    </div>
                </div>
                <div className="row report-table">
                    <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Evento</th>
                        <th scope="col">Carnet</th>
                        <th scope="col">Estudiante</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Servidor</th>
                        <th scope="col">Captura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getList()}
                    </tbody>
                    </table>
                </div>
                <label>Solicitud atendida por el servidor "{processBy}"</label>
            </div>
        </div>
    )
}

export default ListAttendance;