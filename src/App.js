import React, {useContext} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {SearchProvider} from "./reducers"
import SearchAppInitialApp from "./layout"
import './App.css'

const App = () => {

  return (
    <div className={'app'}>
      <Router>
        <SearchProvider>
          <Route exact path='/' component={SearchAppInitialApp}/>
        </SearchProvider>
      </Router>
    </div>
  )
}
export default App

