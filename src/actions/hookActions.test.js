import axios from 'axios';

describe('axios tests', () => {
    test('connects to quote api', async () => {
            const response = await axios.get('https://type.fit/api/quotes')
            console.log('inside axios test response.data', response.data[1])  //
    })       
})