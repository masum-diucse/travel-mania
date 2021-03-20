import React from 'react';
import './InfoCard.css';
const InfoCard = (props) => {
    const vehicleType=props.vehicleType;
    const vImage=props.vImage;
    const {person,price}=props.vdetails;
    return (
        <div>
            <img style={{ width:"2.5rem", margin:"5px"}} src={vImage} alt=""/>
            <strong>{vehicleType}</strong>
            <img style={{ width:"2rem", margin:"5px"}} src="https://i.imgur.com/LEFJ9L1.png" alt=""/>
            <strong >{person}</strong>
            <strong className="space">${price}</strong>
        </div>
    );
};
export default InfoCard;