// https://dummyjson.com/quotes

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         return res.json()
//     }).then((response) => {
//         console.log(response);
//     }).catch((err) => {
//         console.log(err);
//     })

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({ title: "test", body: "test." })
// })
//     .then((res) => {
//         return res.json()
//     }).then((response) => {
//         console.log(response);
//     }).catch((err) => {
//         console.log(err);
//     })

// fetch('https://jsonplaceholder.typicode.com/posts/2', {
//     method: 'PATCH',
//     body: JSON.stringify({ title: "test." })
// })
//     .then((res) => {
//         return res.json()
//     }).then((response) => {
//         console.log(response);
//     }).catch((err) => {
//         console.log(err);
//     })

// fetch('https://jsonplaceholder.typicode.com/posts/5', {
//     method: 'DELETE',
// })
//     .then((res) => {
//         return res.json()
//     }).then((response) => {
//         console.log(response);
//     }).catch((err) => {
//         console.log(err);
//     })


// Methods for API
// POST - Create data
// GET - Read data
// get by id - to get single data
// PUT || PATCH - Update data
// DELETE - Delete data


// async...await
// try...catch
const fetchPost = async () => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let response = await res.json()
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
fetchPost()