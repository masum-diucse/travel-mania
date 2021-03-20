import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import fakeData from '../../fakeData/fakeData.json';
import InfoCard from '../InfoCard/InfoCard';
const VechicleDetails = () => {
    const {vehicleType}=useParams();
    const { register, handleSubmit, watch, errors } = useForm();
    const [vehicle,setVehicle]=useState([]);
    const [vehicleDetails,setVehicleDetails]=useState([]);
    const [vehicleImage,setVehicleImage]=useState("");
    const [infoShowStatus,setInfoShowStatus]=useState(false);
    useEffect(()=>{setVehicle(fakeData)},[])

    const onSubmit = data => {
        const newVechiles=vehicle.filter(vh=>vh.vehicleType===vehicleType);
        setVehicleImage(newVechiles[0].vehicleImage);
        setVehicle(newVechiles);
        setVehicleDetails(newVechiles[0].details);
        setInfoShowStatus(true);
        
    };
    return (
        <>
            <Header></Header>
            <Card style={{ width: '30rem'}} >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Pick From</label>
                    <input name="pickFrom" ref={register}/> <br/>
                    {errors.pickFrom && <span>This field is required</span>}
                    <label>Pick To</label>
                    <input name="pickTo" ref={register({ required: true })} />
                    {errors.pickTo && <span>This field is required</span>}
                    <br/>
                    <Button variant="danger" type="submit">Search</Button> 
                </form>
                {
                    infoShowStatus && vehicleDetails.map(vd=><InfoCard vehicleType={vehicleType} vdetails={vd} vImage={vehicleImage}></InfoCard>)
                }
            </Card>
            
        </>
    );
};

export default VechicleDetails;