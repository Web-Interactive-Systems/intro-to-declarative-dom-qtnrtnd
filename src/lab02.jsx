import { createElement, render } from './mini';

/*
 
  Todo: In similar manner to lab01, 
  use `createElement` and `render` to generate the following DOM:

 <div class="container">
   <span>Hello</span>
   <span>World!</span>
 </div>
 **/

const span1 = createElement('span', {}, 'Hello');
const span2 = createElement('span', {}, 'World!');
const container = createElement('div', {class: 'container'}, [span1, span2]);
render(container, document.getElementById('app'));



