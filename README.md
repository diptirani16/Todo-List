# TODO List

This website is build using <u>ReactJS</u>, a popular javascript frontend library and is styled using a CSS framework Tailwind CSS..

## Code Explaination

- The code contains two components that are Form and List.

    - Form component contains an input field that takes the new todo to be added as input and adds it to the todo list.
    - List component contains the complete list of todos stored and also provided an option to remove the todos that are done.

- There is a file App.js that contains both the components and all the functions to implement the functionality of todo list.

    - addTodo function is used to add new todo to the list.
    - onDone function is used to remove the todo that is completed.

 - The data is temporarily stored in a local storage and while adding or removing the todo list, that data is updated in the local storage only.

 - For styling and layout, Tailwind CSS is used and a file tailwind.config.js file is written for the configuration of Tailwind CSS.

## Installation

`$ npm install`

## Local Development

`$ npm start`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

`$ npm build`

This command generates static content into the build directory and can be served using any static contents hosting service.