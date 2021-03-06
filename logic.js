// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    //var newArray = this.cloneArrayOfObjects(todos);
    var newId = this.generateId();
    return todos.concat({ id: newId, ...newTodo, done: false });
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },
  deleteTodo: function(todos, idToDelete) {
    var newArray = this.cloneArrayOfObjects(todos);
    newArray = newArray.filter(function(el) {
      return el.id != idToDelete;
    });
    return newArray;

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
  },
  markTodo: function(todos, idToMark) {
    var newArray = this.cloneArrayOfObjects(todos);
    newArray.map(function(el) {
      if (el.id == idToMark) {
        el.done = el.done == true ? false : true;
      }
    });
    return newArray;
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },
  sortTodos: function(todos, sortFunction) {
    console.log(todos)
    var newArray = this.cloneArrayOfObjects(todos);
    return sortFunction(newArray)
    // if(sortFunction.name == sortByDescription){
    // }
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
  sortByDescription: function(todos){
    return todos.sort((a, b) =>(a.description.toUpperCase() > b.description.toUpperCase()) ? 1 : -1);
  },
  sortByDone: function(todos){
    return todos.sort((a, b) =>(a.done > b.done) ? 1 : -1);
  }
};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
