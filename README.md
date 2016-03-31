# deep-freeze tests

Substack's [deep-freeze](https://github.com/substack/deep-freeze) doesn't work on strings. It does say in deep-freeze's README.md that it works on functions and objects, but I hadn't read this before I started using the module. Here are some tests using Mocha describing the situation.

Substack did include tests for deep-freeze that probably also express the same information. Those tests use Tap. I'm not yet familiar with Tap and found its output hard to parse quickly. Plus, I want more practice writing my own tests. I intend no slight against Substack; I did all this for my own interest and to share with some colleagues.

## How?

```bash
$ npm install
$ npm test
```
