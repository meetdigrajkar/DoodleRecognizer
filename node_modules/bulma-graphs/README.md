# bulma-graphs

- [Why Do I need It?](#why)
- [Dependencies](#dependencies)
- [Normal Setup](#setup)
- [NPM Setup](#npm-setup)
- [Settings](#settings)
- [Minimal Structure](#minimal)

Like it? Have a look at [Bulma Framebox](https://github.com/frizzant/bulma-framebox).

A dynamic fixed box to display news/hints/ads in a Bulma CSS fashion.

By default the box is at the bottom-right corner of the website.
It will stop cycling if you hover/touch over the element, or disable it in the settings.
[Github Preview](https://frizzant.github.io/bulma-graphs/)

![alt text](/images/horizontal-preview.png)

![alt text](/images/vertical-preview.png)

## Why Do I Need It? <a name="why"></a>

To display your statistics.

## Dependencies <a name="dependencies"></a>

Since the custom.sass/custom.css is built upon the **Bulma CSS Framework**,
it is recommended to use this as your base. However if you want to write
your own CSS, go ahead.
The Javascript should keep working,
if you keep the necessary ids/classes and HTML structure.

Going Vanilla JS, **no JQuery needed**! Lightweight and totally free of any JS frameworks.

Javascript version: **ES6**.
_(rewriting it for crossbrowser compatibility is simple.)_

## Normal Setup <a name="setup"></a>

The recommended structure is the following:

```html
<div class="graphs-container" data-title="Horizontal Graph">
    <div class="data-container column is-full columns is-mobile is-size-7 has-text-white is-marginless">
        <div data-title="One" data-value="10"></div>
        <div data-title="Two" data-value="50"></div>
        <div data-title="Three" data-value="100"></div>
    </div>
</div>
```
**IMPORTANT data-container classes**: `is-vertical-graph` for vertical, `columns` for horizontal.

## via npm <a name="npm-setup"></a>

`npm install bulma-graphs`

### Settings <a name="settings"></a>

Currently you can tweak the JS settings directly within the `graphs.js` file.
These are the default values.

```javascript
let graphs = { // initialize object with settings
    settings: {
        animation: true,            // true | false
        autoGenerate: true,         // true | false
        containerItemSelector: '.graphs-container .data-container div',
        containerSelector: '.graphs-container',
        errorMessages: true,        // true | false
        heightMultiplicator: 3,     // scales in pixel
        widthMultiplicator: 1,      // scales in % (percentage)
    },
};
```

### Minimal Structure <a name="minimal"></a>

This is the minimal structure needed to keep the script running how it was supposed to:

```HTML
<div class="graphs-container" data-title="">
    <div class="data-container is-vertical-graph is-multiline">
        <div data-title="" data-value="10"></div>
        <div data-title="" data-value="50"></div>
        <div data-title="" data-value="100"></div>
    </div>
</div>
```
**IMPORTANT data-container classes**: `is-vertical-graph` for vertical, `columns` for horizontal.

`data-title`'s: Are used to generate the titles. They are **not required**.

Make as many of these as you want on your page.

I think we are done here.