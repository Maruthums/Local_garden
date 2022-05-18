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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
    logo,
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
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34
} from '../../assets/image/index';
import Home from '../../screen/main/home';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const data =[{
    image:img13,
    name:'potato'
},
{
    image:img15,
    name:'pumpkin'
}
,
{
    image:img9,
    name:'capsicum'
},
{
    image:img7,
    name:'cucumber'
},
{
    image:img21,
    name:'cucumber'
},
{
    image:img11,
    name:'cucumber'
},
{
    image:img32,
    name:'cucumber'
},
{
    image:img29,
    name:'cucumber'
},
{
    image:img30,
    name:'cucumber'
},
{
    image:img26,
    name:'cucumber'
},
{
    image:img16,
    name:'cucumber'
},
{
    image:img14,
    name:'cucumber'
},
{
    image:img23,
    name:'cucumber'
},
{
    image:img34,
    name:'cucumber'
},
{
    image:img33,
    name:'cucumber'
},
{
    image:img31,
    name:'cucumber'
}]

const Navbar = () => {
 

    return (
        <div>
            <AppBar position='sticky' style={
                {
                    background: '#ffc107',
                }
            }>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Avatar alt="logo"
                            style={{
                                width: '100px',
                                height: '100px'
                            }}
                            src={logo}
                             sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        {/* <img src={logo}
                    style={{
                        width:'100px',
                        height:'100px'
                    }}
                    sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Local Graden
                        </Typography>

                        <Avatar alt="Logo"
                            style={{
                                width: '100px',
                                height: '100px'
                            }}
                            src={logo} sx={{ display: { xs: 'flex', md: 'none' } }} />
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        <div>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Local Graden
                            </Typography>
                            <div
                                style={{
                                    alignItems: 'center'
                                }}>
                                <Typography
                                    // variant="h6"
                                    // noWrap
                                    // component="a"
                                    // href=""
                                    sx={{
                                        display: { xs: 'flex', md: 'none' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.2rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    CALL US NOW
                                </Typography>
                            </div>
                            <Typography
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.1rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                +91 63852 00787
                            </Typography>
                        </div>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Call Me">
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        flexGrow: 1,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.1rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    CALL US NOW + 91 63852 00787
                                </Typography>
                            </Tooltip>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div style={{
                backgroundImage: 'linear-gradient(to bottom right,#ffc107,#fecc35 )', paddingTop: '20px',
                paddingBottom: "50px"
            }}
            >
                <Grid container sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Grid>
                        <div
                            className='m-lg-auto d-flex z-index-2 position-relative col'
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <CardMedia
                                // className='px-5 px-lg-0 m-auto col-auto mw-100'

                                sx={{
                                    width: '290px',
                                    height: '290px',
                                    display: {
                                        xs: 'flex', md: 'none',
                                    },
                                    objectFit: 'contain',
                                }
                                }

                                component="img"
                                height="500"
                                image={fruitsplate}
                                alt="Paella dish"
                            />
                        </div>
                        <Typography
                            variant="h5"
                            sx={{
                                mr: 5,
                                ml: 5,
                                textAlign: 'center',
                                display: { xs: 'flex', md: 'flex' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                color: '#fff',
                                overflow: 'hidden'
                            }}
                        >
                            Save on all Products <span style={{
                                color: '#de2348',
                                textAlign: 'center'
                            }}>10%</span> OFF
                        </Typography>
                        <Typography
                            variant="h6"
                            maxWidth={300}
                            sx={{
                                mr: 5,
                                ml: 5,
                                textAlign: 'center',
                                display: { xs: 'flex', md: 'flex' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                color: '#fff',
                                overflow: 'hidden'
                            }}
                        >
                            PRODUCT CRAFTED WITH CARE
                        </Typography>
                        <Typography
                            maxWidth={500}
                            sx={{
                                mr: 5,
                                ml: 5,
                                textAlign: 'center',
                                display: { xs: 'flex', md: 'flex' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 500,
                                // letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                color: '#fff',
                                overflow: 'hidden'
                            }}
                        >
                            Bred for high constent benefical substances Our products are all fresh and healtgy
                        </Typography>
                        <div style={{
                            textAlign: 'center',
                            marginTop: 20
                        }}>
                            <Button
                                sx={{
                                    color: '#ffffff',
                                    borderColor: '#ffffff',
                                    ":hover": {
                                        color: 'green',
                                        borderColor: '#ffc107'
                                    },
                                    fontWeight: 600
                                }}
                                variant="outlined">Call now</Button>
                        </div>
                    </Grid>
                    <div>
                        <CardMedia
                            component="img"
                            height="500"
                            image={fruitsplate}
                            alt="Paella dish"
                            sx={{
                                pr: 5,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        />
                    </div>
                </Grid>
                <CardMedia
                    component="img"
                    height="150"
                    width='100%'
                    image={blackcurve}
                    alt="Paella dish"
                    sx={{
                        display: { xs: 'flex', md: 'flex' },
                        position: 'absolute',

                    }}
                />
            </div>
            <div>
            <Grid container spacing={2} p={2} style={{
                // position:'absolute',
                backgroundColor:'#1d1c22',
                marginTop:20
            }}>
                     {/* <Container> */}
                    
                        {data.map((item)=> 
                           <Grid  item sm={12} xs={6} md={3} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={item.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item?.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            {/* <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions> */}
                        </Card>
                        </Grid>
                      ) }
                      
                        
                    {/* </Container> */}
                    
            </Grid>
            </div>    
            <Home />
        </div>
    );
};
export default Navbar;
