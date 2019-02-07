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
    this.state = {list:[]}
    this.handleClick = this.handleClick.bind(this)
}
componentDidMount() {
  axios.get("https://api.chucknorris.io/jokes/categories")
    .then((data)=>this.setState({list: data.data}))
  }
   handleClick(e){
     console.log(e)
   }
  render() {
    console.log(this.state.list)
    return (
      <div className="App">
       <Header clickytoTop={this.handleClick} data={this.state.list}/>
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div className="footer">
       {this.props.data.map((genre) =>
        <GenreButton clicky={this.props.clickytoTop} genre={genre}/>
    )}
    </div>
   )
  }
}
class GenreButton extends Component {
  handleClick = () => {
    this.props.clicky(this.props.genre)
  }
  render() {
    return(
      <div className="genreButton" onClick={this.handleClick}>{this.props.genre}</div>
    )
  }
}
// function to convert the global state obtained from redux to local props
function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default connect(mapStateToProps, { defaultFunction })(App);
