function changeCompletely(element, index, array){

}

function doToElementsInArray(array, callback){

}


var evens = [0, 2, 4, 6, 8, 10];

//Basic usage and syntax of a forEach loop.
evens.forEach((even, index, array) => {
  console.log(`${even} is not odd!`);
})

// Below is a function where the first argument represents an array and the
// second argument MUST be a function which is represented by callback.
function doToElementsInArray(array, callback) {
  array.forEach(callback);//Now we can pass any function to our argument array, and that
}                        //function will be called on every element of the argument array!


//Below is pur callback function, it has to have the same structure as a forEach loop
//element, index and array need to be the arguments provided(you don't have to name them that, but you SHOULD! )
function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!';
}

var animals = ["dog", "fish", "cat"];

//For every element inside of the animals array, run the function changeCompletely on that element.
doToElementsInArray(animals, changeCompletely);//changes each element of animal destructively via above method.

console.log(animals); //["34.41740132030555!!!", "52.740496589034635!!!", "38.73055190969674!!!"]
                     // Please not that since the strings are random, your output may look different
