import axios from 'axios';

describe('axios tests', () => {
    test('connects to quote api', async () => {
            const response = await axios.get('https://type.fit/api/quotes')
            expect(response.status).toBe(200)
            
    })       
})