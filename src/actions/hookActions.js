import axios from 'axios';

const getRandomQuotes = async (setRandomQuotes) => {
    const response = await axios.get('https://type.fit/api/quotes')
    setRandomQuotes(response.data)
}

export default getRandomQuotes;


