// https://dummyjson.com/quotes

const test = fetch('https://dummyjson.com/quotes?limit=10&skip=10')
    .then((res) => {
        return res.json()
    }).then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    })
