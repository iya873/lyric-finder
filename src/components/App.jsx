import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'
import Search from './Search'


const App = ({props, children}) => {
  
    return (
          <>
        <Header />
        <Search />
          </>
      
  )
}

export default App