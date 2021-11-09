import React from 'react';
import { CssBaseline, makeStyles, Paper, Typography } from '@material-ui/core'
import Title from './Title';
import Card from './Card';
import InputContainer from '../Input/InputContainer'

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
                <Title />
                <Card/>
                <Card/>
                <Card />
                <InputContainer/>
            </Paper>
        </div>
    );
}

export default List;