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