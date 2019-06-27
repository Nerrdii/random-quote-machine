import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './Quote';

class App extends Component {
  state = {
    quote: '',
    author: ''
  };

  componentDidMount() {
    this.getQuote();
  }

  async getQuote() {
    const res = await axios.get(
      'https://andruxnet-random-famous-quotes.p.mashape.com/',
      {
        headers: {
          'X-Mashape-Key': 'i65mrE13AImsh8UDnk5rBJz8uwk5p1Fn3mKjsnpR4Q9Z4217E4',
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        }
      }
    );

    this.setState({ quote: res.data[0].quote, author: res.data[0].author });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Quote
              quote={this.state.quote}
              author={this.state.author}
              onNewQuote={this.getQuote.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
