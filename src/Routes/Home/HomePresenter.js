import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
    padding:20px;
`;

const HomePresenter = ({
    nowPlaying,
    popular,
    upcoming,
    error,
    loading
}) => 
<>
<Helmet><title>Movies | Nemflix</title></Helmet>
{loading ? <Loader/> : (
    <Container>
        {nowPlaying && nowPlaying.length > 0 && <Section title="Now Playing">{nowPlaying.map(movie => <Poster key={movie.id} id={movie.id} isMovie={true} rating={movie.vote_average} year={ movie.release_date && movie.release_date.substring(0, 4)} title={movie.original_title} imageUrl={movie.poster_path}/>)}</Section>}
        {upcoming && upcoming.length > 0 && <Section title="Upcoming Movies">{upcoming.map(movie => <Poster key={movie.id} id={movie.id} isMovie={true} rating={movie.vote_average} year={ movie.release_date && movie.release_date.substring(0, 4)} title={movie.original_title} imageUrl={movie.poster_path}/>)}</Section>}
        {popular && popular.length > 0 && <Section title="Popular Movies">{popular.map(movie => <Poster key={movie.id} id={movie.id} isMovie={true} rating={movie.vote_average} year={ movie.release_date && movie.release_date.substring(0, 4)} title={movie.original_title} imageUrl={movie.poster_path}/>)}</Section>}
        {error && <Message color="#e74c3c" text={error}/>}
    </Container>)}
);
</>


HomePresenter.propTypes = {    
    nowPlaying:PropTypes.array,
    popular:PropTypes.array,
    upcoming:PropTypes.array,
    error:PropTypes.string.isRequired,
    loading:PropTypes.bool

}
export default HomePresenter;