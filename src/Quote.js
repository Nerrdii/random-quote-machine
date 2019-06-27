import React from 'react';

function Quote({ quote, author, onNewQuote }) {
  return (
    <div className="card" id="quote-box">
      <div className="card-body">
        <h5 className="card-title" id="text">
          {quote}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted" id="author">
          {author}
        </h6>
        <button
          className="btn btn-primary mt-5"
          id="new-quote"
          onClick={onNewQuote}>
          New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text="${quote}" - ${author}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-5 float-right"
          id="tweet-quote">
          <i className="fa fa-twitter" />
        </a>
      </div>
    </div>
  );
}

export default Quote;
