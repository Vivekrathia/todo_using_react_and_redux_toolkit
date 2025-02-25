# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

✅ Components:

AddTodo.jsx → A form to add new todos.
Todos.jsx → Displays the list of todos with Edit, Save, Cancel, and Delete buttons.
✅ Redux Setup:

todoSlice.js → Contains the Redux Toolkit slice with reducers for adding, removing, editing, updating, and canceling todo edits.
Actions: addTodo, removeTodo, editTodo, updateTodo, cancelEditTodo.
✅ UI Features:

Uses Tailwind CSS for styling.
Editing a todo shows an input field instead of text.
Conditional styling (different appearance when editing a todo).
Smooth transitions and animations.
