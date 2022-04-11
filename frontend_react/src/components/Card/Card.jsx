import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

const Card = ({product}) => {
  return (
    <Card className={classes.root}>
    <CardMedia className={classes.media} image=''title={product.name}/>
    <Card product={product}/>
        <CardContent>
            <div className={classes.cardContent}>
                 <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant='h5' >
                    {product.price}
                </Typography>

            </div>
            <Typography variant='h2' color='textSecondary'>{product.description}</Typography>
         </CardContent>
         <CardActions disableSpacing className={classes.cardActions}>
            <IcondButton aria-label="Add to Cart">
                <AddShoppingCart />
            </IcondButton>
         </CardActions>
    </Card>

  )
}

export default Card