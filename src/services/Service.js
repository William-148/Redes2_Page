import axios from "axios";

export default class Service {
    //API_URI = process.env.REACT_APP_SERVICE_NETWORK || 'http://localhost:5000';
    API_URI = 'https://servicios.myapplication.systems';

    async request(method, url, data = undefined){
        return await axios({
            method,
            url,
            data
        })
        .then((response)=>response)
        .catch((error)=>error);
    }

    fileToBase64(file, setImage){
        try{
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) { 
                    setImage(file.name, reader.result )
                }
            }
            reader.readAsDataURL(file);
        }catch(error){
            console.error("Error in convert to base 64:", error);
        }        
    }

    convertDate(timestamp){
		const date = new Date(timestamp)
		const day = date.getDate()
		const month = date.getMonth() + 1
		const year = date.getFullYear()
        const hour = date.getHours();
        const min = date.getMinutes();
        
        return month < 10 ? 
            `${day}/0${month}/${year} ${hour}:${min}`:
            `${day}/${month}/${year} ${hour}:${min}`;	
	}
}