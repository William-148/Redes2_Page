import Swal from 'sweetalert2';
import Service from "./Service";

class Attendance extends Service{

    async create(data){
        
        const result = await this.request("POST", `${this.API_URI}/guardarAsistencia`, data)
        if(!!result ? result.status === 200 : false){
            Swal.fire(
                '¡Completado!',
                'La asistencia ha sido guardada correctamente',
                'success'
            )
            return true;
        }
        Swal.fire(
            '¡Error!',
            'Su asistencia no se ingresó, intente nuevamente.',
            'error'
        )
        return false
    }

    async getList(idEvento){
        const result = await this.request("GET", `${this.API_URI}/reporteidev/${idEvento}`)
        if(!!result ? result.status === 200 : false) return result.data;
        Swal.fire(
            '¡Error!',
            'Ha surgido un problema, intente mas tarde.',
            'error'
        )
        console.error("Error al obtener Asistencias::", result)
        return { array: [], server: 'none' }
    }

    async getListEvent(carnet){
        const result = await this.request("GET", `${this.API_URI}/reportecar/${carnet}`)
        if(!!result ? result.status === 200 : false) return result.data;
        Swal.fire(
            '¡Error!',
            'Ha surgido un problema, intente mas tarde.',
            'error'
        )
        console.error("Error al obtener Eventos::", result)
        return { array: [], server: 'none' }
    }

}

const attendance = new Attendance();
export default attendance;