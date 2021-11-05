import Swal from 'sweetalert2';
import Service from "./Service";

const DATA_TEST = [
    {
        idEvento:1,
        evento:"Docker Conteiners",
        carnet:201602900,
        estudiante:"Jonathan Chavarria",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"jony"
    },
    {
        idEvento:1,
        evento:"Docker Conteiners",
        carnet:201603047,
        estudiante:"Jefferson Moreno",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"nats"
    },
    {
        idEvento:1,
        evento:"Docker Conteiners",
        carnet:201602917,
        estudiante:"Ribelino Rivera",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"pubsub"
    },
    {
        idEvento:1,
        evento:"Docker Conteiners",
        carnet:201702344,
        estudiante:"Miguelito Chavarria",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"rabitMQ"
    }
]

const DATA_TEST2 = [
    {
        idEvento:1,
        evento:"Docker Conteiners",
        carnet:201602900,
        estudiante:"Jonathan Chavarria",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"jony"
    },
    {
        idEvento:2,
        evento:"AWS Basics",
        carnet:201602900,
        estudiante:"Jonathan Chavarria",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"nats"
    },
    {
        idEvento:3,
        evento:"MEAN Stack",
        carnet:201602900,
        estudiante:"Jonathan Chavarria",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"pubsub"
    },
    {
        idEvento:4,
        evento:"NoSql Data Bases",
        carnet:201602900,
        estudiante:"Jonathan Chavarria",
        fecha:"10/12/2021",
        captura:"https://aws/s3/imagen",
        servidor:"rabitMQ"
    }
]

class Attendance extends Service{

    async create(data){
        /*
        const result = await this.request("POST", `${this.API_URI}/some`, data)
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
        */
        console.log("Información a enviar:: ",data);
        return null
    }

    async getList(idEvento){
        /*
        const result = await this.request("GET", `${this.API_URI}/some/${idEvento}`)
        if(!!result ? result.status === 200 : false) return result.data;
        Swal.fire(
            '¡Error!',
            'Ha surgido un problema, intente mas tarde.',
            'error'
        )
        console.error("Error al obtener Asistencias::", result)
        return { array: [], server: 'none' }
        */
        console.log(idEvento);
        return {array:DATA_TEST, server:"nats"};
    }

    async getListEvent(carnet){
        /*
        const result = await this.request("GET", `${this.API_URI}/some/${idEvento}`)
        if(!!result ? result.status === 200 : false) return result.data;
        Swal.fire(
            '¡Error!',
            'Ha surgido un problema, intente mas tarde.',
            'error'
        )
        console.error("Error al obtener Eventos::", result)
        return { array: [], server: 'none' }
        */
        console.log(carnet);
        return {array:DATA_TEST2, server:"GRPC"}
    }

}

const attendance = new Attendance();
export default attendance;