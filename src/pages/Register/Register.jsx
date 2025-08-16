import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { useState } from "react";
import './Register.css';
import { Link } from "react-router-dom";
import { registerUser } from "../../services/auth";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () =>{
        try{
            const userData = await registerUser(name, email, password);
            dispatch(setUser(userData));
        }catch(error){
            console.error("Registration failed:", error);
        }
    }
    return(
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <Button variant="green" onClick={handleRegister}>
                {'Register'}
            </Button>
            <p>Already Registered? <Link to="/">Login</Link></p>
        </div>
    )
}

export default Register;