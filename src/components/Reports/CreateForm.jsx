import React, { useState } from 'react';
import Report from '../../services/Report';

const CreateForm = () => {
    const [carnet, setCarnet] = useState('');
    const [name, setName] = useState('');
    const [proyect, setProyect] = useState('');
    const [report, setReport] = useState('');

    const carnetHandler = (e) => {
        setCarnet(e.target.value);
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const proyectHandler = (e) => {
        setProyect(e.target.value);
    }

    const reportHandler = (e) => {
        setReport(e.target.value);
    }

    const clearFields = () =>{
        setCarnet('');
        setName('');
        setProyect('');
        setReport('');
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await Report.saveReport({
            carnet,
            name,
            proyect,
            report
        })
        if (result)
            clearFields();
    }

    return(
        <div className="col-md-9 register-right">
            <form className="tab-content" 
                onSubmit={onSubmit}>
                <h3 className="register-heading">Reporte De Practicante</h3>
                <div className="row register-form">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Carnet:</label>
                            <input type="number" className="form-control" 
                                placeholder="Ingrese su carnet"
                                required
                                value={carnet}
                                onChange={carnetHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" className="form-control" 
                                placeholder="Ingrese su nombre"
                                required
                                value={name}
                                onChange={nameHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label>Curso/Proyecto:</label>
                            <input type="text" className="form-control" 
                                placeholder="Indique su curso o proyecto"
                                required
                                value={proyect}
                                onChange={proyectHandler}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Cuerpo del Reporte:</label>
                            <textarea name="mensaje"  
                                placeholder="Escriba su reporte" 
                                className="form-control"  
                                rows="10" 
                                required
                                value={report}
                                onChange={reportHandler}
                            />
                        </div>
                        <input type="submit" className="btnRegister"  value="Registrar"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateForm;