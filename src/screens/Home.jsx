import { Button, CardActionArea, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Navbar from '../components/navbar/Navbar'
import GetAppIcon from '@material-ui/icons/GetApp';
import BuildIcon from '@material-ui/icons/Build';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={5}> 
                        <div className="mainLogo">
                            <img src="./images/Coding _Monochromatic.svg" alt="main logo" />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={7}> 
                        <div className="mainContent">
                            <h1>Console UI</h1>
                            <p>Get free component and themes for faster and easier web development.</p>
                            <p>Build your own designing system or start with console design for free.</p>
                            <Button variant="outlined" className="btn_blue" href="/docs">
                                Get Started
                            </Button>
                        </div>

                    </Grid>
                </Grid>

                <Grid container spacing={4} className="mainHomeCard">
                    <Grid item xs={12} md={6}>
                        <CardActionArea className="homeCard">
                            <Grid container justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={1}>
                                    <GetAppIcon className="downloadIcon"/>
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography variant="h5">Installation</Typography>
                                </Grid>
                            </Grid>
                            <p className="cardDesc">Install Console-UI source files by downloading it.</p><br />
                            <Button style={{marginLeft: "15px"}} variant="outlined" color="primary" startIcon={<GetAppIcon />}>Download</Button><br />
                            <p className="cardDesc">or use CDN.</p><br />
                        </CardActionArea>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardActionArea className="homeCard">
                            <Grid container justify="center" alignItems="center" spacing={3}>
                                <Grid item xs={1}>
                                    <BuildIcon className="usageIcon"/>
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography variant="h5">Usage</Typography>
                                </Grid>
                            </Grid>
                            <p className="cardDesc">Console UI wonk without any addational setup, you just need to paste cdn in header of html file or download files.</p><br />
                        </CardActionArea>
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}
