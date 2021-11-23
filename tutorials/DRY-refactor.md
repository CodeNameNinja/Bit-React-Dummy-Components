Let's refactor our code to be more **DRY**.

first we can abstract the setup process to its own function like so:

```js
const setup = () => {
  return shallow(<Counter />);
};
```

secondly we can do another abstraction, by abstracting the find data-test selector to a function:

```js
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
```

now let's implmenent our newly built functions:

```js
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
```
