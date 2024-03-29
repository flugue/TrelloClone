﻿import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { CardData } from '../../utils/store';

const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(1)
    }
}));

interface Props {
    card: CardData;
    index: number;
}

const Card = ({ card, index }: Props) => {
    const classes = useStyle();

    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}>
                    <Paper className={classes.card}>
                        {card.title}
                    </Paper>
                </div>
                )}
        </Draggable>
    );
}

export default Card;