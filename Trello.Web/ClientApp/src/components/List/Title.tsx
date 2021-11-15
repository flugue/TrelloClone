import { InputBase, makeStyles, Typography } from '@material-ui/core';
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import React, { useContext, useState } from 'react';
import storeApi from '../../utils/storeApi';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },
    input: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        margin: theme.spacing(1),
        '&:focus': {
            backgroundColor: '#ddd'
        }
    }
}));

interface Props {
    title: string;
    listId: string;
}

const Title = ({ title: titleProps, listId }: Props) => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(titleProps);
    const store = useContext(storeApi);
    const classes = useStyle();


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const handleBlur = () => {
        store!.updateListTitle(title, listId);
        setOpen(false);
    }

    return (
        <div>
            {
                open ? (
                    <div >
                        <InputBase value={title}
                            autoFocus
                            inputProps={{ className: classes.input }}
                            fullWidth
                            onBlur={handleBlur}
                            onChange={handleOnChange}
                        />
                    </div >
                ) : (
                    <div className={classes.editableTitleContainer}>
                        <Typography
                            onClick={() => setOpen(!open)}
                            className={classes.editableTitle}
                        >
                                {title}
                        </Typography>
                        <MoreHoriz />
                    </div>
                )}
        </div>
    );
}

export default Title;