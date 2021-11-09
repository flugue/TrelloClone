﻿import { InputBase, makeStyles, Typography } from '@material-ui/core';
import  MoreHoriz from '@material-ui/icons/MoreHoriz';
import React, { useState } from 'react';

const useStyle = makeStyles((theme) => ({
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex',
    },
    editableTitle: {
        flexGrow: 1,
        fontSize: '1.2rem',
        fontWeight:'bold'
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

const Title = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    return (
        <div>
            {
                open ? (
                    <div>
                        <InputBase value='Todo'
                            autoFocus
                            inputProps={{ className: classes.input }}
                            fullWidth
                            onBlur={() => setOpen(!open)}
                        />
                    </div >
                ) : (
                    <div className={classes.editableTitleContainer}>
                        <Typography
                            onClick={() => setOpen(!open)}
                            className={classes.editableTitle}
                        >
                            Todo
                        </Typography>
                        <MoreHoriz />
                    </div>
                )}
        </div>
    );
}

export default Title;