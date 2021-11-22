### How to write unit tests for a simple click counter
[Link to finished product](https://bit.dev/codenameninja/practice/ui/counter)
#### Setup Enzyme and write test

start by importing `enzyme` and importing the unofficial adapter for enzyme `@wojtekmaj/enzyme-adapter-react-17`
```js
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
```

and configure the adapter for enzyme
```js
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });
```
So what do we want to test?

This is a question that, of course, is very important and not always easy to answer.

But a good rule of thumb is to think about things where you would want to be alerted if something happened
and they weren't working properly anymore.

So for our quick counter, we definitely want there to be a button.

So the first thing will test or I should say the second thing after the fact that the render didn't

cause any errors is that the increment button is rendered.

It wouldn't be much of a click counter if it didn't show the count.

So let's also test that it shows the counter display.

We want to make sure that the counter display starts out at zero.

And then finally, our core functionality is when you click the button, it should increment the counter.

And and the question here is, are we going to test the state that it increments the counter state or

we're going to test that in increments, the counter display, and here we are going to test behavior

or functionality and test that in increments, the counter display.

All right, let's see how we're doing.

We have five passing tests, which you think would be reason to celebrate, but in fact, this is not

reason to celebrate at this point in TDD or test driven development.

We want to be seeing failing tests so that we can write the code to make them pass.

So let's work on making those tests red and then green again in the next lecture.

```js

test('renders without error', () => {

});

test('renders increment button', () => {

});

test('renders counter display', () => {

});

test('counter starts at 0', () => {

});

test('counter increments when button is clicked', () => {
  
});
```