import Swal from 'sweetalert2';
import Service from "./Service";

class Report extends Service{

    test(){
        Swal.fire(
            'IP Service Network',
            this.API_URI,
            'success'
        )        
    }
    
    async saveReport (report) {
        console.log(report);
        const result = await this.request("POST", `${this.API_URI}/guardarReporte`, {
            carnet: report.carnet,
            nombre: report.name,
            curso: report.proyect,
            texto: report.report
        });
        if(!!result ? result.status === 200 : false){
            Swal.fire(
                '¡Completado!',
                'Su reporte ha sido enviado correctamente',
                'success'
            )
            return true;
        }
        Swal.fire(
            '¡Error!',
            'Su reporte no se ingresó, intente nuevamente.',
            'error'
        )
        return false
    }

    async getAll(){
        const result = await this.request("GET", `${this.API_URI}/reportes`);
        if(!!result ? result.status === 200 : false) return result.data;
        if(result.status !== undefined)
            Swal.fire(
                '¡Error!',
                'Ha surgido un problema, intente mas tarde.',
                'error'
            )
        console.error("Error al obtener Reportes::", result)
        return { array: [], server: 'none' }
    }

    async getByCarnet(carnet) {
        const result = await this.request("GET", `${this.API_URI}/reportes/${carnet}`);
        if(!!result ? result.status === 200 : false) return result.data;
        if(result.status !== undefined)
            Swal.fire(
                '¡Error!',
                'Ha surgido un problema, intente mas tarde.',
                'error'
            )
        console.error(result);
        return { array: [], server: 'none' }
    }
}

const report = new Report();
export default report;