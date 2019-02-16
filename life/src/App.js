import React, { Component } from 'react';
import {Provider} from "react-redux";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/footer"
import "./common/css/iconfont/iconfont.css"
import "./common/js/flexble.js"
import "./common/css/reset.css"
import Home from "./components/home"
import My from "./components/home"
import Classify from "./components/classify"
import Shopcar from "./components/shopcar"
import store from "./store"

class App extends Component {
  render() {
    return (
       <Provider store={store}>
         <Router>
          <div>
           <Switch>
             <Route path="/home" component={Home}/>
             <Route path="/classify" component={Classify}/>
             <Route path="/shopcar" component={Shopcar}/>
             <Route path="/my" component={My}/>
             <Redirect path="/" to="/home" />
           </Switch>
           <Footer/>
           </div>
         </Router>
        </Provider>
    );
  }
}

export default App;
