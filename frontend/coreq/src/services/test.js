import axios from 'axios'

const url = 'http://localhost:3001'

const get = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const asynch = async () => {
    try {
        const req = await axios.get(url)
        return req.data
    } catch (error) {
        console.error(error)
    }
}

export default { get, asynch }