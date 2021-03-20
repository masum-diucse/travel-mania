import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Vechicle = (props) => {
    const {vehicleType,vehicleImage}=props.vechile;
    
    return (
        <div className="m-4">
            <Link to={`vehicle/${vehicleType}`} className="text-decoration-none text-black">
            <Card style={{ width: '18rem'}} >
                <Card.Img variant="center" src={vehicleImage} className="p-5" />
                <Card.Title className="text-center">{vehicleType}</Card.Title>        
            </Card>
            </Link>
        </div>
    );
};

export default Vechicle;