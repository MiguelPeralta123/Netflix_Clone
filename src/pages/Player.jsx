import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'

const Player = () => {

    const navigate = useNavigate()

    return (
        <PlayerContainer>
            <div className='player'>
                <div className='back-arrow'>
                    <BsArrowLeft onClick={() => navigate(-1)} />
                </div>
                <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4' autoPlay loop controls />
            </div>
        </PlayerContainer>
    );
}

const PlayerContainer = styled.div`
    .player {
        width: 100vw;
        height: 100vh;

        .back-arrow {
            position: absolute;
            padding: 2rem;
            z-index: 1;

            svg {
                margin-left: 1rem;
                font-size: 2.2rem;
                color: white;
                cursor: pointer;
            }
        }

        video {
            width: 100%;
            height: 100%;
        }
    }
`

export default Player;
