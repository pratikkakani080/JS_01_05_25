function myclickhandler() {
    console.log('test');

}

function mychangehandler(e) {
    console.log('test input', e.target.value, e.target.checked);

}

const keyhandler = (ev) => {
    console.log(ev, 'keypress');
    if (ev.keyCode === 13) {
        if (ev.target.type === 'text') {
            document.getElementById('cb').focus()

        } else if (ev.target.type === 'checkbox') {
            document.getElementById('radio').focus()

        }
    }

}

// console.log(document);

// DOM manipulation method
// getElementById
// console.log('el', document.getElementById('cb').focus())
// getElementsByClassName

// for (let index = 0; index < document.getElementsByClassName('input_class').length; index++) {
//     const element = document.getElementsByClassName('input_class')[index];
//     element.checked = true
// }
// console.log('el', document.getElementsByClassName('input_class')[1].checked = true)
// getElementsByTagName
// console.log(document.getElementsByTagName('input'))

// querySelector
// this method gives first appearance of element which matches the query
// use id with #
// use className with .
// use tagname as is
// querySelectorAll
// this method gives node list of elements which matches with the query


// addEventListner
// document.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'red'
// })

// document.removeEventListener('click', () => {
//     console.log('remove event listner');

// })

// setTimeout
//     setTimeout(() => {
//         console.log('this is deplayed function');

//     }, 3000); // this time will be in miliseconds

// // setInterval
//     const int = setInterval(() => {
//         console.log('this is repeatitive functionality');

//     }, 1000);

//         setTimeout(() => {
//         console.log('repeatitive functionality will be stopped');
//         clearInterval(int)
//     }, 10000); // this time will be in miliseconds


// console.log(window);

// window.alert('something wrong, please close the window')
// const test = window.prompt('are you sure, you want to proceed? please provide your age')
// console.log(test);

// const test = window.confirm('are you sure to delete this data?')
// console.log(test);
