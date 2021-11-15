import { CssBaseline, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ListData } from '../../utils/store';
import InputContainer from '../Input/InputContainer';
import Card from './Card';
import Title from './Title';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#ebecf0',
        marginLeft: theme.spacing(1)
    },
    cardContainer: {
        marginTop: theme.spacing(4)
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
                <Title title={list.title} listId={list.id} />
                <Droppable droppableId={list.id}>
                    {(provided) => (
                        <div ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={classes.cardContainer}
                        >
                            {list.cards.map((card, index) => (<Card card={card} key={card.id} index={index} />))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <InputContainer listId={list.id} type='card' />
            </Paper>
        </div>
    );
}

export default List;