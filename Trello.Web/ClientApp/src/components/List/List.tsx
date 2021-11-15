import { CssBaseline, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { ListData } from '../../utils/store';
import InputContainer from '../Input/InputContainer';
import Card from './Card';
import Title from './Title';

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
                {list.cards.map(card => (<Card card={card} key={card.id} />))}
                <InputContainer listId={list.id} type='card'/>
            </Paper>
        </div>
    );
}

export default List;