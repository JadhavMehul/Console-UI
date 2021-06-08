import { Container, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import ConsoleButton from '../components/ConsoleComponents/ConsoleButton'

export default function Docs() {

    const [component, setComponent] = useState(<ConsoleButton />);

    return (
        <>
            <Navbar />
            <Grid container spacing={0}>
                <Grid item md={2}>
                    <List className="left_nav pt-4">
                        <Typography variant="h6" className="pl-3">Components</Typography>
                        <ListItem button onClick={() => setComponent(<ConsoleButton />)}>
                            <ListItemText className="pl-3" primary={"Buttons"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent()}>
                            <ListItemText className="pl-3" primary={"Plate"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent()}>
                            <ListItemText className="pl-3" primary={"Card"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent()}>
                            <ListItemText className="pl-3" primary={"Form Elements"} />
                        </ListItem>
                        <ListItem button onClick={() => setComponent()}>
                            <ListItemText className="pl-3" primary={"Boxite"} />
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