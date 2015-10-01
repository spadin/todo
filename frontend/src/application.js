import $ from 'jquery';
import React from 'react';
import TodoApp from './todo/app';
import TodoStore from './todo/store';

var todoStore = new TodoStore({resourceUrl: '/api/todo_items'});

$(() => {
  React.render(
    <TodoApp store={todoStore} />,
    document.getElementById('container')
  );
});
