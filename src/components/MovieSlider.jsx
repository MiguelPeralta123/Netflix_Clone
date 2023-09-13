import React from 'react';
import { styled } from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Card from './Card'

export default React.memo(function MovieSlider({ data, title }) {

    const splideOptions = {
        perPage: 5,
        perMove: 1,
        gap: "0.6rem",
        drag: 'free',
        arrows: false,
        pagination: false,
        type: 'loop'
    }

    return (
        <Container>
            <h1>{title}</h1>
            <div className='wrapper'>
                <Splide
                    options={splideOptions}>
                    {
                        data.map((movie, index) => {
                            return (
                                <SplideSlide key={movie.id}>
                                    <Card movieData={movie} index={index} />
                                </SplideSlide>
                            )
                        })
                    }
                </Splide>
            </div>
        </Container>
    );
})

const Container = styled.div`
    padding: 1rem 0;

    h1 {
        margin-left: 2rem;
        font-size: 25px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: white;
    }

    .wrapper {
        margin-left: 1rem;
        max-width: 1250px;

        .splide__track {
            overflow: visible;
        }
    }
`