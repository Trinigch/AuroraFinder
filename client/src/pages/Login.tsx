import { useState } from "react";

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        return name === 'userName' ? setUserName(value) : setPassword(value);
    };


    return (
        <> 
            <div className="conatainer">
            <form action="">
                <label htmlFor='userName'>UserName:</label>
                <input 
                type="text" 
                name="userName"
                id="userName"
                onChange={handleInputChange}
                />
                <input 
                type="text"
                name="password"
                id="password"
                onChange={handleInputChange}
                />
                <button type="submit">
                    Login
                </button>
                <button type="submit">
                    Sign Up
                </button>
            </form>
            </div>
        </>
    );
}


export default Login;