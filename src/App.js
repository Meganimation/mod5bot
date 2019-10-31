import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


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
    </Switch>
 
                
                </BrowserRouter>

    </header>
    </div>
  )
  }
}
  export default App;
