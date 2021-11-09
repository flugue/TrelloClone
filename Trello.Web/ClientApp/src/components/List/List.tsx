import React from 'react';
import { CssBaseline, makeStyles, Paper, Typography } from '@material-ui/core'
import Title from './Title';

const useStyle = makeStyles((theme)=>({
    root: {
        width: '300px',
        backgroundColor: '#ebecf0',
        marginLeft: theme.spacing(1)
    }
}));

const List = () => {
    const classes = useStyle();

    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title/>
            </Paper>
        </div>
    );
}

export default List;