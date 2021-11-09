import { Collapse, fade, makeStyles, Paper, Typography } from '@material-ui/core';
import InputCard from './InputCard';
import React, { useState } from 'react';

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1)
    },
    addCard: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),
        backgroundColor: '#ebecf0',
        '&:hover': {
            backgroundColor: fade('#000', 0.25)
        }
    }
}));

const InputContainer = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);


    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} />
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={ ()=>setOpen(!open)}>
                    <Typography>
                        + Add a Card
                    </Typography>
                </Paper>
            </Collapse>

        </div>
    );
}

export default InputContainer;