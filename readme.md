# Forn - handle forms

Retrieve form data easily and dynamically on submit:

```js
import { handle } from 'forn';

const form = document.querySelector('form');
form.addEventListener('submit', handle(body => {
  fetch('/some/path', { method: 'POST', body });
}));
```

Works with `<input type="file">` as well since it uses FormData by default. Works great with React as well:

```js
// pages/Contact/index.js
import Form from 'components/Form';

export default () => (
  <form onSubmit={handle(data => { ... })}>
    <input name="name" placeholder="Your Name">
    <input name="email" placeholder="Email" type="email">
    <textarea name="message" placeholder="Message"></textarea>
    <button>Send</button>
  </form>
);
```



## TODO

- Pass options to `handle` to choose the type of data:

```js
import { handle } from 'forn';

form.addEventListener('submit', handle(body => {
  console.log(body);
}, { type: 'object' }));
```

Alternative 1: use the `enctype` and `method` to determine the data encoding
Alternative 2: export `object()`, `formData()` and `urlEncoded()`

- Auto-submit when `submit` is passed instead of `handle`:

```js
import { submit } from 'forn';

form.addEventListener('submit', handle(data => {
  console.log('From server:', data)
}));
```
