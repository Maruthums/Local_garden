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
import Carousel from 'react-material-ui-carousel';
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
    plate,
    plate2,
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
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
    slide14,
    slide15,
    slide16,
    slide17,
    slide18,
    orange,
    blueberry
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
const img =[img5,img8,img10,img17,img19]
const fruit =[plate2,plate,banana,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image8,
    blueberry,
    orange
]
const data = [
    {
        image: img13,
        name: 'Potato',
        title:'Potatoes have a reputation as a starchy carb but are good sources of nutrients, including protein. One medium potato with the skin on contains just over 4 g of protein'
    },
    {
    image: img1,
    name: 'Cauliflower',
    title:'cauliflower provides a high amount of protein for the number of calories it delivers. Cauliflower has the following protein content ( 42 ): One cup (107 g) of cauliflower contains 2 g of protein. 100 g of cauliflower contains 1.9 g of protein and 25 calories'
},
{
    image: img2,
    name: 'Onion',
    title:'onion protein Raw onions are very low in calories, with only 40 calories per 3.5 ounces (100 grams). By fresh weight, they are 89% water, 9% carbs, and 1.7% fiber, with tiny amounts of protein'
},
{
    image: img3,
    name: 'Coconut',
    title:'The predominant proteins in coconut endosperm or kernel are classified as globulin (salt-soluble) and albumin (water-soluble), which account for 40% and 21% of total protein,'
},
{
    image: img18,
    name: 'Tomoto',
    title:'This serving contains 0.4 g of fat, 1.6 g of protein and 7 g of carbohydrate. The latter is 4.7 g sugar and 2.2 g of dietary fiber, the rest is complex carbohydrate. Tomatoes, raw contains 0.1 g of saturated fat and 0 mg of cholesterol per serving'
},
{
    image: img4,
    name: 'Spinach(Keerai)',
    title:'spinach provides less than 1 gram of protein. In fact, spinach only contains 7 calories, 1 gram of carbohydrate and almost no fat in each 1-cup portion'
},
{
    image: img6,
    name: 'Garlic',
    title:'may help prevent certain cancers and may help lower blood sugar, cholesterol, and blood pressure'
},
{
    image: img7,
    name: 'cucumber',
    title:' low in carbs and very refreshing. One cup (104 grams) of chopped cucumber contains 4 grams of carbs, less than 1 gram of which is fiber (46). Although cucumbers are not very high in vitamins or minerals, they contain a compound called cucurbitacin E, which may have beneficial effects on health'
},
{
    image: img15,
    name: 'pumpkin',
    title:'Vitamin A One cup of cooked pumpkin (245 grams) contains (2): Calories: 49. Fat: 0.2 grams'
},
{
    image: img14,
    name: 'Carrot',
    title:'They are extremely low in fat and protein'
},
{
    image: img11,
    name: 'Radish',
    title:'The benefits of this superfood can be obtained by consuming not only the radish roots, but also the flowers, leaves and seeds'
},
{
    image: img9,
    name: 'Capsicum',
    title:'nutrition breakdown for 1 cup (150 grams) of raw sweet green pepper ( 2 ): Calories: 30. Protein: 1.3 grams'
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
                <div id="carouselExampleIndicators" class="carousel slide mt-3" data-ride="carousel">
                {/* <ol class="carousel-indicators" >
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="16"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="17"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="18"></li>
                </ol> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={slide1} alt="First slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide2} alt="Second slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide3} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide4} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide5} alt="Second slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide6} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide7} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide8} alt="Second slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide9} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide10} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item ">
                        <img class="d-block w-100" src={slide11} alt="First slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide12} alt="Second slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide13} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide14} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide15} alt="Second slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide16} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide17} alt="Third slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide18} alt="Second slide" style={{
                            width: '200px',
                            height: '350px',
                            objectFit: 'contain',
                        }} />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
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
                    backgroundColor: '#1d1c22',
                    marginTop: 20,
                }}>
                    {data.map((item) =>
                        <Grid item sm={12} xs={6} md={3} >
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
                                        <Typography variant="body2" color="text.secondary"
                                        sx={
                                            {
                                                height:120
                                            }
                                        }>
                                            {item?.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}
                </Grid>
                <Grid style={{
                     paddingTop: 20,
                    backgroundImage: 'linear-gradient(to bottom right,#ffc107,#fecc35 )'
                }}>
                <Typography gutterBottom variant="h5" component="div"
                 sx={{
                    ml: 2,
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                }}
                >
                                           Avaliable Vegtables
                                        </Typography>
                
                <Grid container spacing={2} p={2} style={{
                    // position:'absolute',
                    backgroundImage: 'linear-gradient(to bottom right,#ffc107,#fecc35 )',
                   
                }}>
                    
                {img.map((item) =>
                        <Grid item sm={12} xs={6} md={3} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={item}
                                        alt="green iguana"
                                    />
                                    </CardActionArea>
                                    </Card>
                                    </Grid>
                )}
                </Grid>
                </Grid>
                <Grid style={{
                     paddingTop: 20,
                    backgroundImage: 'linear-gradient(to bottom right,#000000,#000000 )'
                }}>
                <Typography gutterBottom variant="h5" component="div"
                 sx={{
                    ml: 2,
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                }}
                >
                                            Avaliable Fruits
                                        </Typography>
                
                <Grid container spacing={2} p={2} style={{
                    // position:'absolute',
                    backgroundImage: 'linear-gradient(to bottom right,#000000,#000000 )'
                   
                }}>
                    
                {fruit.map((item) =>
                        <Grid item sm={12} xs={6} md={3} >
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={item}
                                        alt="green iguana"
                                    />
                                    </CardActionArea>
                                    </Card>
                                    </Grid>
                )}
                </Grid>
                </Grid>
            </div>
            <Home />
        </div>
    );
};
export default Navbar;
