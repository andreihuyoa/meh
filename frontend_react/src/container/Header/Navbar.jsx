import { Typography } from '@mui/material';
import React from 'react'
import styledComponents from 'styled-components';


const Container = styledComponents.div`
  min-height: 4rem;
  max-width: 500px;
  background-color: red;
  margin: auto;
  justify-items: center;
  alight-items:center;
`

const Navbar = () => {
  return (
      <Container>
    <div className='container'>
      <Typography
            variant="h6"
            noWrap
            
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
      Navbar
      </Typography>
        
    </div>
    </Container>
  )
}

export default Navbar