const fetchPromise = fetch("file.txt")
                    // response is the resolved promise 
const textPromise = fetchPromise.then( (response)=> response.text())         // A method '.then' related to promises ==== inside the function I am telling what to do with what I get from then method

textPromise.then((data) => console.log(data))



// console.log(fetchPromise)
// console.log(textPromise)