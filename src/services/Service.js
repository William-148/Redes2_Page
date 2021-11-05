import axios from "axios";

export default class Service {
    API_URI = process.env.REACT_APP_SERVICE_NETWORK || 'http://localhost:4000';

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
        
        return month < 10 ? 
            `${day}/0${month}/${year}`:
            `${day}/${month}/${year}`;	
	}
}