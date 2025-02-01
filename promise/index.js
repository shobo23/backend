let myPromise = new Promise((success, reject) => {
    let worked  = true;
    if (worked) {
        success("It worked")
    } else {
        reject("Error occured")
    }
})
// myPromise.then((res) => {
//     console.log("Yes");
    
// }).catch((err) => {
//     console.log("No");
    
// })

try {
    myPromise()
} catch (error) {
    console.log(error);
}