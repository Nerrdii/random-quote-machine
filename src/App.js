import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './Quote';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
      )
      .then((res) => {
        setQuotes(res.data.quotes);
        setQuote(res.data.quotes[0].quote);
        setAuthor(res.data.quotes[0].author);
      });
  }, []);

  function getNewQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Quote
            quote={quote}
            author={author}
            onNewQuote={() => getNewQuote()}
          />
        </div>
      </div>
    </div>
  );
}
