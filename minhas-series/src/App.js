import React from 'react'
import {Header} from './components/header/'
import {Generos} from './components/generos/'
import NovoGenero from './components/generos/novoGenero'
import EditarGenero from './components/generos/editarGenero'
import Series from './components/series/'
import NovaSerie from './components/series/novaSerie'
import InfoSerie from './components/series/infoSerie'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/generos' exact component={Generos}/>
          <Route path='/generos/novo' exact component={NovoGenero}/>
          <Route path='/generos/:id' exact component={EditarGenero}/>
          <Route path='/series' exact component={Series}/>
          <Route path='/series/novo' exact component={NovaSerie}/>
          <Route path='/series/:id' exact component={InfoSerie}/>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App