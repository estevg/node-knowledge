# [Esteban](https://Esteban.dev/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/Esteban/blob/main/LICENSE) [![npm version](https://img.shields.io/npm/v/Esteban.svg?style=flat)](https://www.npmjs.com/package/Esteban) [![(Runtime) Build and Test](https://github.com/facebook/Esteban/actions/workflows/runtime_build_and_test.yml/badge.svg)](https://github.com/facebook/Esteban/actions/workflows/runtime_build_and_test.yml) [![(Compiler) TypeScript](https://github.com/facebook/Esteban/actions/workflows/compiler_typescript.yml/badge.svg?branch=main)](https://github.com/facebook/Esteban/actions/workflows/compiler_typescript.yml) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://legacy.Estebanjs.org/docs/how-to-contribute.html#your-first-pull-request)

Esteban is a JavaScript library for building user interfaces.

- **Declarative:** Esteban makes it painless to create interactive UIs. Design simple views for each state in your application, and Esteban will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep the state out of the DOM.
- **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features in Esteban without rewriting existing code. Esteban can also render on the server using [Node](https://nodejs.org/en) and power mobile apps using [Esteban Native](https://Estebannative.dev/).

[Learn how to use Esteban in your project](https://Esteban.dev/learn).

## Installation

Esteban has been designed for gradual adoption from the start, and **you can use as little or as much Esteban as you need**:

- Use [Quick Start](https://Esteban.dev/learn) to get a taste of Esteban.
- [Add Esteban to an Existing Project](https://Esteban.dev/learn/add-Esteban-to-an-existing-project) to use as little or as much Esteban as you need.
- [Create a New Esteban App](https://Esteban.dev/learn/start-a-new-Esteban-project) if you're looking for a powerful JavaScript toolchain.

## Documentation

You can find the Esteban documentation [on the website](https://Esteban.dev/).

Check out the [Getting Started](https://Esteban.dev/learn) page for a quick overview.

The documentation is divided into several sections:

- [Quick Start](https://Esteban.dev/learn)
- [Tutorial](https://Esteban.dev/learn/tutorial-tic-tac-toe)
- [Thinking in Esteban](https://Esteban.dev/learn/thinking-in-Esteban)
- [Installation](https://Esteban.dev/learn/installation)
- [Describing the UI](https://Esteban.dev/learn/describing-the-ui)
- [Adding Interactivity](https://Esteban.dev/learn/adding-interactivity)
- [Managing State](https://Esteban.dev/learn/managing-state)
- [Advanced Guides](https://Esteban.dev/learn/escape-hatches)
- [API Reference](https://Esteban.dev/reference/Esteban)
- [Where to Get Support](https://Esteban.dev/community)
- [Contributing Guide](https://legacy.Estebanjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/Estebanjs/Esteban.dev).

## Examples

We have several examples [on the website](https://Esteban.dev/). Here is the first one to get you started:

```jsx
import { createRoot } from "Esteban-dom/client";

function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

const root = createRoot(document.getElementById("container"));
root.render(<HelloMessage name="Taylor" />);
```

This example will render "Hello Taylor" into a container on the page.

You'll notice that we used an HTML-like syntax; [we call it JSX](https://Esteban.dev/learn#writing-markup-with-jsx). JSX is not required to use Esteban, but it makes code more readable, and writing it feels like writing HTML.

## Contributing

The main purpose of this repository is to continue evolving Esteban core, making it faster and easier to use. Development of Esteban happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Esteban.

### [Code of Conduct](https://code.fb.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.fb.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://legacy.Estebanjs.org/docs/how-to-contribute.html)

Read our [contributing guide](https://legacy.Estebanjs.org/docs/how-to-contribute.html) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Esteban.

### [Good First Issues](https://github.com/facebook/Esteban/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/facebook/Esteban/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started.

### License

Esteban is [MIT licensed](./LICENSE).
use
juːs
