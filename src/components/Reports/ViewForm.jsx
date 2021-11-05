import React, { useState, useEffect} from 'react';
import Report from '../../services/Report';

function ViewForm(props){
    
    const [carnet, setCarnet] = useState('');
    const [name, setName] = useState('');
    const [proyect, setProyect] = useState('');
    const [processBy, setProcessBy] = useState('');
    const [date, setDate] = useState('');
    const [report, setReport] = useState('');

    useEffect(() => {
        const setFields = (data) =>{
            setCarnet(data.carnet);
            setName(data.nombre);
            setProyect(data.curso);
            setProcessBy(data.servidor)
            setDate(Report.convertDate(data.fecha))
            setReport(data.texto);
        }

        setFields(props.report);
    },[]);

    

    return(
        <div className="col-md-9 register-right">
            <form className="tab-content" >
                <h3 className="register-heading">Información del Reporte</h3>
                <div className="row register-form">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Carnet:</label>
                            <input type="text" className="form-control" 
                                required
                                value={carnet}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" className="form-control" 
                                required
                                value={name}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Curso/Proyecto:</label>
                            <input type="text" className="form-control" 
                                required
                                value={proyect}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Procesado Por:</label>
                            <input type="text" className="form-control"
                                required
                                value={processBy}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Fecha:</label>
                            <input type="text" className="form-control" 
                                required
                                value={date}
                                readOnly
                            />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Cuerpo del Reporte:</label>
                            <textarea name="mensaje"  
                                className="form-control"  
                                rows="10" 
                                required
                                value={report}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ViewForm;