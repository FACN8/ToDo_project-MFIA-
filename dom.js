(function() {
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "Get groceries", done: false },
    { id: -2, description: "Finish homework today", done: false },
    { id: -1, description: "Burger", done: false }
  ]; // this is our initial todoList

  //drop down ///////////////////////////////////////////////////////////////////
  var dropDownList = document.createElement("select");
  dropDownList.setAttribute("class", "dropDown");
  var sortDescOption = document.createElement("option");
  var sortDoneOption = document.createElement("option");
  sortDescOption.textContent = "Description";
  sortDoneOption.textContent = "Done";
  container.appendChild(dropDownList);
  dropDownList.appendChild(sortDescOption);
  dropDownList.appendChild(sortDoneOption);
  ///////////////////////////////////////////////////////////////////////////////////////

  //sort button/////////////////////////////////////////////////////////////////////////
  var sortButtonNode = document.createElement("button");
  sortButtonNode.setAttribute("class", "sortButton");
  sortButtonNode.addEventListener("click", function(event) {
    var sortNewState;
    var selectValue = dropDownList.options[dropDownList.selectedIndex].value;

    sortNewState =
      selectValue == "Description"
        ? todoFunctions.sortTodos(state, todoFunctions.sortByDescription)
        : todoFunctions.sortTodos(state, todoFunctions.sortByDone);
    update(sortNewState);
  });
  container.appendChild(sortButtonNode);
  sortButtonNode.textContent = "Sort";
  ////////////////////////////////////////////////////////////////////////////////////////

  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    // add span holding description////////////////////////////////////////////////////////
    var desc = document.createElement("span");
    desc.textContent = todo["description"];
    todoNode.appendChild(desc);
    ////////////////////////////////////////////////////////////////////////////////////////

    // this adds the delete button//////////////////////////////////////////////////////////
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.setAttribute("class", "deleteButton");
    var iForDeleteButton = document.createElement("i");
    iForDeleteButton.setAttribute("class", "fa fa-trash");
    deleteButtonNode.appendChild(iForDeleteButton);
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo["id"]);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    ////////////////////////////////////////////////////////////////////////////////////////

    // add markTodo button/////////////////////////////////////////////////////////////////
    if (todo.done) {
      todoNode.style.textDecoration = "line-through";
      todoNode.style.color = "green"
    }
    var markButtonNode = document.createElement("button");
    markButtonNode.textContent = "Check";
    markButtonNode.setAttribute("class", "doneButton");
    markButtonNode.addEventListener("click", function(event) {
      var markDownState = todoFunctions.markTodo(state, todo["id"]);
      update(markDownState);
    });
    todoNode.appendChild(markButtonNode);
    ////////////////////////////////////////////////////////////////////////////////////////

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var searchBar = document.getElementById("search-bar");
      var desc = searchBar.value;
      if (desc == "") return;

      var newState = todoFunctions.addTodo(state, { description: desc });
      update(newState);
      desc = searchBar.value = "";
    });
  }

  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
