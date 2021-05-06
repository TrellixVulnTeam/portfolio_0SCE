import React, { Component } from 'react'
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Project from './components/Project';
import Navbars from './components/Navbars';
import About from './components/About';
import ParticlesComponent from './components/ParticlesComponent'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export class App extends Component
{
  constructor()
  {
    super();
    this.state = { isLoading: true }
  }
  componentDidMount()
  {
    setTimeout(function ()
    { //Start the timer
      this.setState({ isLoading: false }) //After 1 second, set render to true
    }.bind(this), 100)



  }
  render()
  {
    return (

      this.state.isLoading ?
        <Loader type="Grid" color="#f9fc2d" height={80} width={80}
          style={{
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            position: 'fixed',
            height: '2em',
            width: '2em',
            overflow: 'show',
            margin: 'auto',
          }} /> :
        <div className="App">
          <BrowserRouter>
            <div
              style={{
                position: "absolute",
                top: '0',
                left: '0',
                width: "100%",
                height: "100%"
              }}
            >
              <ParticlesComponent />
              <div
                style={{
                  position: "absolute",
                  top: '0',
                  left: '0',
                  width: "100%",
                  height: "100%"
                }}
              >
                <Navbars />
                <Switch>
                  {/* <Route exact path="/" render={() => (<Redirect to="/#home" />)} /> */}
                  <Route
                    exact
                    to="/portfolio/#home"
                  >
                    <Home />
                  </Route>
                  <Route to="/portfolio/#projects">
                    <Project />
                  </Route>
                  <Route to="/portfolio/#about">
                    <About />
                  </Route>
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </div>
    )
  }
}

export default App
