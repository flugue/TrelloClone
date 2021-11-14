import React from 'react';
import { CssBaseline, makeStyles, Paper, Typography } from '@material-ui/core'
import Title from './Title';
import Card from './Card';
import InputContainer from '../Input/InputContainer';
import { ListData } from '../../utils/store';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#ebecf0',
        marginLeft: theme.spacing(1)
    }
}));


interface Props {
    list: ListData;
}

const List = ({ list }: Props) => {
    const classes = useStyle();

    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title title={list.title} />
                {list.cards.map(card => (<Card card={card} />))}
                <InputContainer />
            </Paper>
        </div>
    );
}

export default List;