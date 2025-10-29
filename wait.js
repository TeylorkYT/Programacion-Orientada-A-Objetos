const promise = new Promise((resolve, reject) => { 
    setTimeout(() => {
        let operationSuccessful = true; // Change to false to simulate failure
        if (operationSuccessful) {
            resolve("Operation completed successfully.");
        } else {
            reject("Operation failed.");
        }
    }, 2000);

});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });