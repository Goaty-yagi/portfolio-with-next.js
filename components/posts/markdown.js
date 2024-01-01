import { Box } from "@chakra-ui/react";

import { marked } from "marked";
import prismjs from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python.min";
import "prismjs/components/prism-bash.min";

export default function Markdown({ content }) {
  const renderer = new marked.Renderer();

  renderer.code = function (code, lang, escaped) {
    code = this.options.highlight(code, lang);
    if (!lang) {
      return `<pre><code>${code}</code></pre>`;
    }
    const langClass = "language-" + lang;
    return `<pre class="${langClass}"><code class="${langClass}">${code}</code></pre>`;
  };
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

  return <Box w="100%" dangerouslySetInnerHTML={{ __html: marked(content) }} />;
}
