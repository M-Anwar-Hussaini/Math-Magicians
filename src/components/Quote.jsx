import React, { useState, useEffect } from 'react';

const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

const Quote = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const getQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: { 'X-Api-Key': '4muFVjAKHHh6YRRqQINwMw==Cdu0Ww6c8G2PxFEJ' },
        });
        const json = await response.json();
        const [data] = json;
        setAuthor(data.author);
        setQuote(data.quote);
      } catch (error) {
        setHasError(true);
      }

      setLoading(false);
    };
    getQuote();
  }, [setLoading, setQuote, setAuthor]);

  if (loading) {
    return (
      <figure className="border border-success rounded p-2">Loading</figure>
    );
  }

  if (hasError) {
    return (
      <figure className="border border-success rounded p-2">
        Something went wrong
      </figure>
    );
  }
  return (
    <figure className="border border-success rounded p-2">
      <h2 className="alert alert-success">Useful Quote</h2>
      <p className="fst-italic">{`"${quote}"`}</p>
      <figcaption className="text-end text-muted">
        <strong>By: </strong>
        {author}
      </figcaption>
    </figure>
  );
};

export default Quote;
