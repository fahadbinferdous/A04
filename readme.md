## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementByID connects html element with javascript by designated ID names in the relevant element.it us used to select a unique element by its ID name.
getElementsByClassName connects html elements with javascript by designated class names in the relevant elements. it us used to connect with collection of elements with same class that needs to be changed when dynamic DOM updates.
querySelector and querySelectorAll accept any ID name or class names to do so.
getElementById and querySelector connect a single element whereas getElementsByClassName and querySelectorAll connect a collection of elements.but difference is querySelectorAll return NodeLists and getElementsByClassName return HTMLCollections.


### 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, first i create the element using document.createElement() and then insert it into an existing parent element using methods such as append()




### 3. What is Event Bubbling? And how does it work?

it is a mechanism which enables parent elements to respond to events triggered on child elements.the event starts at the target element and propagates upward to the root of the DOM.Event listeners are attached to handle events during this.





### 4. What is Event Delegation in JavaScript? Why is it useful?

in simple words event delegation is a mechanism where a single event listener is attached to the parent element instead of attaching event listeners to multiple child elements. when an event occurs on a child, it bubbles up to the parent, where the event listener checks if the event originated from a specific child element and handles it accordingly.instead of duplicating event listeners for each child, one event listener efficiently manages all child elements.




### 5. What is the difference between preventDefault() and stopPropagation() methods?

stopPropagation() is used to prevent the event from bubbling up the DOM tree so that  any parent handlers from being notified of the event can be stopped. this is useful to handle an event at a specific level and to stop trigger handlers on parent elements.
preventDefault() is a method which prevents from executing the default browser behavior of the selected element. this method can cancel the event only if the event is cancelable. but there are some events which can not be prevented, such as the scroll and wheel event, preventing a form from submitting.