---
title: "[Jest] Basic Unit Testing Forms and Submission Logic"
date: "December 31 2023"
last_update: "January 1 2024"
excerpt: "Basic form unit testing with useState and onClick event"
update_excerpt: "updated with a scenario of act error."
cover_image: "/images/posts/jest.jpg"
alt: "jest-image"
git: "https://github.com/Goaty-yagi/jest-and-git-action-practice/tree/blog1"
tags: ["Jest", "React-Testing-Library", "NextJs", "TypeScript"]
previous: "/posts/JestHowToUse"
next: ""
---

<mdTopBottomContainer>

### This is an article about form unit test with useState and submit unit test.

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
	"@testing-library/user-event": "^14.5.1",
	"jest": "^29.7.0",
	"jest-environment-jsdom": "^29.7.0",
	"ts-jest": "^29.1.1"
}
```

<br>

## Contents

<mdDotContainer>
- Install user-event<br>
- Form test with useState<br>
- Submit button test<br>
- Conclusions<br>
</mdDotContainer>
<br>

# :Install user-event.

```bash
npm i -D @testing-library/user-event

```

<br>

<mdContainer class='blue'>
@testing-library/user-event is a utility library used in JavaScript testing for simulating user interactions with DOM elements. We are going to use it for a form unit test.
</mdContainer>

<br>

# :Form test with useState

<br>

## <sub-index-color>1</sub-index-color> Write form codes.

```javascript
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <form>
        <input
          type="text"
          value={value}
          onChange={onChange}
          maxLength={10}
          placeholder={"Type something..."}
        />
      </form>
    </>
  );
}
```

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>

1, Set a text input enclosed by the form tags for user input.<br><br>
2, Make a pair of variable and function by useState to store user input.<br><br>
3, Create an onChange function to update the variable via the set function.

</mdTextContainer>

<br>

## <sub-index-color>2</sub-index-color> Write test codes.

```javascript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

test("should trigger onChange event", () => {
  render(<Home />);

  // Get input element from placeholder text
  const input = screen.getByPlaceholderText("Type something...") as HTMLInputElement;

  const inputText = "Hello";

  // Simulate typing 'Hello' into the input field
  userEvent.type(input, inputText);

  // Check if the value in the input field has 'Hello' value
  expect(input).toHaveValue(inputText);
});
```

<br>

### <sub-index-color>-</sub-index-color> Let's test!

```bash
npm test
```

<br>

### <sub-index-color>-</sub-index-color> Result!

<br>

<img alt="result" src="/images/posts/articles/jest-result-2-1.png">

<br>

<mdContainer class='red'>

Ohh, we couldn't pass the test, but why??

</mdContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>

The set function made by useState is asynchronous, so when the expect function is checking the value in the input field, actually the variable is still default value as "".

</mdTextContainer>

<br>

## <sub-index-color>3</sub-index-color> Use async and await

```javascript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

test("should trigger onChange event", async () => {
  // New!
  render(<Home />);

  const input = screen.getByPlaceholderText("Type something...");

  const inputText = "Hello";

  //Use await to wait until the set function ends
  // The userEvent returns Promise
  await userEvent.type(input, inputText); // New!

  expect(input).toHaveValue("Hello");
});
```

### <sub-index-color>-</sub-index-color> Let's test again!

```bash
npm test
```

<br>

### <sub-index-color>-</sub-index-color> Result!

<img alt="result" src="/images/posts/articles/jest-result-2-2.png">

<br>

<mdContainer class='blue'>

Hooray!! we passed the form test!

</mdContainer>

<br>

## <sub-index-color>4</sub-index-color> Test an edge case more than 10 chars

<mdContainer class='blue'>

The input form has an attribute named maxLength with value 10, so what if the input value is more than 10 chars?

</mdContainer>

<br>

```javascript
import { render, screen } from "@testing-library/react"; // New!
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

