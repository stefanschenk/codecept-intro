Feature('Add a new ToDo');

Scenario('Add a new todo and cleanup at the end', (I) => {
    I.amOnPage('/');

    // Add a new to-do
    I.fillField('input#new-todo',
        'Create workshop introduction CodeceptJS');
    I.pressKey('Enter');

    // Make a screenshot
    I.saveScreenshot('todo-created.png');

    // Assert the to-do is created
    I.see('introduction CodeceptJS');

    // Cleanup
    I.moveCursorTo('div.view label');
    I.click('.destroy');

    // Make another screenshot
    I.saveScreenshot('todo-removed.png');

    // Assert the to-do is deleted
    I.dontSee('introduction CodeceptJS');

    I.addMochawesomeContext({title: 'Test completed',
        value: './todo-created.png'});
    I.addMochawesomeContext('./todo-removed.png');
});
