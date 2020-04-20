<img src="logo.png" width="320" alt="Monolab Logo" >

# React Monolab Documentation

Powered by [Storybook](https://storybook.js.org/)

## 📦 Installation

Run the following command:

```bash
npm install --save react-mono
```

## 🔨 Usage

```js
import { Button, DatePicker } from "react-mono";

const App = () => (
  <>
    <Button type="primary">PRESS ME</Button>
    <DatePicker />
  </>
);
```

## 🔗 Links
- [Live Demo](https://naeminhye.github.io/react-mono/)

## Develop components with Storybook

```shell
npm run storybook
```

Open http://localhost:9009/ in your favorite web browser.

Then import your component(s) into _stories/index.js and render them like so:

```js
storiesOf("Some component name", module)
  .add("Default", () => (
    <ComponentName />
  ))
  .add("Some variation", () => (
    <ComponentName prop="value" />
  ));
```
