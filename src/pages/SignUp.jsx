import React, { useState } from 'react';
import { styled } from 'styled-components'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header'
import BackgroundImage from '../components/BackgroundImage'
import { firebaseAuth } from '../utils/firebase-config';

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({email: "", password: ""});
    const navigate = useNavigate()

    const handleSignup = async() => {
        try {
            const {email, password} = formValues
            await createUserWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate('/')
    })

    return (
        <Container>
            <BackgroundImage />
            <div className='content'>
                <Header login />
                <div className='body'>
                    <div className='text'>
                        <h1>Unlimited movies, Tv shows and more</h1>
                        <h4>Watch anywhere, cancel anytime</h4>
                        <h6>Ready to watch?, enter your email to create or restart membership</h6>
                    </div>
                    <div className='form'>
                        {showPassword ? (
                            <input type='password' placeholder='Password' name='password' value={formValues.password} onChange={(e) => setFormValues({
                                ...formValues, [e.target.name]: e.target.value
                            })} />
                        ) : (
                            <input type='email' placeholder='Email' name='email' value={formValues.email} onChange={(e) => setFormValues({
                                ...formValues, [e.target.name]: e.target.value
                            })} />
                        )}
                        {!showPassword ? (
                            <button onClick={() => setShowPassword(true)}>Get Started</button>
                        ) : (
                            <button onClick={handleSignup}>Sign Up</button>
                        )}
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

        .body {

            .text {
                font-size: 1.5rem;
                color: white;

                h1 {
                    max-width: 35rem;
                    margin: 2rem auto 0 auto;
                    padding: 0 2rem;
                    font-size: 3rem;

                    @media (max-width: 480px) {
                        font-size: 2.5rem;
                    }
                }

                h4 {
                    max-width: 35rem;
                    margin: 1.5rem auto 0 auto;
                    padding: 0 2rem;
                    text-align: center;

                    @media (max-width: 480px) {
                        text-align: start;
                    }
                }

                h6 {
                    max-width: 40rem;
                    margin: 1.5rem auto 2rem auto;
                    padding: 0 2rem;
                    text-align: center;

                    @media (max-width: 480px) {
                        text-align: start;
                    }
                }
            }

            .form {
                display: flex;
                max-width: 45rem;
                margin: 0 auto;
                padding: 0 2rem;
                text-align: center;

                input {
                    width: 100%;
                    color: black;
                    padding: 1rem;
                    font-size: 1.05rem;
                    outline: none;
                }

                button {
                    width: 10rem;
                    padding: 0.5rem 1rem;
                    background-color: rgb(216, 24, 32);
                    color: white;
                    font-size: 1.05rem;
                    border: none;
                    cursor: pointer;
                }
            }

            @media (max-width: 480px) {
                margin-top: 1rem;
            }
        }
    }
`

export default SignUp;
