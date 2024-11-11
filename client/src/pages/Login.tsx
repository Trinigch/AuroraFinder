import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e: any) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        return name === 'userName' ? setUserName(value) : setPassword(value);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('currentUser', data.token.username);
            setUserName('');
            setPassword('');
            navigate('/');
        } else {
            alert('Login failed: ' + data.message);
        }
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            alert('User created successfully!');
            setUserName('');
            setPassword('');
            navigate('/login');
        } else {
            const data = await response.json();
            alert('Error: ' + data.message);
        }
    }

    return (
        <>
            <div className="containerLogin">
                <div className="conatainer">
                    <form >
                        <label htmlFor='userName'>UserName:</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Username"
                            onChange={handleInputChange}
                        /> <br />
                        <label htmlFor='password'>Password:</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                        /> <br />
                        <button className="submit" onClick={handleLogin}>
                            Login
                        </button>
                        <button className="submit" onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;