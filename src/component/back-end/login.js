import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from './context/AuthProvide';
import {useNavigate} from 'react-router-dom'
import './login.css'

import axios from '../../api/axios';
const LOGIN_URL = '/signup';

const Login = () => {
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    console.log(user, pwd);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() =>{
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3500/signup",
            {
                user: user,pwd: pwd
            }
            );
            console.log(response.data);
            if (response) {
                setErrMsg('successful')
                navigate ('/PostsUseHook')
            }
        } catch (err) {
            if (!err?.response){
                setErrMsg('No Server Response');
            } else if (err.response?.status ===400){
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401){
                setErrMsg('Unauthorized');
            }
            errRef.current.focus();
        }
    }
    return(
        <>
        {success ? (
            <section>
                <h1>You are logged in!</h1> <br/>
                <p>
                    <a href="#">Go to home</a>
                </p>
            </section>
        ) : (
        <section className='sectionLogin'>
        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
        <label className='inform'>
            <label html="Username:">Username  </label>
            <input
                type="text" 
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
        </label>

        <label className='inform'>
            <label html="Password:">Password  </label>
            <input 
                type="password" 
                id="password"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
        </label>
        
        
            <button className='button'>Sign In</button>
        
        </form>

        <p className='inform'>
            Need an Account?<br/>
            <span className="line">
            {/* put router link here */}
            <a href="#">Sign up</a>
            </span>
        </p>
        </section>
        )}
        </>
    )
}

export default Login