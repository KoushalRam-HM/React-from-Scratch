<!DOCTYPE html> <!-- Declares the document as HTML -->
<html lang="en"> <!-- It sets the language to English -->
<head>
  <meta charset="UTF-8" /> <!-- charset="UTF-8" means the document is encoded in UTF-8,which can represent almost every character in every language (English, Arabic, Chinese, emojis, etc.).-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!--Use the device’s actual width (width=device-width)-->
  <title>Document</title> <!-- Sets the Browsers Tab Title--> <!--“Make this page scale properly on phones and tablets — no weird zooming.”-->
</head>
<body>
  <!--Writing Hello world using plain HTML-->
  <div>
    <h1>Hello World</h1>
  </div>

  <!--JavaScript-->
  <div id="root"></div>
  <script>
    const heading = document.createElement("h1");
    heading.innerHTML = "Hello from javaScript";

    const root = document.getElementById("root");
    root.appendChild(heading);
  </script>

  <!--React-->
  <!--Our vs code editor doesnot understand react so we neet to put react into vs code by installing it from CDN-->

  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <!-- The URL above if use see it it is just a plain javaScript code. Its written by facebook developers-->
   <!--This is the core react thing that we usre to build UI's-->
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> 
  <!--This is used to manipulate the DOM. and helps to render the components to DOM-->

  <div id="root">
    <script>
      const heading = React.createElement("h1", {id: "heading"}, "Hello world from React");

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);// Replaces not Appended

      // What will come if we consolelog heading it is a object. so react element is a javaScript object ,root.render takes h1 tag and then render to Browser.

      // React can be added just to the portion of html because it is library.
    </script> 
  </div>
  
  
</body>
</html>


React is a javaScript libraray. The name 'React' was choosen because it is designed in such a way that it allows the developer tho react
to the changes in data, state within in an application, and to update the user interface with in a declarative and efficient manner.
when something in app changes (input, button click) the react automatically changes that part of ui that needs update. we need not to 
update it manually

imperative:->
const button = createElement("button");
button.innerHTML = "click me";
button.addEvenetListener("click", ()=>{
  alert("i got clicked")
})
document.body.apphendChild(button);


Declarative:=> We describe what Ui should look like when data or state changes.
 function Button(){
  return(
  <btn onClick={handle}>button </btn>
  )
 }
function handle(){
  alert("i got clicked")
}

Emmemt allows us to write the shortcuts that expands into fuul fledge bioler plate code for writing html and css.


library is a collection of prewritten code snippets that can be used and reused to perform certain task. A javascript library can be 
embedded into the code which leads faster development and fewer vulnerabilities to have errors.


Framework provides the basic foundation or structure for for a website or a app

The similarities b/w library and framework is :=> They are prewritten codes from third parities to solve the regular/common problems
or to optimise performance.

Differences :=>
A library is a collection of reusable code that you call when you need it.
A framework provides a structure for your entire application and calls your code at certain points — it controls the flow.

How React is Different from Javascript :=> In traditional javascript we often use to manipulate the DOM manuaaly when there is change in data
or state whereas in React the it will automatically renders the part of UI that needs upading.

state :=> State is a javascript object that stores the value which changes over time.

components :=> Are the javaScript functions which returns JSX , reusable peice of UI.

CORS :=> The cors inside the script tag enables the cross origin resource sharing to load the external javascript files from the
different origin than the hoisting website . this allows the script to access resources from the server hoisting the script.

Content Delivery Network :=> It is a network of servers located all around the world that helps to deliver content (like images, videos,js files etc)
to users faster and more reliably.
It copies the website contents on many servers around the world so it delivers faster.

speed :=> contents loads faster because its delivered from a nearby server

React builds the UI
ReactDOM helps to render the components into the DOM.




/*
🧩 Correct Order (with explanation)

1️⃣ git init — initialize a new Git repository in your project folder.
2️⃣ git status — check the current state of your repo (which files are tracked or untracked).
3️⃣ git add . — add files to the staging area (this step was missing from your list).
4️⃣ git commit -m "your message" — commit (save) the staged changes with a message.
5️⃣ git log — view the history of commits.
6️⃣ git remote add origin <repo-URL> — connect your local repo to a remote (e.g., GitHub).
7️⃣ git push -u origin main — push your commits to the remote repository.


git init
git status
git add .
git commit -m "Initial commit"
git log
git remote add origin <repo-URL>
git push -u origin main


*/

NPM (Node Package Manager) is a tool that comes with Node.js and is used to install, manage, and share packages (libraries or dependencies) for JavaScript projects.

📦 package.json
It’s a file that holds basic information about your project and the list of dependencies (packages) your project needs.
It also includes scripts, version info, project name, and other configuration details.

🔒 package-lock.json
This file is automatically created when you install packages using NPM.
It records the exact versions of every installed package (including sub-dependencies).
It ensures that everyone who installs your project gets the same package versions, avoiding version conflicts.

