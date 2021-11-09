import { alpha } from '@material-ui/core';
import { Button, darken, fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'
import React from 'react';

const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1)
    },
    input: {
        fontSize: '.9rem'
    },
    btnConfirm: {
        background: '#5aac44',
        color: '#fff',
        '&:hover': {
            background: fade('#5aac44', 0.75)
        }
    },
    confirm: {
        margin: theme.spacing(0, 1, 1, 1),
    }
}));

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const InputCard = ({ setOpen}:Props) => {
    const classes = useStyle();

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase multiline fullWidth
                        inputProps={{ className: classes.input }}
                        placeholder='Enter a title of this card...'
                        onBlur={() => setOpen(false)}
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>
                    Add Card
                </Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default InputCard;