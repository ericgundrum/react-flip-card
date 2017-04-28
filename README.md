# React Flip Card

A proof-of-concept flip card UI built using [React](https://facebook.github.io/react)
and components from
[Material-UI](http://www.material-ui.com).
[Try it](https://react-flip-card.bencharts.com).

## Why
Typically flip animation relies upon css knowing the size of its container.

Rather than code a specific size, this implementation let's the
browser determine the size needed for the content of the front and back.
The code then sets the card size to fit both.

The code uses _Material-UI_ components for convenience and appearance.
According to Google's [Material Design Guidelines](https://material.io/guidelines/components/cards.html#cards-behavior)
> Cards do not flip over to reveal information on the back.

## How It Works
This project demonstrates a technique;
it is not designed to be reusable.
Other techniques, such as something using [React Animation Add-Ons](https://facebook.github.io/react/docs/animation.html)
might be better.

The code in `App.js` uses a React `ref` callback to capture the
size of the front and back cards when they first render.
The React life cycle hook `componentDidMount()` then calculates
the size needed to fit the largest content from either the
front or the back.
It calls `setState()` with this new size, triggering a re-render
where inline styles use the new size values for the card.

The card flips when the user clicks the icon in upper right corner.
The click triggers a state change which adjusts the container
style to indicate flip state, triggering the animation.
This css animation magic is described in more detail by David Walsh in
[Create a CSS Flipping Animation](https://davidwalsh.name/css-flip).

## Customizing
The critical elements of this technique are the `<div>` hierarchy and their styles.
The width of the root `<div>` must be accurate for a nice flip.

The content for `Front` and `Back` is described in `Content.js`.
These can be anything as long as the element size is stable or
can be set with `props.getSize()`.
This demo uses a constant `maxWidth` to to keep the cards small.

The content of the `Card` components can be anything supported by a
[Material-UI Card](http://www.material-ui.com/#/components/card).
The _expander button_ provides the flip trigger, with the
icons set in the `Card Header` components.
This button can be anywhere that _Material-UI Card_ supports.

The `Card` components can be replaced as long as
the element size is stable or can be set with `props.getSize()`
as is done in the `Card` component property `containerStyle={ this.getSize() }`.
This ensures the front and back have the same size.

## Building
This project uses [yarn](https://yarnpkg.com)
to manage dependencies. To get started
- `yarn install`
- `yarn run start`
- browse `http://localhost:9000/`

## License
Copyright (c)2017 [Eric Gundrum](https://ericgundrum.com)

Usage and source code governed by the [MIT License](https://spdx.org/licenses/MIT.html)
