---
title: 'test post3'
date: 'June 24 2022'
excerpt: 'this is the excerpt3'
cover_image: '/images/posts/img1.png'
tags: ['Javascript','Python']
---
`React + marked + prism.js

**Code Sample:**
```javascript
import marked from "marked";
import prismjs from "prismjs";

marked.setOptions({
  renderer,
  highlight: function(code, lang) {
    try {
      return prismjs.highlight(code, prismjs.languages[lang], lang);
    } catch {
      return code;
    }
  }
});
```