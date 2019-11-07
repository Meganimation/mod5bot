import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatLog from './components/ChatLog'
import Success from './components/Success'
import Projects from './components/Projects'
import Settings from './components/Settings'



import './App.css';
import Facebook from './components/Facebook';
import BotChatContainer from './components/BotChatContainer';



class App extends React.Component {


  render() {
  return (
      <div className="App">
      <header className="App-header">
      <BrowserRouter> 
    <Switch>
    <Route exact path="/" component={Facebook} />
    <Route exact path="/home" component={BotChatContainer} />
    <Route exact path="/chatlog" component={ChatLog} />
    <Route exact path="/success" component={Success} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/settings" component={Settings} />
    </Switch>
 
                
                </BrowserRouter>

    </header>
    </div>
  )
  }
}
  export default App;
