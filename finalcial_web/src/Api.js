import axios from 'axios';

export const contactus=async(payload)=>{
    try{

        const response = await axios.post("http://localhost:8000/", payload);

        console.log("Booking Response:", response.data);
        return response.data.data;

    }catch(error){
        console.error("Error in Booking API:", error);
        throw error;
    }
}