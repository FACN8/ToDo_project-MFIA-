var logic = require('./logic');

describe('Test addToDo function', function() {
  it('should add todo to the list of todos', function() {
    var currTodo = [{ id: -3, description: 'first todo' }]
    var newTodo = { description: 'second todo'};

    var actual = [{ id: -3, description: 'first todo' },
    {id: 1, description: 'second todo'}];

    var expected = logic.addTodo(currTodo, newTodo);
    expect(expected).toEqual(actual);
    
  });
});

describe('Test deleteToDo function', function() {
  it('should delete todo from the list of todos', function() {
    var currTodo = [{ id: -3, description: 'first todo' },
    {id: 1, description: 'second todo'}];

    var actual = [{ id: -3, description: 'first todo' }];

    var expected = logic.deleteTodo(currTodo, 1);
    expect(expected).toEqual(actual);
    
  });
});

describe('Test markTodo function', function() {
  it('should toggle todo from the list of todos', function() {
    var currTodo = [{ id: -3, description: 'first todo', done: false},
    {id: 1, description: 'second todo', done: false}];

    var actual = [{ id: -3, description: 'first todo', done: false},
    {id: 1, description: 'second todo', done: true}];

    var expected = logic.markTodo(currTodo, 1);
    expect(expected).toEqual(actual);
    
  });
});

describe('Test sort function', function() {
  it('should sort todo list alphabetacillay', function() {
    var currTodo = [{ id: -3, description: 'zirst todo', done: false},
    {id: 1, description: 'aecond todo', done: false}];

    var actual = [{id: 1, description: 'aecond todo', done: false},
    { id: -3, description: 'zirst todo', done: false}];

    var expected = logic.sortTodos(currTodo, logic.sortByDescription);

    console.log("hey",expected);
    expect(expected).toEqual(actual);
    
  });
});