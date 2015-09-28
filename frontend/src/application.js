import $ from 'jquery';
import React from 'react';
import TodoApp from './todo/app';

$(() => {
  React.render(
    <TodoApp />,
    document.getElementById('container')
  );
});
