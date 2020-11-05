import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';


function App() {
  const [randomQuotes, setRandomQuotes] = useState([])
  const [quote, setQuote] = useState({
    text: "Randomized quotation of a famous person.",
    author: ""
  });

  useEffect(() => {
    const getQuotes = async () => {
      const response = await axios.get('https://type.fit/api/quotes')
      setRandomQuotes(response.data)
  }
  getQuotes().catch(error => console.log(`There was an error ${error}`))
  },[])

  const getRandomQuote = () => {
    const rand = Math.floor(Math.random() * randomQuotes.length)
    const randomQuote = randomQuotes[rand]
    setQuote(randomQuote)
  }

  console.log(quote)

  return (
    <div data-test="component-app">
      <Card data-test="component-card" body className="mx-auto mt-5" style={{minWidth:"24rem", width:"50vw"}}>
        <CardBody>
          <CardTitle tag="h5">A Random Famous Quote</CardTitle>
          <div>
            <CardText data-test="component-quote">
              {quote.text}
            </CardText>
            <p className="text-right">{quote.author ? `~ ${quote.author}` : ''}</p>
          </div>
          <Button data-test="component-button" onClick={() => getRandomQuote()}>Button</Button>
        </CardBody>
      </Card>
      </div>
  );
}

export default App;
