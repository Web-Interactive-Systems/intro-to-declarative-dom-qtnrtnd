import { createElement, render } from './mini';

const elementProps = { id: 'element-id' };
const children = 'Hello world!';
const elementType = 'h1';

const component = createElement(elementType, elementProps, children);

/**
 Todo: Check the devtool console and copy/paste the output of the log object below

{
  "type": "h1",
  "props": {
    "id": "element-id",
    "children": [
      {
        "type": "TEXT_ELEMENT",
        "props": {
          "nodeValue": "Hello world!",
          "children": []
        }
      }
    ]
  }
}
 
 */
console.log('what is component?', JSON.stringify(component, null, 2));

/**
 Todo: Explore `createElement` and explain what this function does

  The purpose of this function is to create a simplified representation of a component or element with its properties and children
 */

/**
 Todo: check the file index.html and get the id of the app div container
*/
const containerId = 'app';
const container = document.getElementById(containerId);

/**
 Todo: Check the implementation of render.
 Use render to render component in the html dom
 */
render(component, container);
