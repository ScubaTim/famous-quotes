import React, { useState, useEffect } from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import getRandomQuotes from './actions/hookActions';

function App() {
  const [randomQuotes, setRandomQuotes] = useState([])
  const [quote, setQuote] = useState({
    text: "Quotations from famously known people, presented at random from a curated list.",
    author: ""
  });

  useEffect(() => {
    getRandomQuotes(setRandomQuotes)
  },[])

  const getRandomQuote = () => {
    const rand = Math.floor(Math.random() * randomQuotes.length)
    const randomQuote = randomQuotes[rand]
    setQuote(randomQuote)
  }

  return (
    <div data-test="component-app" className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <div className="shadow">
      <Card data-test="component-card" color="light" style={{minWidth:"320px", width:"28vw"}}>
        <CardBody>
          <CardTitle tag="h1" className="text-center text-uppercase my-2">A Famous Quote</CardTitle>
          <CardSubtitle className="text-center text-uppercase font-weight-bold text-secondary">Randomly Selected</CardSubtitle>
          <hr className="mt-3" />
          <div className="mx-4 pt-4 pb-5">
            <CardText data-test="component-quote">
              {quote.text}
            </CardText>
            <p className="text-right pr-2">{quote.author ? `~ ${quote.author}` : ''}</p>
          </div>
          <div className="d-flex mx-4 mb-4">
          <Button block data-test="component-button" className="text-white bg-dark" onClick={() => getRandomQuote()}>Random Quote</Button>
          </div>
          <div>
            <hr />
            <h6 className="text-secondary px-4">
              <em>Quotations api provided by <a href="https://type.fit/">type.fit</a></em>
            </h6>
          </div>
        </CardBody>
      </Card>
      </div>
      </div>
  );
}

export default App;
