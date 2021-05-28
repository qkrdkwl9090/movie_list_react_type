import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({
    nowPlaying,
    popular,
    upcoming,
    error,
    loading
}) => null;

HomePresenter.propTypes = {    
    nowPlaying:PropTypes.array,
    popular:PropTypes.array,
    upcoming:PropTypes.array,
    error:PropTypes.bool.isRequired,
    loading:PropTypes.string

}
export default HomePresenter;