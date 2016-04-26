function addPromise(a,b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('You must supply two numbers');
        }
    });
}

addPromise(5, 5).then(
    function (num) {
        console.log('success', num);
    },
    function (err) {
        console.log('error', err);
    }
);

addPromise(2,'f').then(
    function (num) {
        console.log('success', num);
    },
    function (err) {
        console.log('error', err);
    }
);

addPromise().then(
    function (num) {
        console.log('success', num);
    },
    function (err) {
        console.log('error', err);
    }
);
