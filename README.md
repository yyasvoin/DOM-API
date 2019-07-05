# DOM API

***
- [Walkthrough](#walkthrough)
	- [The `DOMContentLoaded` Event](#the-domcontentloaded-event)
	- [Defining References for Elements](#defining-references-for-elements)
	- [Click Event](#click-event)
- [Resources](#resources)
***


## Walkthrough

### The `DOMContentLoaded` Event

[**View Code**](https://github.com/York-U-Fullstack-FS1010/dom-api/blob/master/public/main.js#L1)

The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed into a DOM. Any code that's ran on the initial execution of your JavaScript may be querying a DOM that doesn't exist yet, but code inside the event will be executed only when the DOM exists.

In this line of code we're using the `addEventListener` function on the `document` element, to add this event. The arrow function we pass into the 2nd parameter is the code that will be executed whenever the event occurs.


### Defining References for Elements

[**View Code**](https://github.com/York-U-Fullstack-FS1010/dom-api/blob/master/public/main.js#L2)

Here we're declaring an object named `elements`. Inside it we're storing references for DOM nodes we'll be operating on. We could just query the DOM for these elements whenever we need them but in addition to having to write a lot of additional code, whenever we change the DOM in a way that breaks the selector we'd have to update all of our queries referencing it.

If you want to see which elements these queries are returning, try running the value of each key in your web browser's console, and seeing where the browser highlights your page when you hover over the console value.


### Click Event

[**View Code**](https://github.com/York-U-Fullstack-FS1010/dom-api/blob/master/public/main.js#L12)

Here we're adding a ***click*** event to the toggle button that displays _Use Promo Code_. The event fires the following function that:

- Displays the promo code form and changes the button.
- Changes the button we just clicked.


### Input Event

[**View Code**](https://github.com/York-U-Fullstack-FS1010/dom-api/blob/master/public/main.js#L37)

Here we're adding an **input** event that handles the _disabled_ state of the form's redeem button. If no value exists within the promo code input field, the button should be disabled. Otherwise it should be enabled.


### Submit Event

[**View Code**](https://github.com/York-U-Fullstack-FS1010/dom-api/blob/master/public/main.js#L54)

Here we're adding a **submit** event that is fired when the _Redeem_ button is clicked. The `event.preventDefault()` ensures that the page is not loading the the URL in the `<form>` element's `action` attribute. This event's function also adds a new discount to the list below the existing promo code, creating all the elements required via the DOM API.




## Resources

- [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- Events
	- [`DOMConentLoaded`](https://javascript.info/onload-ondomcontentloaded#domcontentloaded)
	- [`click`](https://developer.mozilla.org/en-US/docs/Web/Events/click)
	- [`input`](https://developer.mozilla.org/en-US/docs/Web/Events/input)
	- [`submit`](https://developer.mozilla.org/en-US/docs/Web/Events/submit)
	- [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)
