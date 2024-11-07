import { useState } from "react";

const Login = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e: any) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    
        return name === 'userName' ? setUserName(value) : setPassword(value);
    };
    const handleLogin = async (e: any) => {

        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'                
            },
            body: JSON.stringify({username,password})
        });
        const data = await response.json();
        localStorage.setItem('currentUser', data.token.username)
        setUserName('');
        setPassword('');
    }
    const handleSignUp = async (e: any) => {

        await fetch('/', )
        
        setUserName('');
        setPassword('');
    }


    return (
        <> 
            <div className="conatainer">
            <form >
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
                <button onClick={handleLogin}>
                    Login
                </button>
                <button onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
            </div>
        </>
    );
}


export default Login;