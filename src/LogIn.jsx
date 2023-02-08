import {React,useState} from 'react';  

const LogIn = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUser = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePassword= (event) => {
        setPassword(event.target.value);
    }
    
    const handleLogIn = (event) => {
        event.preventDefault();
        console.log(userName + " " + password)
    }
    return(<div>
        <h1>LOG IN</h1>
        <form onSubmit={handleLogIn} >
            <label>UserName</label>
            <input type="text" name="username" onChange={(handleChangeUser)} value={userName}></input>
            <label>Password</label>
            <input type="password" name="password" onChange={(handleChangePassword)} value={password} ></input>
            <button type="submit" value="Submit"></button>
        </form>
    </div>) 
}



export default LogIn;