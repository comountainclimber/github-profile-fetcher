import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './CardComponent';
import Form from './Form'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logins: []
    };
    this.addCard = this.addCard.bind(this)
  }

  addCard(loginToAdd) {
    this.setState({logins: this.state.logins.concat(loginToAdd)})
  }

  render() {
    var cards = this.state.logins.map(function(login){
      return(<CardComponent login={login} />);
    })

    return (
      <div className="text-center">
        <Form addCard={this.addCard}/>
        {cards}
      </div>
    );
  }
};