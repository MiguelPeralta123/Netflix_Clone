import React, { useState } from 'react';
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default React.memo(function Card({ movieData }) {

    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate()

    return (
        <CardContainer
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                alt='Movie Poster'
                onClick={() => navigate('/player')} />
            {
                isHovered && (
                    <div className='card-hover'>

                        <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt='Movie Poster' onClick={() => navigate('/player')} />

                        <div className='info-container'>
                            <h3 className='movie-name' onClick={() => navigate('/player')}>
                                {movieData.name}
                            </h3>
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
                                    {movieData.genres.map((genre) => {
                                        return <li key={genre}>{genre}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </CardContainer>
    );
})

const CardContainer = styled.div`
    width: 230px;
    height: 100%;
    position: relative;
    margin-top: 1rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 0.4rem;
    }
    
    .card-hover {
        width: 20rem;
        height: max-content;
        position: absolute;
        bottom: 1vh;
        left: 1vh;
        border: 0.1rem solid gray;
        border-radius: 0.4rem;
        background-color: #181818;
        z-index: 99;

        img {
            cursor: pointer;
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
