import React, { useState } from 'react';
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = () => {

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()

    return (
        <CardContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img
                src='https://wallpapers.com/images/hd/the-avengers-vm16xv4a69smdauy.jpg'
                alt='Movie poster'
                onClick={() => navigate('/player')} />
            {
                isHovered && (
                    <div className='card-hover'>

                        <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4' autoPlay loop onClick={() => navigate('/player')} />

                        <div className='info-container'>
                            <h3 className='movie-name' onClick={() => navigate('/player')}>The Avengers</h3>
                            <div className='icons'>
                                <div className='controls'>
                                    <IoPlayCircleSharp title='Play' onClick={() => navigate('/player')} />
                                    <RiThumbUpFill title='Like' />
                                    <RiThumbDownFill title='Dislike' />
                                    <BsCheck title='Remove from list' />
                                    <AiOutlinePlus title='Add to my list' />
                                </div>
                                <div className='info'>
                                    <BiChevronDown title='More info' />
                                </div>
                            </div>
                            <div className='genres'>
                                <ul>
                                    <li>Action</li>
                                    <li>Action</li>
                                    <li>Action</li>
                                    <li>Action</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </CardContainer>
    );
}

const CardContainer = styled.div`
    width: 230px;
    height: 100%;
    position: relative;
    margin-top: 1rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
        z-index: 10;
    }
    
    .card-hover {
        width: 20rem;
        height: max-content;
        position: absolute;
        top: -10vh;
        left: 0;
        border: 0.1rem solid gray;
        border-radius: 0.4rem;
        background-color: #181818;
        z-index: 99;

        video {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.4rem;
            cursor: pointer;
            z-index: 4;
        }

        .info-container {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 0.5rem;

            .movie-name {
                align-self: flex-start;
                margin-bottom: 0.8rem;
                color: white;
                cursor: pointer;
            }

            .icons {
                display: flex;
                justify-content: space-between;

                .controls {
                    display: flex;
                    gap: 0.5rem;
                }

                svg {
                    color: white;
                    border: 0.1rem solid white;
                    border-radius: 50%;
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: 0.3s ease-in-out;
                }
                
                svg:hover {
                    color: #b8b8b8;
                }
            }

            .genres {
                ul {
                    display: flex;
                    justify-content: space-between;
                    color: white;

                    li:first-of-type {
                        list-style-type: none;
                    }
                }
            }
        }
    }
`

export default Card;