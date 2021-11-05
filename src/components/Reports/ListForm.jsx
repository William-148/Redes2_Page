import React, { useState } from 'react';
import Report from '../../services/Report';

function ListForm(props){
    const [carnet, setCarnet] = useState('');
    const [list, setList] = useState([]);
    const [processBy, setProcessBy] = useState('');

    const carnetHandler = (e) => {
        setCarnet(e.target.value);
    }

    const search = async () => {
        const { array, server } = carnet === '' ? 
            await Report.getAll(): 
            await Report.getByCarnet(carnet);
        setList(array);
        setProcessBy(server);
    }

    const keyUpHandler = (e) => {
        if(e.keyCode === 13) search()
    }

    const selectReport = (item) => props?.selectReport(item)

    const getList = () => {
        return list.map((row)=>(
            <tr key={row.idReporte} onDoubleClick={()=>selectReport(row)}>
                <th scope="row">{row.carnet}</th>
                <td>{row.nombre}</td>
                <td>{row.curso}</td>
                <td>{Report.convertDate(row.fecha)}</td>
                <td>{row.servidor}</td>
            </tr>
        ))
    }

    return(
        <div className="col-md-9 register-right">
            <div className="tab-content" >
                <h3 className="register-heading">Listado de Reportes</h3>
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
                        <th scope="col">Nombre</th>
                        <th scope="col">Curso/Proyecto</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Servidor</th>
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

export default ListForm;