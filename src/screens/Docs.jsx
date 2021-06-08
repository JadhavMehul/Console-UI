import { Container, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Installation from '../components/DocScreen/Installation';
import Download from '../components/DocScreen/Download';
import WhyConsoleUi from '../components/DocScreen/WhyConsoleUi';
import WhatIsConsoleUi from '../components/DocScreen/WhatIsConsoleUi';
import Learn from '../components/DocScreen/Learn';


export default function Docs() {

    const [component, setComponent] = useState(<Installation />);

    return (
        <>
            <Navbar />
            <Grid container spacing={0}>
                <Grid item md={2}>
                    <List className="left_nav pt-4">
                        <Typography variant="h6" className="pl-3">Getting Started</Typography>
                        <ListItem button onClick={() => setComponent(<Installation />)}>
                            <ListItemText className="pl-3" primary={"Installation"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent(<Download />)}>
                            <ListItemText className="pl-3" primary={"Download"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent(<WhyConsoleUi />)}>
                            <ListItemText className="pl-3" primary={"Why Console UI"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent(<WhatIsConsoleUi />)}>
                            <ListItemText className="pl-3" primary={"What is Console UI"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent(<Learn />)}>
                            <ListItemText className="pl-3" primary={"Learn"} />
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={8} style={{borderLeft: "1px solid gray"}}>
                    <Container>
                        {component}
                    </Container>
                </Grid>
            </Grid>
        </>
    )
}