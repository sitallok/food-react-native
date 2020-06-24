import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer wVhYHS5aK_rmSpVSKwoEGL9-XSptB0UzUJxC0hRcIfRnNFFE2MSQ2r2ZQsiSi5rNaIUOxWe3weCD-2pKXINPZxJGoZpvjEtkLdzFILRaXmhVjB9yPVzE-2uoWmzjXnYx'
    }
});