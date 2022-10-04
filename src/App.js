import React from 'react'
import "./App.css"
import Counter from './useState/Counter'
import StateCounter from './useState/StateCounter'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import MoreState from './useState/MoreState'
const App = () => {
 


  
  return (
    <div>
      <Navbar />
      <MoreState />
       <Routes>
           <Route path={'/counter'} element={<Counter />}/>
           <Route path={'/state'} element={<StateCounter />}/>
       </Routes>
        
    </div>
  )
}

export default App