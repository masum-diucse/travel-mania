import React from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const VechicleDetails = () => {
    const {vehicleType}=useParams();
    return (
        <>
            <Header></Header>
            <h1>This is {vehicleType}</h1>
            
        </>
    );
};

export default VechicleDetails;