⚖️ Key Difference:
Feature	                        package.json	                                         package-lock.json
Purpose             	Lists the project’s main dependencies and metadata	             Locks the exact versions of all dependencies
Created by	            You (or npm init)	                                             Automatically by NPM
Editable	            Yes (manually edited)	                                          No (auto-generated)
Version control	        Defines version ranges (e.g., ^1.2.3)	                         Stores exact versions (e.g., 1.2.3)

📦 In package.json, version numbers can include:

Tilde (~)
Caret (^)

These control how NPM updates your dependencies.
🌀 1. Tilde (~)
Example: "~1.2.3"

Means: Accept only patch updates — versions like 1.2.4, 1.2.5, etc.
It will not update to 1.3.0 (a new minor version).

🧠 Think:
“Tilde = small (safe) updates only.”

🔺 2. Caret (^)
Example: "^1.2.3"
Means: Accept minor and patch updates, but not major ones.
So it can update to 1.3.0, 1.4.5, etc., but not 2.0.0.

🧠 Think:
“Caret = bigger updates allowed (but still safe from breaking changes).”

Node_Modules :=> It contains all the downloaded packages (libraries) your project needs to run — including their dependencies (and sub-dependencies).

Building our own Bundler(Parcel):
1. npm install -D parcel // D dev dependency;
2. .gitignore;
   Even if we delete node_module we can just do npm install and we will get it back;
3. npx parcel index.htm; // execute the package.
4. npm install react;
5. import React from 'react' // coming from node_modules;
6. inside the <script> tag add type="module" </script>;
7. import ReactDOM from 'react-dom/client';
8. remove main in package.json;
9. npx parcel build index.html;

Note : Bundlers are making React faster 

The code is pushed from local to git hub and then to server 
if we delete nodemodules on local but we still have package.json so it can be retrived in the server.

"browserslist": [
    "last 2 versions",
    "last 2 chrome versions"
] Which browser is supported in our frontend app.

Bundlers :=> are the tools that packages our app so that it is pushed to production

To make our app production ready what we should do ?
1. Minfy our code => Removes spaces, line breaks, comments and long variable names 
                     Makes Javascript and css file smaller and faster to load

2. Optimization => Makes our app faster and better by:
                   Lazy loading, Tree shaking

3. Clean Console logs => leaks sensitive info, slows down app, looks unprofessional

4. Bunddle our App => combine html , css ,js and images to small number of optimised files

5. Need a server to run the things.

Feature of Parcel(bundler): 

1. Hot Module Replacement
    it means that parcel keeps a track of all the files which are updating. There is a file watching algorithm that keeps tracks the files
    (written in c++)
2. parcel-cashe
    when we run an application a build is created which takes some time. if we make any changes in the code and save the application , another build will be triggered which might take even less than the previous build. This reduction in time is due to parcel-cashe.
    parcel loads the code from the cashe every time there is a subsequnt build.
3. Treeshaking 
    Removes the unused and unwanted code and optimize the code
4. It keeps the file minified for us. when the bundler builds the app , the build goes into the dist folder.it contains minified and        optimised code.

Transitive Dependency :=> When one dependency depends on another dependency




Episode 3

use scripts to run a program

"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
}

npm run dev 
npm run dev

//React Element => are javascript object => render (converts into html) => HTML element(replace root)

const heading = React.createElement("h1", {}, "Hello world");

//JSX it's not a part of react (facebook developers built this)
//Its ia a html or xml like syntax, synatx extension of javascript
//It's is converted into React Element
//Babel converts JSX to the code that JS engine understand (Transpiled) 

const jsxheading = <h1>"Hello World</h1>; // jsx in single line

const jsxheading = (          // Mulitiple line () to jsx to understant where it starrts and where it ends
<h1>"Hello World   
</h1>);

React Components: => Is a javascript function that returns a jsx 
1. class based component
2. Functional components

Always starts with capital Word

const HeadingComponenet = () => {
  return <h1>"Hello" </h1>
};

const HeadingComponenet = () => (
   <h1>"Hello" </h1>
);

const HeadingComponenet1 = () => <h1>"Hello" </h1>;

//How to render functional components
root.render(<HeadingComponent />)

const Title = () => {
  return (
    <h1> "hello" </h1>;
  )
};

const HeadingComponenet = () => {
  <Title />; 
  {Title()} ; //This also works;
  <Title></Title>;                               // This is component composition
  return <h1>"Hello" </h1>;
  { }
}; 

To use javascript inside the component we can insert into a { } curly braces

const Head = function(){
  return                                   // can use function declaration
}

To put React element inside component we use curly braces{}

Advantages of jsx;
1. Make code readable
2. Sanitises the data before rendering
3. Shows more useful errors 



Episode 4

props :=> sending a data dynamically to the component. component is a javascript function and props are like arguments so more like passing the arguments to the function. These props are wraped into object and passed as props

