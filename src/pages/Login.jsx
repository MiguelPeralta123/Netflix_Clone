import React, { useState } from 'react';
import { styled } from 'styled-components'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import { firebaseAuth } from '../utils/firebase-config';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async() => {
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    onAuthStateChanged(firebaseAuth, (currenUser) => {
        if (currenUser) navigate('/')
    })

    return (
        <Container>
            <BackgroundImage />
            <div className='content'>
                <Header signup />
                <div className='body-container'>
                    <div className='body'>
                        <div className='text'>
                            <h1>Login</h1>
                        </div>
                        <div className='form'>
                            <input type='email' placeholder='Email' name='email' 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                            <input type='password' placeholder='Password' name='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} />
                            <button onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    position: relative;

    .content {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.7);
        width: 100vw;
        height: 100vh;
        grid-template-columns: 15vh 85vh;

        .body-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 75vh;
            gap: 2rem;

            .body {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 70vh;
                padding: 2rem;
                gap: 2rem;
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                border-radius: 0.5rem;

                .form {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;

                    input {
                        width: 20rem;
                        height: 2rem;
                        padding: 0.25rem 1rem;
                        border-radius: 0.5rem;
                        outline: none;
                    }

                    button {
                        height: 3rem;
                        padding: 0.25r 1rem;
                        background-color: rgb(216, 24, 32);
                        color: white;
                        font-size: 1.05rem;
                        font-weight: bolder;
                        border-radius: 0.5rem;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`

export default Login;
