import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
    movieResults,
    tvResults,
    error,
    searchTerm,
    handleSubmit,
    loading
}) => null;

SearchPresenter.propTypes = {    
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    error:PropTypes.bool.isRequired,
    loading:PropTypes.string,
    searchTerm:PropTypes.string,
    handleSubmit: PropTypes.func.isRequired

}
export default SearchPresenter;