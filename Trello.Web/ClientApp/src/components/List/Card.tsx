import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { CardData } from '../../utils/store';

const useStyle = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(1)
    }
}));

interface Props {
    card: CardData;
}

const Card = ({ card }: Props) => {
    const classes = useStyle();

    return (
        <>
            <Paper className={classes.card}>
                {card.title}
            </Paper>
        </>
    );
}

export default Card;