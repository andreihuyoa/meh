import Reac from 'react';
import Grid from '@material-ui/core';

import Card from './Card/Card';
import { CardContent, Typography } from '@mui/material';

const productscard = [
    {id: 1, name: 'Nike', description: 'running',price: "$500"},
    {id: 2, name: 'Addidas', description: 'casual',price: "$100"},
]

const Productscard = () => {
    <main>
        <Grid container justify = "center" spacing = {3}>
            {productscard.map((product) => (
                <Grid item key={productscard.id} xs= {12} sm = {6} md={4} lg={3}>
                    <Card product ={product} />
                </Grid>
            ))}
        </Grid>
    </main>

}
export default Productscard;
