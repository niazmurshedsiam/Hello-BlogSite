import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import './Login.css';
import Aos from 'aos';


const Login = () => {
    const [user, setUser] = useState({
        email: " ",
        password: " ",
        newUser: false,
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (e) => {
        let isFormValid = true;

        if (e.target.name === "email") {
            isFormValid = e.target.value;
        }

        if (e.target.name === "password") {
            isFormValid = e.target.value;
        }

        if (isFormValid) {
            const newUserInfo = { ...user, }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (e) => {

        if (user.email && user.password) {
            const newUserInfo = { ...user };
            setLoggedInUser(newUserInfo);
            history.replace(from);
        }
        e.preventDefault()

        if (user.email !== "siam@test.com" || user.password !== "#2021dev") {

            alert("Your aren't an Admin please enter custom email & password")
        }
    }
    Aos.init()
    return (
        <>
            <NavBar />
            <div className="text-center pt-5 from-con " >
                <form className="login-form" data-aos="zoom-in" data-aos-duration="1000"
                    onSubmit={handleSubmit}>
                    <input className="form-control" type="text" onBlur={handleBlur} name="email" placeholder="Email" required /> <br /><br />
                    <input className="form-control" type="password" onBlur={handleBlur} name="password" placeholder="password" required /><br /><br />
                    <input className="btn-success rounded px-4 py-2" type="submit" value="Log In" />
                </form>
            </div>
        </>
    );
};

export default Login;