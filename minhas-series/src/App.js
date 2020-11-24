import React from 'react'
import {Header} from './components/header/'
import {Generos} from './components/generos/'
import NovoGenero from './components/generos/novoGenero'
import EditarGenero from './components/generos/editarGenero'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route path='/' exact component={Home}/>
        <Route path='/generos' exact component={Generos}/>
        <Route path='/generos/:id' component={EditarGenero}/>
        <Route path='/generos/novo'  component={NovoGenero}/>
      </div>
    </Router>
    
  )
}

export default App