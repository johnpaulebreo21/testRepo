import axios from "axios";


const config = {
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
};

const API_URL = "http://localhost:8080";

const tokenHeader = {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    "Authorization" : sessionStorage.getItem("user")
}

class TbInvMasterService {

    getAll() {  
        axios.get(API_URL + "/api/rest/tb-inv-master",{
            headers : tokenHeader
        } ).then((response) =>{
            console.log("PASOK")
            console.log(response) 
        }).catch((error)=>{
            console.log("ERROR")
            console.log(error)
        })

 
    }
 
  
}

export default new TbInvMasterService();

