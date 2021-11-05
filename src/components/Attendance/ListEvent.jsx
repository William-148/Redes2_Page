import React, { useState } from 'react';
import Attendance from '../../services/Attendance';
const Default = 'https://image.ibb.co/n7oTvU/logo_white.png';

function ListEvent(props){
    const [carnet, setCarnet] = useState('');
    const [list, setList] = useState([]);
    const [processBy, setProcessBy] = useState('');

    const carnetHandler = ({target}) => setCarnet(target.value);

    const search = async () => {
        if(carnet === '') return;
        const { array, server } = await Attendance.getListEvent(carnet);
        setList(array);
        setProcessBy(server);
    }

    const keyUpHandler = (e) => {
        if(e.keyCode === 13) search()
    }

    const getList = () => {
        return list.map((row)=>(
            <tr key={row.idEvento} >
                <th scope="row">{row.carnet}</th>
                <td>{row.estudiante}</td>
                <td>{row.idEvento}</td>
                <td>{row.evento}</td>
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
                <h3 className="register-heading">Listado de Eventos Asistidos</h3>
                <div className="row search-form">
                    <label>Carnet:</label>
                    <div className="col">
                        <input type="number" className="form-control" 
                            placeholder="Ingrese un carnet"
                            value={carnet}
                            onChange={carnetHandler}
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
                        <th scope="col">Carnet</th>
                        <th scope="col">Estudiante</th>
                        <th scope="col">ID Evento</th>    
                        <th scope="col">Evento</th>
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

export default ListEvent;