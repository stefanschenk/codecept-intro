Feature('Add a new ToDo');

Scenario('Add a new todo and cleanup at the end', (I) => {
    I.amOnPage('/');

    // Add a new to-do
    I.addNewTodo('Create workshop introduction CodeceptJS');

    I.removeTodo();

    I.addMochawesomeContext({title: 'Test completed',
        value: './todo-created.png'});
    I.addMochawesomeContext('./todo-removed.png');
});
