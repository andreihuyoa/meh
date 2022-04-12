import React from 'react'
import styledComponents from 'styled-components';


const Container = styledComponents.div`
    min-height: 4rem;


`

const Navbar = () => {
  return (
      <Container>
    <div className='container'>
        Navbar
    </div>
    </Container>
  )
}

export default Navbar