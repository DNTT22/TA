#Description#
I imported some FontAwesome icons, IDs, & useState from react... for this project.

1: TodoForm
Features an input button for users to add task in the form of components which are then rendered in the list below

2: Todo.js
The 'Todo' component featured what the user typed/editd & the fontaswesome pen & trash icons for editing & deleting a task. I also added a ternary operator to the task for the user to 'toggle' the todo complete with a line-through text decoration property

3: EditTodoForm:
A component for users to edit the input of a task already made with the useState Hook. The handle submit action was made & connected to the 'onClick' of the 'pen' icon. Whatever the user typed/edited would be the new task

4. TodoWrapper
The 'Wrapper' component for the whole app that is inserted into the main App.js file, in which the other components are inserted into. It features the 'addTodo' & 'deleteTodo' functions imported into the Todo.js & TodoForm.js files attached to their respective icons &triggers. It then renders everything included & the map function for mpping the array of any tasks.

5. In the App.js file I inserted the TodoWrapper component.

6. App.css file feauturing simple green color scheme.