test("should trigger onChange event", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText("Type something...");

  const inputText = "Hello";

  await userEvent.type(input, inputText);

  expect(input).toHaveValue("Hello");

  // Simulate appending ' World' to the input field "Hello" already in
  await userEvent.type(input, " World!");

  // Check if the value in the input field has 'Hello World!' value
  expect(input).toHaveValue("Hello World!");
});
```

### <sub-index-color>-</sub-index-color> Let's test again!

```bash
npm test
```

<br>

### <sub-index-color>-</sub-index-color> Result!

<img alt="result" src="/images/posts/articles/jest-result-2-3.png">

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>

We couldm't pass the test, because the length of input value is 12, but the input maxLength is 10.

</mdTextContainer>

<br>

### <sub-index-color>-</sub-index-color> In this case, you can use toHaveLength(number)

```javascript
import { render, screen } from "@testing-library/react"; // New!
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

test("should trigger onChange event", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText("Type something...");

  const inputText = "Hello";

  await userEvent.type(input, inputText);

  expect(input).toHaveValue("Hello");

  await userEvent.type(input, " World");

  // Check if length of the value equal to 10
  expect(input.getAttribute("value")).toHaveLength(10); // New!
});
```

<br>

<mdContainer class='blue'>

So far so good! Now we can test input onChange event and input value length.

</mdContainer>

# :Submit button test!

## <sub-index-color>1</sub-index-color> Write submit button codes.

```javascript
import { useState, ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState(true); // New!
  const test = "Hello Jest";
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (event.target.value) {
      // New!
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  const onClick = (event: FormEvent<HTMLFormElement>) => {
    // New!
    event.preventDefault();
    if (value) {
      setIsClicked(true);
      setTimeout(() => {
        setValue("");
      }, 3000);
      console.log("Submited");
    } else {
      console.log("Input is empty");
    }
  };
  return (
    <>
      <form onSubmit={onClick}>
        // New!
        <input
          type="text"
          value={value}
          onChange={onChange}
          maxLength={10}
          placeholder={"Type something..."}
        />
        <button type={"submit"} disabled={isClicked}>
          {" "}
          // New! Submit
        </button>
      </form>
    </>
  );
}
```

<br>

<mdTextContainer class="red">
<boxTitle class="red">
New
</boxTitle>

1, make a pair of variable and function by useState to hold boolean to control the button availability.<br><br>
2, Set if else statement to make sure the button is not disabled if the value exists.<br><br>
3, Handles the onClick event of a form submission. It prevents the default form submission behavior. if value is not empty, sets isClicked to true, then uses setTimeout to set setValue back to empty after 3 seconds while print "Input is empty" if empty.<br><br>
4, Set onSubmit in the form tab. It uses the onClick function as its onSubmit handler.<br><br>
5, A button triggering form submission and disabling itself when isClicked is true.

</mdTextContainer>

<br>

## <sub-index-color>2</sub-index-color> Write test codes.

```javascript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

test("Test onSubmit", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText("Type something...");

  // Get submit button element from text
  const submitButton = screen.getByText("Submit");

  // Test the button is disabled before user input is typed.
  expect(submitButton).toBeDisabled();

  // Simulate user input.
  await userEvent.type(input, "something");

  // Test the button is not disabled after user input is typed.
  expect(submitButton).not.toBeDisabled();

  // Mock function to test the function is called
  const mockOnClick = jest.fn();

  // Integurate onclick event with the mock function
  submitButton.onclick = mockOnClick;

  // Simulate the button is clicked.
  await userEvent.click(submitButton);

  // Test submitButton is called
  expect(mockOnClick).toHaveBeenCalled();

  // Once the button is clicked, it should be disabled
  expect(submitButton).toBeDisabled();
});
```

<br>

<mdTextContainer class="red">
<boxTitle class="red">
Assumption
</boxTitle>

There are four tests.<br><br>
1, The button will be disabled before user input is typed.<br>
2, The button won't be disabled after user input is typed.<br>
3, SubmitButton will be called once it's clicked.<br>
4, Once the button will be clicked, it should be disabled

</mdTextContainer>

### <sub-index-color>-</sub-index-color> Let's test!

```bash
npm test
```

<br>

### <sub-index-color>-</sub-index-color> Result!

<img alt="result" src="/images/posts/articles/jest-result-2-4.png">

<br>

<mdContainer class='blue'>

Hooray!! we passed the button test!<br>
We can see the output "Submited"!

</mdContainer>

## <sub-index-color>3</sub-index-color> Let's test after three seconds.

```javascript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

