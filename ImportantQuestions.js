1.Write a function that fetches data from an API endpoint using the Axios library and returns a Promise 
  which resolves with the response data. The function should reject the Promise if the API request fails

const axios = require('axios');

function fetchData(apiUrl) {
    return new Promise((resolve, reject) => {
        axios.get(apiUrl)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

// Example usage:
fetchData('https://api.example.com/data')
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
2.Write a function that takes an array of numbers as input 
  and returns a Promise  which resolves with the sum of all the numbers in the array

function handlesFunction(array){
       return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               const res = array.reduce((acc,val)=>
                   acc += val,0);
               resolve(res);
           },1000);
       });
   }
   
   const array = [ 2,3,4,5];
   handlesFunction(array)
        .then((result)=>{
            console.log(result);
        })
        .catch((error)=>{
            console.error(error);
        })
