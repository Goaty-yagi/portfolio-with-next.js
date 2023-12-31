---
title: "[Jest] How to use Jest with React-Testing-Library"
date: "December 7 2023"
excerpt: "How to use test library with Next.js and TS"
cover_image: "/images/posts/jest.jpg"
alt: "image"
git: "https://github.com/Goaty-yagi/jest-and-git-action-practice/tree/blog0"
tags: ["Jest", "React-Testing-Library", "NextJs", "TypeScript"]
previous: ""
next: "/posts/JestBasicFormTest"
---


<mdTopBottomContainer>

### This is a record of how I implemented test environment.

</mdTopBottomContainer>
<br>

## Dependency

```javascript
"dependencies": {
	"eslint": "8.54.0",
	"eslint-config-next": "^14.0.3",
	"next": "^14.0.3",
	"react": "^18.2.0",
	"react-dom": "^18.2.0",
	"typescript": "5.2.2"
  },
"devDependencies": {
	"@testing-library/jest-dom": "^5.16.5",
	"@testing-library/react": "^14.1.2",
	"jest": "^29.7.0",
	"jest-environment-jsdom": "^29.7.0",
	"ts-jest": "^29.1.1"
}
```

<br>

## Contents

<mdDotContainer>
- Why I implemented a test environment?<br>
- What is Jest?<br>
- What is React-Testing-Library?<br>
- How to implement a test environment?<br>
</mdDotContainer>
<br>

# :Why I implemented a test environment?

<mdContainer class='blue'>
There is a few projects I built, which have no test environment. I somehow knew that testing is important and developers should have the skills, but I wanted to concentrate on creating features rather than testing. <br>
But I know now testing can :
<br>
<br>
- easily discovered errors at an early stage during development.<br>
- increase the possibility of not breaking existing functions when new functions are added.<br>
- check whether user operations are as expected.<br>
<br>
So  I am trying to add test environment to my previous projects.
<br>
</mdContainer>

<br>

# :What is Jest?

<mdContainer class='blue'>
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

<customA>[Look at Jest](https://jestjs.io/)</customA>

</mdContainer>

<br>

# :What is React-Testing-Library?

<mdContainer class='blue'>
The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.

<customA>[Look at React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)</customA>

</mdContainer>

<br>

# :How to implement a test environment?

<br>

<mdTextContainer>
<boxTitle>
INFO
</boxTitle>

Assumption is that next.js app with Typescript is already built.

</mdTextContainer>

<br>

## <sub-index-color>1</sub-index-color> Install dependency

```bash
npm i -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom ts-jest

```

<br>

<mdContainer class='blue'>
Install 5 dependencies<br>
- jset<br>
- jest-environment-jsdom<br>
- @testing-library/react<br> 
- @testing-library/jest-dom<br>
- ts-jest<br>

</mdContainer>

## <sub-index-color>2</sub-index-color> Create jest.config.js and jest.setup.js files in the root dir.


### <sub-index-color>-</sub-index-color> jest.setup.js looks like this.

```javascript
import "@testing-library/jest-dom/extend-expect";
```

### <sub-index-color>-</sub-index-color> jest.config.js looks like this.

```javascript
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
```

### <sub-index-color>-</sub-index-color> now the directories looks like this.

```bash
|- .next
|- .swc
|- node_modules
|- pages
|- public
|- styles
- .eslintrc.json
- .gitignore
- jest.config.js //added
- jest.setup.js //added
- next-env.d.js
- next.config.js
- package-lock.json
- package.json
- README.md
- tsconfig.json

```

## <sub-index-color>3</sub-index-color> Add test script in the package.json.

<br>

```javascript
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest" // added
}
```

<br>

<mdContainer class='blue'>
You can start testing by the command "npm test" once a test file is ready.
</mdContainer>

## <sub-index-color>4</sub-index-color> Write test codes for Home component.

<br>

<mdContainer class='blue'>
There is Home component which returns a pair of div tag with text 
"Hello Jest"
</mdContainer>

<br>

```javascript
export default function Home() {
  const test = "Hello Jest";
  return (
    <>
      <div>{test}</div>
    </>
  );
}
```

### <sub-index-color>-</sub-index-color> Create a test file named Home.test.tsx

<br>

```bash
|- pages
 |- apis
 - _app.tsx
 - _document.tsx
 - index.tsx
 - Home.test.tsx // added

```

### <sub-index-color>-</sub-index-color> Write test codes in the test file to test the component rendered and the text exists.

```javascript
import { render, screen } from "@testing-library/react";
import Home from "@/pages";

it("should have Hello Jest text", () => {
  render(<Home />); // ARRANGE

  const myElem = screen.getByText("Hello Jest"); // ACTION
  // test text 'Hello TEST' in the screen
  expect(myElem).toBeInTheDocument(); // ASSERT
});
```

<br>

<mdTextContainer class="red">
<boxTitle class="red">
What is it?
</boxTitle>
"it"(or test) is a function provided by testing frameworks like Jest that defines an individual test case or specification. It's used to describe the expected behavior or outcome of a specific part of your code.
<br>
- The first argument is the test description.<br>
- The second argument is a callback function that describes the test content
</mdTextContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
What is render?
</boxTitle>
"render" initializes the rendering of the component, making it available for inspection and interaction within the test.
</mdTextContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
What is screen?
</boxTitle>
"screen" object is a utility provided to facilitate querying and interacting with elements rendered in your tests.
<br>

You can search more about the screen <customA><a href="https://testing-library.com/docs/react-testing-library/cheatsheet/#queries">here</a></customA>

</mdTextContainer>


<br>

<mdTextContainer class="red">
<boxTitle class="red">
What is expect?
</boxTitle>
"expect"is an assertion function provided by testing frameworks. It's used to make assertions or expectations about certain conditions in your code. It's often followed by matchers like toBe, toBeInTheDocument, etc., to specify the expected behavior.

<br>

You can search more about the expect <customA><a href="https://jestjs.io/docs/expect">here</a></customA>

</mdTextContainer>

### <sub-index-color>-</sub-index-color> Let's test!

```bash
npm test
```

<br>

<mdContainer class='blue'>
Run the command in the terminal.
</mdContainer>

<br>

<img alt="result" src="/images/posts/test-result.png">

<br>

### Hooray! passed the test!

# <sub-index-color>-</sub-index-color> Conclusion

<mdContainer class='blue'>
Integrating Jest and React Testing Library with TypeScript in a Next.js project provides a robust testing framework. It ensures components function as expected, enhances code quality, and boosts confidence in the application's reliability. By following these steps and leveraging these tools effectively, you can maintain a solid testing suite for your Next.js TypeScript application.
</mdContainer>
