# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a specific language that is used in React. Reading very similar to HTML, it allows for a combination of HTML and javascript inside of a React application. With React being a javascript library, without the use of JSX, HTML syntax and elements would not be able to be used. A small example of JSX: (Note the use of the <h1> HTML syntax with a JS return statement as well as the use of React fragments (<></>) in place of <div></div>)
 const App = () => {
    return (
        <h1>Week 3 Assessment<h1>
    )
 } 

Researched answer: 

JSX is a markup language that is an extension to javascript and we use with the React library. Though it is not a language that is specific to React. It allows for content and rendering logic to be in the same area. Since it compiles down to standard javascript it can be used anywhere what javascript is with the proper syntax. Though in React it is often seen within the return statement of a function (as seen above), it can also be used with variables and as arguments as the following examples show that are using HTML syntax within the elements are generally javascript. When using standard javascript within JSX the curly brackets are used, {}, to open the door to "Javascript land". 
- const dayOfWeek = <h1>Sunday</h1>
- function newWeek(message) { 
   ReactDOM.render(message, document.getElementById('react-app') 
} 
newWeek(<h1>On to week 4!!!</h1>)

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer:

Yarn in a package manager software that is similar to NPM. It is used instead of and not in conjunction with NPM. Either one or the other is used. It is a javascript package manager that will install all of your dependencies for an app based off of the package.json file. When used with node.js, this will install all of your dependencies via node_modules and will also create an auto generated "yarn.lock" file that will specify which specific version of each dependency is installed. This is all done via, $ yarn, in the terminal.
Yarn also has other functionality just as creating a new, empty React application "$ yarn create react-app name-of-app" (notice the use of kebob-case)
It is also used in test applications such as when you have Jest installed $ yarn jest

Researched answer: Yarn is a javascript package manager that was initially built are scaling issues with the NPM package manager. It is used instead of NPM for installing dependencies off the package.json file. Though it does have the compatibility with both the npm and bower workflows and can support registries that are mixed. It installs these files from a global registry onto the developers local machine. These installed dependencies are installed and versioned based off of Semantic Versioning (semver). It will lock down specific versions of the dependencies that the developers application is built around and function properly with. This is especially import as various dependency versions are upgraded and these changes can cause potentially unknown breaks in the developers code.

3. What is a React component? 

Your answer:

A react component is a file that is created within a React application that should have very specific functionality (generally no more than one per component except in rare edge cases) and should be built around the idea that it can be built once and reused multiple times. Think of it as a building block or a puzzle piece that can be reused over and over. A best practice for React components is to minimize the logic that is used within them (having that logic placed in a central location such as the APP.js) and have the functional components be more focused on rendering and user interaction.

Researched answer:

React components are code blocks, and generally their own separate files in the file tree, that are independent as well as reusable and scalable. 
They are javascript functions but they are modular and work completely on their own. They focus on user interface (UI) and rendering instead of large amounts of logic. 
Components are passed to the file, or logical component through a component call of the display component in the logical component. This is done in the main return in the logical component. An example of this is as follows:

const App = () => {
    return (
        <>
            CompnentCall 
                function={function}
                function2={function2}
            />
        </>
    )
}

It can be self closing (/>) and have multiple functions passing through it that can be placed on separate lines for better readability. 
Components should always start with a capital letter to differentiate between HTML tags. This is called Pascal case.
If a component is declared as a function or a class it is NOT able to modify its own props.

4. What is the difference between state values and props in React?

Your answer:

State is used as temporary storage that can be called up upon while props is the passing of this storage from the parent to child component. Props is only able to pass in this one direction. A functional component is needed for passing props back up to the parent component.

Researched answer:

State is a structure within react that is able to be updated.  State is used to hold temporary data, and is mutable. Changes in this data that is stored within state can happen by either user activity or in response to another type of event. React components contain a built in state object where state is accessed and changed. 
Props is how data is moved between components in react. Standard props have a uniform flow that only moves from parents to child components. Unlike State, that can be updated and changes, props data is read-only. 

A fantastic quick summary of the difference between state and props that really stuck with me is that State is used to store and display changes within the component and props is used to PASS this information between components. 

1. What is the DOM?

Your answer:

The Document Object Model. This is how your code is visually rendered on the website through HTML. 

Researched answer:

The DOM refers to the Document Object Model of the webpage. It uses a tree-like structure to add HTML to node on this "tree" . This tree that the web browser sees starts at the "document" as the main "trunk" which is your index.html page.  It then begins to split into "branches", referred to as nodes, within the building blocks of the HTML page. The initial node splits start at the <html> tag, followed by the <head> and <body> tags of the index.html and continue to branch out from there into <div> tags and a multitude of other options within the HTML language. 
A great visual representation of this can be found at https://www.javatpoint.com/what-is-dom-in-react

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:

A <div></div> tag is an HTML tag that is essentially a box or container in HTML and contains a block of code. 
A <span></span> while also a container but is more like "a box inside the box". It is generally used inside of a div and inline.
Both are capable of containing inline CSS styling. 

Researched answer:
The full name for the <div> tag is division tag. It is used in HTML to divide and separate content. It must have an opening AND closing tag, <div></div>. It is what is considered a "block level" tag.

A <span> is a generic container that is used inline for elements and content. Very useful for grouping different elements together for styling. <span> best practice is to only use when not other semantic element is appropriate. It is essentially like an HTML catchall if nothing else fits the use case. 

Most HTML tags have a specific meaning (ie. <p> is a paragraph, <h3> is a header variant), <div> and <span>, while being containers, do not have a a specific visual reference.  The following example shows how the <div> contains the entire block of code while the <span> is used inline, inside of the <p> to add the ability to add additional styling to words that are inside of the span tag. .

<div id="over">
    <p>This is so<span class="baking-sheet">tasty</span>!</p>
</div>





## Looking Ahead: Terms for Next Week

1. Object-oriented programming: (ie.. OOP) a programming paradigm created to handle the complexities of large software systems. A way to create containers for various types of data that can be changed on a small scale without effecting the rest of the program. An "intersection of data and behavior" containing variables and methods.

2. Ruby: An object orients language. Uses the catch fraise: "Everything is an object"

3. Implicit return: This is the final statement inside of a method. Returning the result of the final line before the end keyword.

4. Ruby blocks: A small anonymous function that is able to be passed into a method. It is able to have multiple arguments and is enclosed in either {} or do/end statement.

5. Ruby hashes: A data structure that is used to store key: value pairs. Specifically unique key:value pairs. 