test("Test onSubmit", async () => {
  render(<Home />);

  const input = screen.getByPlaceholderText('Type something...');

   // Get submit button element from text
  const submitButton = screen.getByText('Submit')

  // Test the button is disabled before user input is typed.
  expect(submitButton).toBeDisabled();

  // Simulate user input.
  await userEvent.type(input, "something");

  // Test the button is not disabled after user input is typed.
  expect(submitButton).not.toBeDisabled();

  // Mock function to test the function is called
  const mockOnClick = jest.fn();

  // Integurate onclick event with the mock function
  submitButton.onclick = mockOnClick;

  // Simulate the button is clicked.
  await userEvent.click(submitButton);

  // Test submitButton is called
  expect(mockOnClick).toHaveBeenCalled();

  // Once the button is clicked, it should be disabled
  expect(submitButton).toBeDisabled();

  // Simulate the setTimeout duration (3 seconds)
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      // Assert that the button is no longer disabled after 3 seconds
      expect(input.getAttribute("value")).toBe("");
      console.log("value:", input.getAttribute("value"));
      resolve();
    }, 3000);
  });
});

```

<br>

<mdTextContainer class="red">
<boxTitle class="red">
Assumption
</boxTitle>

After three seconds, setValue("") will be executed, then the value
will be set empty.

</mdTextContainer>

<br>

### <sub-index-color>-</sub-index-color> Let's test!

```bash
npm test
```

<br>

### <sub-index-color>-</sub-index-color> Result!

<img alt="result" src="/images/posts/articles/jest-result-2-5.png">

<br>

<mdContainer class='blue'>

Took a few second becaus of the setTimeout, then...<br>
Hooray!! We passed the button test!<br>
console.log printing the string without value which means empty!

</mdContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
INFO
</boxTitle>

You might have an error like below.<br><br>
<textColor class="red">"Warning: An update to Home inside a test was not wrapped in act(...).
When testing, code that causes React state updates should be wrapped into act(...):"<textColor>
<br><br>
In this case, import act from "@testing-library/react", and surround the function with the act.

</mdTextContainer>

```javascript
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/pages";

test("Test onSubmit", async () => {
  render(<Home />);

  //~~~~~~~~~~~~~~~~~~~~~~//
  //~~~~~~~~~~~~~~~~~~~~~~//

  await act(async () => {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  });
  expect(input.getAttribute("value")).toBe(""); // Move expect outside of the act()
  console.log("value:", input.getAttribute("value"));
});
```

<br>

<mdTextContainer class="red">
<boxTitle class="red">
What is act?
</boxTitle>

The purpose of act() is to wrap code that causes side effects, updates to the DOM, or state changes triggered by user interactions or asynchronous operations during tests. It helps ensure that these updates are handled synchronously within the testing environment.<br><br>
You can search more about the screen <customA><a href="https://testing-library.com/docs/react-testing-library/api/#act">here</a></customA>

</mdTextContainer>

# :Conclusions

<mdContainer class='yellow'>

In this article, we delved into the fundamentals of writing unit tests for forms and submit functionality using Jest and React-Testing-Library. We explored essential concepts such as handling user input, testing form behaviors with useState, and verifying button interactions.

</mdContainer>

## <sub-index-color>-</sub-index-color> Key Takeaways

<mdTextContainer class="red">
<boxTitle class="red">
Form Testing with useState
</boxTitle>

input field, utilizing useState to manage input state changes. We highlighted the intricacies of asynchronous state updates and employed strategies like await to address these challenges effectively.

</mdTextContainer>

<br>

<mdTextContainer class="red">
<boxTitle class="red">
Submit Button Testing
</boxTitle>

Our exploration extended to testing submit button functionality. We scrutinized scenarios involving button enablement, onClick event validation, and the effects of asynchronous operations with a time delay using setTimeout.

</mdTextContainer>

<mdContainer class='yellow'>

Throughout our journey, we encountered nuances inherent in unit testing, such as handling asynchronous state updates and ensuring precise validation of user interactions. Understanding the behavior of useState alongside event handling in React components became pivotal in crafting robust and reliable test suites.

</mdContainer>
