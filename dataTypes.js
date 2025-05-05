// Premitive or Simple
    // String
        // '', "", ``
        // const age = 29
        // 'Pratik', "Pratik's", `Pratik's age is ${age}`
    // Number
        // 123423, 3.56 // 2**53
    // Boolean
        // true, false
    // Null
        // null
    // Undefined
        // undefined
    // Bigint
        // 9007199254740992n + 1n
    // Symbol
        // Symbol() // () - call sign

// Complex
    // Array
        // ['JOhn', 'JOhn', 'Pratik'] - Array of string - should be singular
        // [1, 3, 4 ,6 ,7 ,5 ,3 ,3] - Array od numbers
        // [{
        //     Name: 'Pratik',
        //     age: 29,
        //     Hobbies: ['Reading', 'Riding']
        // }, {
        //     Name: 'Pratik',
        //     age: 29,
        //     Hobbies: ['Reading', 'Riding']
        // }, {
        //     Name: 'Pratik',
        //     age: 29,
        //     Hobbies: ['Reading', 'Riding']
        // }] - Array of objet 
        // Array methods
            const arr = ['Banana', 'Apple', 'Strawberry']
            const orgArr = ['Grapes', 'Watermelon']
            // console.log(arr.length);
            // console.log(arr.toString());
            // console.log(arr.at(2));
            // console.log(arr.join(' | '));
            // console.log(arr.pop());
            // console.log(arr);
            // console.log(arr.push('Pineapple'));
            // console.log(arr);
            // console.log(arr.shift());
            // console.log(arr);
            // console.log(arr.unshift('Guava'));
            // console.log(arr);
            // // delete arr[1]
            // console.log(arr.concat(orgArr));
            // // console.log(arr.copyWithin(1, 0));
            // console.log(arr.concat([[[orgArr]]]).flat(3));
            // console.log(arr);
            // console.log(arr.splice(1, 1, 'Pomgranade', 'Mango'));
            // console.log(arr.toSpliced(1, 1, 'Pomgranade', 'Mango'));
            // console.log(arr);
            // console.log(arr.slice(1, 3));
            
    // Object
        // {
        //     Name: 'Pratik',
        //     age: 29,
        //     Hobbies: ['Reading', 'Riding']
        // }
        // Object methods
            // Assign
                // const user = {}
                // Object.assign(user, { name: 'John' }, { test: 'test' }, { number: 8765 } )
                // user.array = [4, 5, 6, 6,]
                // // user['bigInt'] = 1n
                // user.name = 'Jonathan'
                // delete user.number
                // JSON // Javascript Object Notation
                // console.log(user, JSON.stringify(user), JSON.parse(JSON.stringify(user)));
                // console.log(Object.keys(user))
                // console.log(Object.values(user))
                // console.log(Object.entries(user))
                // // Object de-structuring
                //    const { name, test, array } = user
                //    console.log(name, test, array);
                   
    // Function
        // console.log('testing outside handler');
        // // Normal function
        // function testingFun() {
        //     console.log('testing function call');
        // }
        // testingFun()
        // // Arrow function
        // const arrowFun = () => {
        //     console.log('testing arrow function call');
        // }
        // arrowFun()