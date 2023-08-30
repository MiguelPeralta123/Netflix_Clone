import React from 'react';
import { styled } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai'
import { signOut, onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '../utils/firebase-config';

const TopNav = ({ isScrolled }) => {

    const navigate = useNavigate()

    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'TV Shows', link: '/tv' },
        { name: 'Movies', link: '/movies' },
        { name: 'My List', link: '/mylist' },
    ]

    onAuthStateChanged(firebaseAuth, (currenUser) => {
        if (!currenUser) navigate('/login')
    })

    return (
        <NavContainer>
            <nav className={isScrolled ? 'scrolled' : 'notScrolled'}>
                <div className='leftSide'>
                    <div className='logo'>
                        <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png' alt='Netflix logo' onClick={() => navigate('/')} />
                    </div>
                    <ul className='links'>
                        {
                            navLinks.map(({ name, link }) => {
                                return (
                                    <li key={name}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='rightSide'>
                    <button onClick={() => signOut(firebaseAuth)}>
                        <AiOutlineLogout />
                    </button>
                </div>
            </nav>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    .scrolled {
        display: flex;
        background-color: black;
    }

    .notScrolled {
        display: flex;
    }

    nav {
        position: sticky;
        top: 0;
        width: 100%;
        height: 6rem;
        justify-content: space-between;
        position: fixed;
        align-items: center;
        z-index: 101;
        padding: 0.5rem;
        transition: 0.3s ease-in-out;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 2rem;
            padding-left: 4rem;

            .logo {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 1rem;
                cursor: pointer;

                img {
                    width: 8rem;
                    height: 2rem;
                }
            }

            .links {
                display: flex;
                gap: 2rem;
                list-style-type: none;

                a {
                    color: white;
                    font-weight: bold;
                    text-decoration: none;
                }
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-right: 4rem;

            button {
                background-color: rgb(216, 24, 32);
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
            }
            
            svg {
                font-size: 2rem;
            }
        }
    }
`

export default TopNav;
