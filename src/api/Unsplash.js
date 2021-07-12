import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID shcD7qCj9Ta1OkapML5vHNjCMuQKPyhALfySfbqKH1s'
    }
})