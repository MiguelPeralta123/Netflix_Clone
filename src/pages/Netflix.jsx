import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { styled } from 'styled-components'

const Netflix = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }

    return (
        <HeroContainer>
            <div className='hero'>
                <TopNav isScrolled={isScrolled} />
                <img
                    className='background-image'
                    src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
                    alt='hero' />
                <div className='container'>
                    <div className='title'>
                        <h1>Superman</h1>
                        <p>Lorem ipsum sunt culpa nostrud culpa officia sint tempor commodo eiusmod aute elit reprehenderit in exercitation adipisicing. Duis aliquip fugiat laboris eu velit cupidatat qui culpa amet et non. In pariatur ipsum culpa sint voluptate duis veniam id in incididunt. Laboris est adipisicing cupidatat fugiat cupidatat duis ex sunt quis proident. Eu id aute velit voluptate cillum ullamco eu.</p>
                    </div>
                    <div className='buttons'>
                        <button className='btn btn-play'>Play</button>
                        <button className='btn btn-more'>More</button>
                    </div>
                </div>
            </div>
        </HeroContainer>
    );
}

const HeroContainer = styled.div`
    .hero {
        position: relative;

        .background-image {
            filter: brightness(40%);
        }

        img {
            width: 100%;
            height: 70vh;
            object-fit: cover;
            object-position: top;
        }

        .container {
            position: absolute;
            bottom: 1rem;
            padding-left: 4rem;

            .title {
                h1 {
                    text-transform: uppercase;
                    font-size: 4rem;
                    background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                p {
                    width: 35rem;
                    margin-bottom: -2rem;
                    font-family: 'lexend Deca';
                    color: white;
                }
            }

            .buttons {
                display: flex;
                gap: 2rem;
                margin: 3.5rem 0;

                .btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    font-size: 1rem;
                    padding: 0.8rem 2.2rem 0.8rem 1.8rem;
                    border-radius: 1rem;
                    cursor: pointer;
                }

                .btn-play {
                    background-color: white;
                    color: rgb(216, 24, 32);
                    border: none;
                }
                
                .btn:hover {
                    scale: 1.05;
                    transition: 0.2s ease-in-out;
                }

                .btn-more {
                    background-color: black;
                    color: white;
                    border: 0.1rem solid white;
                }
            }
        }
    }
`

export default Netflix;
