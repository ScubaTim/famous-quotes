import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


function App() {
  const [randomQuotes, setRandomQuotes] = useState([])
  const [quote, setQuote] = useState({
    text: "Quotations from famously known people, presented at random from a curated list.",
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
    <div data-test="component-app" className="bg-primary d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
      <div className="shadow">
      <Card data-test="component-card" color="light" style={{minWidth:"320px", width:"30vw"}}>
        <CardBody>
          <CardTitle tag="h1" className="text-center text-uppercase my-2">A Famous Quote</CardTitle>
          <CardSubtitle className="text-center text-uppercase font-weight-bold text-secondary">Randomly Selected</CardSubtitle>
          <hr className="mt-3" />
          <div className="px-4 pt-4 pb-5">
            <CardText data-test="component-quote">
              {quote.text}
            </CardText>
            <p className="text-right px-4">{quote.author ? `~ ${quote.author}` : ''}</p>
          </div>
          <div className="d-flex mx-4 mb-4">
          <Button color="success" block data-test="component-button" onClick={() => getRandomQuote()}>Random Quote</Button>
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
