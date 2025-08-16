import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { useState } from "react";
import './Login.css';
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { loginUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = async () =>{
        try{
            const userData = await loginUser(email, password);
            dispatch(setUser(userData));
            navigate('/board')
        }catch(error){
            console.error("Login failed:", error);
        }
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
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
            <Button variant="green" onClick={handleLogin}>
                {'Login'}
            </Button>
        </div>
    )

}

export default Login;