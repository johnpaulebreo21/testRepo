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

class LogInService {
    async login(username, password) { 
        const headerz = {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }

        axios.post(API_URL + "/authenticate", {
            "userName": username,
            "password": password
        },{
            headers : headerz
        } ).then((response) =>{ 
            sessionStorage.setItem("user","Bearer " + response.data)
            console.log(sessionStorage.getItem("user"))
        }).catch((error)=>{
            console.log(error)
        })

 
    }

    logout() {
        localStorage.removeItem("user");
    }
  
}

export default new LogInService();

