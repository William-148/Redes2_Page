import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Attendance from '../../services/Attendance';
import API from '../../services/Attendance';
import './AttendanceForm.css'

const Default = 'https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif'

const AttendanceForm = () => {
    const [carnet, setCarnet] = useState('');
    const [name, setName] = useState('');
    const [idEvent, setIdEvent] = useState('');
    const [event, setEvent] = useState('');
    const [photo64, setPhoto64] = useState(null);
    const [photo64Name, setPhoto64Name] = useState(null);

    const carnetHandler = (e) => setCarnet(e.target.value);
    const nameHandler = (e) => setName(e.target.value);
    const eventHandler = (e) => setEvent(e.target.value);
    const idEventHandler = (e) => setIdEvent(e.target.value);

    const makeObject=()=>{
        return {
            carnet,
            estudiante:name,
            idEvento:idEvent,
            evento:event,
            image:photo64.split(',')[1],
            ext:photo64Name.split('.')[1]
        }
    }

    const clearFields = () =>{
        setCarnet('');
        setName('');
        setEvent('');
        setIdEvent('');
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!photo64) {
            Swal.fire(
                '¡Warning!',
                'No se eligió ninguna imagen',
                'warning'
            );
            return;
        }
        const result = await API.create(makeObject());
        if (result) clearFields();
    }

    const imageHandler = ({ target }) => {
        Attendance.fileToBase64(target.files[0], 
            (name, base64)=>{
                setPhoto64(base64);
                setPhoto64Name(name);
            }
        );
    }

    return(
        <div className="col-md-9 register-right">
            <form className="tab-content" 
                onSubmit={onSubmit}>
                <h3 className="register-heading">Registro de Asistencia</h3>
                <div className="row register-form">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Carnet:</label>
                            <input type="number" className="form-control" 
                                placeholder="Ingrese el carnet"
                                required
                                value={carnet}
                                onChange={carnetHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre Estudiante:</label>
                            <input type="text" className="form-control" 
                                placeholder="Ingrese nombre del estudiante"
                                required
                                value={name}
                                onChange={nameHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label>Id del Evento:</label>
                            <input type="number" className="form-control" 
                                placeholder="Indique el ID del evento"
                                required
                                value={idEvent}
                                onChange={idEventHandler}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nombre del Evento:</label>
                            <input type="text" className="form-control" 
                                placeholder="Ingrese el nombre del evento"
                                required
                                value={event}
                                onChange={eventHandler}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Captura de Pantalla:</label>
                            <div className="image-viewer">
                                <img src={photo64 ? photo64 : Default} alt='profile' />
                            </div>
                            <label htmlFor="btn-file" className="btn btn-sm btn-info">
                                <i className="fas fa-arrow-circle-up" style={{ marginRight: 10}}></i>Select Image
                            </label>
                            <input type="file" id="btn-file"
                                className="input-image"
                                accept="image/*"
                                onChange={imageHandler}
                                    />
                        </div>
                        <input type="submit" className="btnRegister"  value="Registrar"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AttendanceForm;