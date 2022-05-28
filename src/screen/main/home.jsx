import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { CardActionArea } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    logo,
    wh,
    insta,
    fb,
    fruitsplate,
    blackcurve,
    banana,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    potato,
    pumpkin,
    pepper,
    cucumber,
    img1,
    img2,
    img3,
    img4,
    img7,
    img5,
    img6,
    img8,
    img9,
    img10,
    img11,
    img12
} from '../../assets/image/index';
import { WhatsApp } from '@mui/icons-material';

const Home = () => {
    return (
        <>
        
            <div style={{
                // position:'absolute',
                backgroundImage: 'linear-gradient(to bottom right,#ffc107,#fecc35)',
                // bottom: '150px',
                borderTopLeftRadius: '100%',
                // height:'300px'

            }}>
                <Grid>
                    <Grid container spacing={2} p={4} >
                        <Grid item xs={12} md={4} sm={12} >
                            <div style={{
                                textAlign: 'center'
                            }}>
                                <Typography variant="h4" color="#ffffff"
                                    sx={{
                                        ":hover": {
                                            color: 'red'
                                        },
                                        fontWeight: 600
                                    }}>
                                    Local Garden
                                </Typography>
                                <Typography variant="h6" color="#ffffff"
                                    sx={{
                                        ":hover": {
                                            color: 'red'
                                        },
                                        fontWeight: 600
                                    }}>
                                    No. 40A Sarathy Nagar Main Road,
                                </Typography>
                                <Typography variant="h6" color="#ffffff"
                                    sx={{
                                        ":hover": {
                                            color: 'red'
                                        },
                                        fontWeight: 600
                                    }}>
                                    Velachery -42
                                </Typography>
                                <Typography variant="h6" color="#ffffff"
                                    sx={{
                                        ":hover": {
                                            color: 'red'
                                        },
                                        fontWeight: 600
                                    }}>
                                    Chennai
                                </Typography>
                                <Typography variant="h6" color="#ffffff"
                                    sx={{
                                        ":hover": {
                                            color: 'red'
                                        },
                                        fontWeight: 600
                                    }}>
                                    Phone: 63852 00787,96555 58381,78454 88790
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} sm={12} >
                            <div style={{
                                // display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                width: '50%',
                            }}>
                                <img alt="logo"
                                    style={{
                                        width: '250px',
                                        height: '250px',
                                    }}
                                    src={logo}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4} sm={12} >
                            <Grid container spacing={2} p={4} >
                                <Grid xs={4} md={4}>
                                    <CardMedia
                                        // className='px-5 px-lg-0 m-auto col-auto mw-100'

                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            display: {
                                                xs: 'flex', md: 'flex',
                                            },
                                            objectFit: 'contain',
                                            ":hover": {
                                                backgroundColor: 'green',
                                                borderRadius: '30px',
                                                width: '60px',
                                                height: '60px',
                                            },
                                        }
                                        }

                                        component="img"
                                        height="500"
                                        image={wh}
                                        alt="Paella dish"
                                    />
                                </Grid>
                                <Grid xs={4} md={4}>
                                    <CardMedia
                                        // className='px-5 px-lg-0 m-auto col-auto mw-100'

                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            display: {
                                                xs: 'flex', md: 'flex',
                                            },
                                            objectFit: 'contain',
                                            ":hover": {
                                                backgroundColor: 'pink',
                                                borderRadius: '50px',
                                                width: '60px',
                                                height: '60px',
                                            },
                                        }
                                        }

                                        component="img"
                                        height="500"
                                        image={insta}
                                        alt="Paella dish"
                                    />
                                </Grid>
                                <Grid xs={4} md={4}>
                                    <CardMedia
                                        // className='px-5 px-lg-0 m-auto col-auto mw-100'

                                        sx={{
                                            width: '50px',
                                            height: '50px',
                                            display: {
                                                xs: 'flex', md: 'flex',
                                            },
                                            objectFit: 'contain',
                                            ":hover": {
                                                backgroundColor: 'blue',
                                                borderRadius: '50px',
                                                width: '60px',
                                                height: '60px',
                                            },
                                        }
                                        }

                                        component="img"
                                        height="500"
                                        image={fb}
                                        alt="Paella dish"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Home;