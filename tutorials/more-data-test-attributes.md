Let's add some more test cases to our counter app.

Curretly we will be doing a lot of copy and paste, but in the next lecture we can refactor the code to be a bit more **DRY**

```js
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = wrapper.find("[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});
```

currently these tests will fail, because these components don't exist yet.

let's add these components and try and make our tests pass.

```js
function Counter() {
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display"></h1>
      <button data-test="increment-button">Increment counter</button>
    </div>
  );
}

export default Counter;
```
