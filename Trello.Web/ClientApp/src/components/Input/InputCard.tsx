import { Button, fade, IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import { type } from 'os';
import React, { useState } from 'react';
import { useContext } from 'react';
import storeApi from '../../utils/storeApi';

const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),
        width: '280px'
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
    type: 'list' | 'card';
};

const InputCard = ({ setOpen, listId, type }: Props) => {
    const classes = useStyle();
    const store = useContext(storeApi);

    const [title, setTitle] = useState<string>('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleBtnConfirm = () => {
        if ( type === 'card') {
            store!.addMoreCard(title, listId);
        } else {
            store!.addMoreList(title);
        }
        setTitle('');
        setOpen(false);
    }

    return (
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase multiline fullWidth
                        inputProps={{ className: classes.input }}
                        placeholder={type == 'card' ?
                            'Enter a title of this card...' :
                            'Enter list title...'}
                        value={title}
                        onChange={handleOnChange}
                        //onBlur={()=>setOpen(false)} //CHECK IN MOBX
                    />
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {type === 'card' ? 'Add Card' : 'Add List'}
                </Button>
                <IconButton onClick={() => setOpen(false)}>
                    <ClearIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default InputCard;