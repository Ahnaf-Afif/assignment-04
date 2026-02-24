# assignment-04

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById is used to get a single element and is called by it's id. This is a method of the document object model.We cannot use classname for getElementById.

getElementByClassname is used to get a list of elements using their classname.This works via only the classname and nothing else. We can get multiple elements using this method.

querySelector is used to get a single element.But this thing is flexible.Because we can use both id or class to get an element using a hash "#" or a dot "." before the id name or the classname.This is kind of like the getElementById method but flexible one.

querySelectorAll is used to get a list of elements.But this thing is flexible as like the querySelector.we can get multiple elements using this.It is like the getElementsByClassName method but flexible one.

2. How do you create and insert a new element into the DOM?

First, we create the element using createElement method.By this we get an empty tag in which we can now insert texts or else.Now we use innerText method to insert text or innerHtml method to insert html content.Then,we use appendChild() method to add the content with the parent element. Lastly, we give the styling using classList.add() method.Thus we create and insert a new element into the DOM.

3. What is Event Bubbling? And how does it work?

Event Bubbling is flowing the event from child element to the parent element.If we click a button of a child element then the event triggers for both child element and it's parent element.Then the event flows through body tag, html tag step by step and lastly goes to the document object.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is to add one event listener to a parent and use that for multiple child elements for that parent element.Thus we can reduce our code and improve the performance.Instead of writing multiple event listener for multiple child elements,we write one event listener for the parent element and track the child element by taking advantage of event bubbling.It also works for dynamically added child elements.There is no need to write more code in js file for the added child elements as event delegation automatically handles it.

5. What is the difference between preventDefault() and stopPropagation() methods?

PreventDefault() method stops any default manner of an element. Such as if we click in an anchor tag then it will take us to a different page but if we use preventDefault() method then the link will not work.Also, if we submit a for the the page gets refreshed but by preventDefault method we can stop that.

stopPropagation() method mainly stops the event bubbling.if we click any button in a child element or any event occurs, then the triggering bubbles through the parent element and then body and the html tag and lastly to the document object.But we can stop it when it is needed by using stopPropagation() method.
