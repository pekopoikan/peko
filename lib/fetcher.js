const fetcher = (arg) => fetch(arg, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'authorization': process.env.API_KEY
    }
}).then((res) => res.json())

export default fetcher