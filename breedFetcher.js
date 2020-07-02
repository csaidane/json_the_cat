const request = require('request');

const processInput = function(input) {
  let data = input.splice(2);
  return data;
};

let breedQuerry = processInput(process.argv);

request('https://api.thecatapi.com/v1/breeds/search?q=' + breedQuerry, (error, response, body) => {
  if (error !== null) {
    console.log("An error has occured: " + error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0]["description"]);
  } else {
    console.log("We could not find information about this breed of cats: " + breedQuerry);
  }
});