config driven ui :=>  uis are built based on the data not hardcoded eg: (we see differentmenucards in differnt cities)

key = To uniquely identityfy each items in the length.
when the components are at same level and the new component comes in the react re-renders whole components.but if it come with key then it knows where to put it.

import RestaurantCards from "./RestaurantCards"

const Body = () => {
  return (
    <div>
        <div className='flex justify-between m-3 p-2'>
            <div className='flex'>
                <input className='border-black bg-gray-100 rounded-lg p-2' type='text' placeholder='Search the Restaurant' />
                <button className='m-2 p-1 bg-amber-600 cursor-pointer rounded-lg'>Search</button>
            </div>
            <div>
                <button className='m-2 p-1 bg-gray-300 rounded-lg cursor-pointer'>Top Rated Restaurants</button>
            </div>
        </div>
        
        
        <div>
            <RestaurantCards />
        </div>
    </div>
  )
}

export default Body


import React from 'react'
import { RESTAURANT_LOGO } from '../Constants/Utils'

const Header = () => {
  return (
    <div className='flex justify-between m-3 p-2 bg-amber-200 cursor-pointer'>
        <div>
            <img  className='h-12' src={RESTAURANT_LOGO} alt='Restauran logo'/>
        </div>
        <div>
            <ul className='flex gap-3 mt-3 cursor-pointer'>
                <li >Home</li>
                <li >Contact</li>
                <li >About</li>
                <li >Cart🛒</li>
            </ul>
        </div>
    </div>
  )
}

export default Header

import React from 'react'
import { RESTAURANT_LOGO } from '../Constants/Utils'

const RestaurantCards = () => {
  return (
    <div>
      <div className='m-3 p-2 bg-gray-200 w-48 hover:bg-gray-400 cursor-pointer'>
        <img src={RESTAURANT_LOGO} alt="restaurant cards" />
        <h1>Meghana Foods</h1>
        <h2>Banglore</h2>
        <h3>Cusines</h3>
      </div>
    </div>
  )
}

export default RestaurantCards


Episode 5

Hooks :=> allow us to hook into react features like useState, useEffect eltc
1. Named export
2. Default export

why do we need useEffect => when we were building topratedrestaurants feature when we click on that the data changed but not appeared on on the screen then we have to use hooks to make it appear

State variables are different from normal javascript variables
State variable is a object that stores the data which changes over time.
hook is a normal javascript function
names inside the [a,b] = useState(default value) are array destructuring
whenever the state variable updates react re renders the components

Reconciliation algorithm aka React fibre:
  react creates a virtual DOM (representation of actual DOM)
  and it is a object it compares with the actual DOM
  diff algorithm compares two and find the difference and actually updates the DOM
  React is doing efficent DOM manipulation


Episode 6

Monolith and Micro services
useEffect(()=>{}, []); this will be called last after the code ends
the callback inside the function will be called after the components render.
CORS policy is implemented by the browser to make a request to the other domain. (refer youtube namaste js)
 Conditional Rendering

Episode 7

const Header = () => {
  console.log("header rendered");

  useEffect(()=>{
    console.log("useEffect rendered");
  },[])
}

header rendered will be called first, later at the end useEffect rendered will be called
every time the component renderes the useEffect is called.when dependency array is not present(every time you type a letter in the search text)
only called on initial render with dependency and if we put something inside the dependency then it is called when the dependency changes
used to create local state variables inside a functional component so dont use hooks outside the component


React router for path:
  npm i react-router;

  dont use anchor tag bcz it renders the whole page


  Types of routing:
  1. client side routing : The entire app load once and navigation happens within the browser
  2. everytime we navigate to new page, the browser sends a request to the server and the server responds with a new page.


Optimising our app

  single responsibility princiole :=> more readable, reusable and testable

  Create custom hooks
  import { useEffect, useState } from "react";
  import { SWIGGY_API } from "../Constants/Utils";


const useListOfRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  
          useEffect(()=>{
            fetchData();
        },[])

        const fetchData = async () => {
            const data = await fetch(SWIGGY_API);
            const json = await data.json();
            const res =json?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            setListOfRestaurants(res);
            setFilteredRestaurants(res);
        };

    return {
            listOfRestaurants,
            filteredRestaurants
    }
}

export default useListOfRestaurants;


 const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true)

  useEffect(()=>{
    window.addEventListner("offline", ()=>{
      setOnlineStatus(false)
    })

  window.addEventListner("online", ()=>{
      setOnlineStatus(true)
    })  

  },[])


  return onlineStatus
 }

export default useOnlineStatus;


Optimisation===========================================> 
  Chunking
  Code splitting
  Dynamic bundeling
  Lazy Loading
  On demand Loading

  const About = lazy(()=> import('Path'))

  import {lazy, Suspence} from 'react'

  <Suspence fallback={}>Wrap the element </Suspence>