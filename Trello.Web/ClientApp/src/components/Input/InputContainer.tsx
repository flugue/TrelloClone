import { Collapse, fade, makeStyles, Paper, Typography } from '@material-ui/core';
import InputCard from './InputCard';
import React, { useState } from 'react';

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        width: '300px',

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


interface Props {
    listId?: string;
    type: 'list' | 'card';
}


const InputContainer = ({ listId, type }: Props) => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <InputCard setOpen={setOpen} listId={listId!} type={type} />
            </Collapse>
            <Collapse in={!open}>
                <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)}>
                    <Typography>
                        {type === 'card' ? '+ Add a Card' : '+ Add another List'}
                    </Typography>
                </Paper>
            </Collapse>

        </div>
    );
}

export default InputContainer;