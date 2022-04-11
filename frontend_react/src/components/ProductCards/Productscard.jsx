import Reac from 'react';
import Grid from '@material-ui/core';

import './Productscard.module.css';

const productscard = [
    {id: 1, name: 'Nike', description: 'running'},
    {id: 2, name: 'Addidas', description: 'casual'},
];

const Productscard = () => {
    <main>
        <Grid container justify = "center" spacing = {3}>
            {productscard.map((product) => (
                <Grid item key={productscard.id} xs= {12} sm = {6} md={4} lg={3}>
                    <Card product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>

}
export default Productscard;
