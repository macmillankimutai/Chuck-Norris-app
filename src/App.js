import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { defaultFunction } from './actions';
const axios =require('axios');

class App extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      explicit: 'Click to get more  jokes.',
      dev:'Click to get more  jokes.',
      movie:'Click to get more  jokes.',
      food:'Click to get more  jokes.',
      celebrity:'Click to get more  jokes.',
      science:'Click to get more  jokes.',
      sport:'Click to get more  jokes.',
      political:'Click to get more  jokes.'
    };
    this.getExplicit = this.getExplicit.bind(this);
    this.getExplicit = this.getExplicit.bind(this);
    this.getDev = this.getDev.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.getFood = this.getFood.bind(this);
    this.getCelebrity = this.getCelebrity.bind(this);
    this.getScience = this.getScience.bind(this);
    this.getSport = this.getSport.bind(this);
    this.getPolitical = this.getPolitical.bind(this);
  }
  getExplicit() {
    axios.get('https://api.chucknorris.io/jokes/random?category=explicit')
    .then(response => {
      this.setState({explicit: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  getDev() {
    axios.get('https://api.chucknorris.io/jokes/random?category=dev')
    .then(response => {
      this.setState({dev: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  getMovie() {
    axios.get('https://api.chucknorris.io/jokes/random?category=movie')
    .then(response => {
      this.setState({movie: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  getFood() {
    axios.get('https://api.chucknorris.io/jokes/random?category=food')
    .then(response => {
      this.setState({food: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  getCelebrity() {
    axios.get('https://api.chucknorris.io/jokes/random?category=celebrity')
    .then(response => {
      this.setState({celebrity: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  getScience() {
    axios.get('https://api.chucknorris.io/jokes/random?category=science')
    .then(response => {
      this.setState({science: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  getSport() {
    axios.get('https://api.chucknorris.io/jokes/random?category=sport')
    .then(response => {
      this.setState({sport: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  getPolitical() {
    axios.get('https://api.chucknorris.io/jokes/random?category=political')
    .then(response => {
      this.setState({political: response.data.value});
    }).catch(error => {
      console.log(error);
    });
  }
  render() {
    return(
      <div className="container text-center">
       <h1> Chuck Categories</h1>

       <div>
         <h3> Explicit </h3>
         <h4>{ "" + this.state.explicit + ""} </h4>
         <button type="button" className="btn" onClick={this.getExplicit}>
         More explicit
         </button>
       </div>

       <div>
         <h3> Dev </h3>
         <h4>{"" + this.state.dev + ""} </h4>
         <button type="button" className="btn btn-primary" onClick={this.getDev}>
         More device
         </button>
       </div>

       <div>
         <h3> Movie </h3>
         <h4>{"" + this.state.movie + ""} </h4>
         <button type="button" className="btn " onClick={this.getMovie}>
         More Movie
         </button>
       </div>

       <div>
         <h3> Food </h3>
         <h4>{"" + this.state.food + ""} </h4>
         <button type="button" className="btn" onClick={this.getFood}>
         More Food
         </button>
       </div>

       <div>
         <h3> Celebrity </h3>
         <h4>{"" + this.state.celebrity + ""} </h4>
         <button type="button" className="btn" onClick={this.getCelebrity}>
         More Celebrity
         </button>
       </div>

       <div>
         <h3> Science </h3>
         <h4>{"" + this.state.science + ""} </h4>
         <button type="button" className="btn" onClick={this.getScience}>
         More Science
         </button>
       </div>

       <div>
         <h3> Sport </h3>
         <h4>{"" + this.state.sport + ""} </h4>
         <button type="button" className="btn" onClick={this.getSport}>
         More Sport
         </button>
       </div>

       <div>
         <h3> Political </h3>
         <h4>{"" + this.state.political + ""} </h4>
         <button type="button" className="btn" onClick={this.getPolitical}>
         More Political
         </button>
      </div>
     </div>
   );
  }
}

function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
