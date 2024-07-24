# Todo Manager

A simple React application to manage your todo list. This app allows users to add, edit, delete, and toggle the completion status of todos. It uses local storage to persist data across page reloads.

## Features

- **Add Todos**: Enter a todo item and click 'Save' to add it to the list.
- **Edit Todos**: Modify existing todos and save changes.
- **Delete Todos**: Remove todos from the list.
- **Toggle Completion**: Mark todos as completed or not completed.
- **Show/Hide Completed Todos**: Toggle visibility of completed todos.
- **Local Storage**: Todos are saved to local storage, ensuring data persistence across page reloads.

## Usage

- **Add a Todo**: Enter a description in the input field and click 'Save'. The todo will be added to the list.
- **Edit a Todo**: Click the edit button next to a todo to modify it. Save the changes to update the todo.
- **Delete a Todo**: Click the delete button next to a todo to remove it from the list.
- **Toggle Completion**: Click the checkbox next to a todo to mark it as completed or not completed.
- **Show/Hide Completed Todos**: Use the checkbox labeled 'Show Finished' to filter the display of completed todos.

## Components

- `App`: Main component that handles state management, rendering of todos, and interactions.
- `Navbar`: Navigation bar at the top of the application.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Icons**: Library for including icons in the application.
- **UUID**: Library for generating unique IDs for todos.
- **Local Storage**: Web API for storing todos in the browser's local storage.

## Dependencies

- `react`
- `react-dom`
- `react-icons`
- `uuid`

## License

This project is licensed under the MIT License.

## Contributing

Feel free to open an issue or submit a pull request if you have suggestions or improvements!
