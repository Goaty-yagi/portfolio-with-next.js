---
title: "[NEXT.js] Syntax highlight with Marked and Prism.js"
date: "September 11 2022"
excerpt: "How to set up Prism and Marked to highlight markdown code"
cover_image: "/images/posts/next.png"
alt: "image"
tags: ["NextJs", "Prism", "Marked"]
---

This is how to set up Prism and Marked to highlight markdown code.

## Dependency

```javascript
	"marked": "^4.1.0",
    "next": "12.2.5",
    "prismjs": "^1.29.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
```
<br>

## Import prism and marked in posts/[slug].js.

```javascript
import { marked } from "marked";
import prismjs from "prismjs";
```
<br>

## Set up marked renderer.

```javascript
const renderer = new marked.Renderer();
renderer.code = function (code, lang, escaped) {
  code = this.options.highlight(code, lang);
  if (!lang) {
    return `<pre><code>${code}</code></pre>`;
  }
  const langClass = "language-" + lang;
  return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
};
```

<br>

## Set options to marked with prism.

```javascript
marked.setOptions({
  renderer,
  highlight: function (code, lang) {
    try {
      return prismjs.highlight(code, prismjs.languages[lang], lang);
    } catch {
      return code;
    }
  },
});
```

<br>

## Set markdown content with marked.

```javascript
return (
  <div className="post-body">
    <a dangerouslySetInnerHTML={{ __html: marked(content) }}></a>
  </div>
);
```
<br>

## Set theme.

```javascript
import "prismjs/themes/prism-tomorrow.css";
```

This setting highlight default language like javascript and css.

To add more languag...

```javascript
import "prismjs/components/prism-python.min";
```

You can change the python part to other language.
