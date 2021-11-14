import { Button, fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import React, { useState } from 'react';
import { useContext } from 'react';
import storeApi from '../../utils/storeApi';

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
    listId: string;
};

const InputCard = ({ setOpen, listId }: Props) => {
    const classes = useStyle();
    const store = useContext(storeApi);

    const [cardTitle, setCardTitle] = useState('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCardTitle(event.target.value);
    }

    const handleBtnConfirm = () => {
        store!.addMoreCard(cardTitle, listId);
        setCardTitle('');
        setOpen(false);
    }

    const handleOnBlur = () => {
        setCardTitle('');
        setOpen(false);
    }

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase multiline fullWidth
                        inputProps={{ className: classes.input }}
                        placeholder='Enter a title of this card...'
                        onBlur={handleOnBlur}
                        value={cardTitle}
                        onChange={handleOnChange}
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
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