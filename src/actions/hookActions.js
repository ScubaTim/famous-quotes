import axios from 'axios';

const getRandomQuote = async (setRandomQuote) => {
    const response = await axios.get('https://type.fit/api/quotes')
    console.log('inside getRandomQuotes call response.data', response.data)  //
    setRandomQuote(response.data)
}

export default getRandomQuote;


