import React, { useEffect, useState } from 'react';
import background from '../../resources/images/background.png';
import fakeData from '../../fakeData/fakeData.json';
import './Home.css';
import Vechicle from '../Vechicle/Vechicle';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
    },
  }));
const Home = () => {
    const backgroundImage={
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100vh'
    }
    const [allTypeVechiles,setAllTypeVechiles]=useState([]);
    useEffect(()=>{setAllTypeVechiles(fakeData)},[]);
    const classes = useStyles();
    return (
        <div style={backgroundImage}>
        <Header></Header>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {
                        allTypeVechiles.map(vh=><Vechicle vechile={vh}></Vechicle>)
                    }
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
};

export default Home;