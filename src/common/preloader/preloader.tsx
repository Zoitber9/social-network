import React from 'react';
import preloader from "../../assets/icons/Spinner.svg";

const Preloader = () => {
    return (
        <img style={{width: '50px'}} src={preloader} alt="preloader"/>
    );
};

export default Preloader;