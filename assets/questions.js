export const questions = [
  {
    question: 'What is ORM?',
    answer:
      'Object Relational Mapping. A technique that connects the rich objects of an application to tables in a relational database management system.',
    subjectId: 3,
  },
  {
    question: 'What is DRY?',
    answer: 'Don’t Repeat Yourself. DRY code lacks redundancy and repetition.',
    subjectId: 3,
  },
  {
    question: 'What is Code Smell?',
    answer:
      'Any characteristic in the source code of a program that possibly indicates a deeper problem.',
    subjectId: 3,
  },
  {
    question: 'What are Restful Routes?',
    answer:
      'A set of principles that provide a way of mapping HTTP verbs and CRUD actions.',
    subjectId: 3,
  },
  {
    question: 'What are the 3 ways to integrate CSS?',
    answer:
      'Inline -> written as a part of the HTML element. External -> separate CSS file that is linked in the HTML. Internal -> written in a style tag inside the head element.',
    subjectId: 4,
  },
  {
    question: 'Describe the difference between margin and padding...',
    answer:
      'Margin is the transparent space outside the border. Padding is the transparent space inside the border surrounding the content.',
    subjectId: 4,
  },
  {
    question: 'What is the z-index?',
    answer:
      'The z-index helps specify the stack order of positioned elements that may overlap one another. Default value is zero and it can take either a positive or negative number.',
    subjectId: 4,
  },
  {
    question: 'What are media queries?',
    answer:
      'Media queries are rules that apply different styles for different media types/devices. Media queries can be used to check things, like: width/height of viewport, width/height of device, orientation, and resolution.',
    subjectId: 4,
  },
  {
    question: 'Describe the 3 levels of CSS specificity...',
    answer:
      'From the top: 1) Type selectors and pseudo-elements.  2) Class selectors, attribute selectors, and pseudo classes.  3) ID selectors.',
    subjectId: 4,
  },
  {
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language',
    subjectId: 4,
  },
  {
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    subjectId: 4,
  },
  {
    question: 'What is semantic HTML?',
    answer:
      'A style that is more descriptive. Ex. Using <strong /> and <em /> instead of <b /> and <i />',
    subjectId: 4,
  },
  {
    question: 'What is the iframe tag used for?',
    answer: 'An iframe is used to display a web page within a web page.',
    subjectId: 4,
  },
  {
    question: 'What is Bootstrap?',
    answer:
      'Bootstrap is CSS/Javascript framework for building the rich web applications with minimal effort. This framework emphasis more on building mobile web applications.',
    subjectId: 4,
  },
  {
    question: 'What is a CSS preprocessor?',
    answer:
      "A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.",
    subjectId: 4,
  },
  {
    question: 'What is a Closure?',
    answer:
      'A function that returns a function. It allows a function to have "private" variables.',
    subjectId: 1,
  },
  {
    question: 'What is a Callback:',
    answer: 'A function that is passed into another function as an argument.',
    subjectId: 1,
  },
  {
    question: 'What is a Promise?',
    answer:
      'An object that represents the eventual completion (or failure) of an asynchronous operation. A promise can be in 1 of 3 states: pending, fulfilled, rejected.',
    subjectId: 1,
  },
  {
    question: 'Explain the "this" keyword...',
    answer: 'The "this" keyword refers to the object that it belongs to.',
    subjectId: 1,
  },
  {
    question: 'What is a Pure Function',
    answer:
      'A function that given the same input will always produce the same output, and produces no side effects.',
    subjectId: 1,
  },
  {
    question: 'What are Side Effects?',
    answer:
      'Any application state change that is observable outside the called function other than its return value.',
    subjectId: 1,
  },
  {
    question: 'What are Higher-Order Functions?',
    answer:
      'Functions that take other functions as arguments or return functions as their results. Examples include: .map(), .sort(), .reduce(), .filter(), and .forEach()',
    subjectId: 1,
  },
  {
    question: 'Explain the Virtual DOM...',
    answer:
      'When components rerender, the virtual DOM is updated, a diff is performed between the virtual DOM and the DOM, and then the HTML DOM only changes the updated elements instead of rerendering the whole DOM.',
    subjectId: 5,
  },
  {
    question: 'What is a Stateless Component?',
    answer: 'Does not have state, but receives props.',
    subjectId: 5,
  },
  {
    question: 'Describe the 3 Principles of Redux...',
    answer:
      '1) The state of the whole application is stored in an object tree within a single store. \n 2) The only way to change the state is to emit an action. \n 3) Changes are made with pure functions.',
    subjectId: 5,
  },
  {
    question: 'What are the 3 parts of Redux?',
    answer: '1) Actions 2)Reducers 3)Store',
    subjectId: 5,
  },
  {
    question: 'What are Redux Actions?',
    answer: 'Events that send data from the application to the store.',
    subjectId: 5,
  },
  {
    question: 'What are Redux Reducers?',
    answer:
      'Pure functions that take the current state of the application and an action, and then return a new state.',
    subjectId: 5,
  },
  {
    question: 'What is the Redux Store?',
    answer:
      'The object that holds the application state and provides a few helper methods to access the state, dispatch actions, and register listeners.',
    subjectId: 5,
  },
  {
    question: 'What is a Stateful Component?',
    answer: 'Depends on its own state and can change that state.',
    subjectId: 5,
  },
  {
    question: 'What is the difference between a class and a module?',
    answer:
      'A module is a collection of methods and constants, but it cannot generate instances. A class may inherit from another class, but not from a module. A module may not inherit from anything.',
    subjectId: 2,
  },
  {
    question: 'What is an Object in Ruby?',
    answer: 'Everything in Ruby is an object.',
    subjectId: 2,
  },
  {
    question: 'What is the "self" keyword?',
    answer: '"Self" refers to the object that is currently in context.',
    subjectId: 2,
  },
  {
    question: 'What is a Ruby Gem?',
    answer:
      'A packaged Ruby application that contains: Code, Documentation, and a gemspec.',
    subjectId: 2,
  },
  {
    question: 'What is a Gemfile?',
    answer:
      'A file which is used for describing gem dependencies for Ruby programs.',
    subjectId: 2,
  },
  {
    question: 'Describe the .gemspec file...',
    answer:
      'It specifies the information about a gem such as its name, version, description, authors, and homepage.',
    subjectId: 2,
  },
  {
    question: 'What does CRUD stand for?',
    answer: 'Create, Read, Update, Delete',
    subjectId: 2,
  },
  {
    question: 'Describe the CRUD actions in Ruby...',
    answer:
      '1) GET path=/toys controller#action=toys#index - display a list of all toys  2) GET path=/toys/new controller#action=toys#new - return an HTML form for creating a new toy  3) POST path=/toys controller#action=toys#create - create a new toy  4) GET path=/toys/:id controller#action=toys#show - display a specific toy  5) GET path=/toys/:id/edit controller#action=toys#edit - return an HTML form for editing a toy  6) PATCH/PUT path=/toys/:id controller#action=toys#update - update a specific photo  7) DELETE path=/toys/:id controller#action=toys#destroy - delete a specific photo',
    subjectId: 2,
  },
  {
    question: 'What is Active Record?',
    answer:
      'The model in MVC. Objects carry both persistent data and behavior which operates on that data.',
    subjectId: 2,
  },
  {
    question: 'What is Rails?',
    answer: 'A framework used for building a web application.',
    subjectId: 2,
  },
  {
    question: 'What are Symbols?',
    answer:
      'A given symbol name refers to the same object throughout a Ruby program. Symbols are immutable.',
    subjectId: 2,
  },
  {
    question: 'What is Sinatra?',
    answer:
      'Sinatra is a Domain Specific Language (DSL) for quickly creating web applications in Ruby with minimal effort.',
    subjectId: 2,
  },
  {
    question: 'What is Unit Testing?',
    answer: 'Testing individual units/components of a software.',
    subjectId: 6,
  },
  {
    question: 'What is Integration Testing?',
    answer: 'Testing groups of combined individual units.',
    subjectId: 6,
  },
  {
    question: 'What is System Testing?',
    answer:
      'Testing that validates the complete and fully integrated software product.',
    subjectId: 6,
  },
  {
    question: 'Describe TDD...',
    answer:
      'Test-Driven Development is where you write your tests before writing your code. Helps your functionality conform to requirements and discourages opinionated code/tests.',
    subjectId: 6,
  },
  {
    question: 'When using Mocha, what does "describe" do?',
    answer: '"describe" defines a group of tests.',
    subjectId: 6,
  },
  {
    question: 'When using Mocha, what does "it" do?',
    answer: '"it" defines a single test.',
    subjectId: 6,
  },
  {
    question: 'When using Mocha, what does "before" do?',
    answer:
      '"before" goes inside "describe" and runs before ANY tests in that group.',
    subjectId: 6,
  },
  {
    question: 'When using Mocha, what does "beforeEach" do?',
    answer:
      '"beforeEach" goes inside "describe" and runs before EVERY test in that group. Can be very expensive.',
    subjectId: 6,
  },
  {
    question: 'When using Mocha, what does "after" do?',
    answer:
      '"after" goes inside "describe" and runs after ANY tests in that group.',
    subjectId: 6,
  },
  {
    question: 'When using Mocha, what does "afterEach" do?',
    answer:
      '"afterEach" goes inside "describe" and runs after EVERY test in that group. Can be very expensive',
    subjectId: 6,
  },
  {
    question: 'What is Chai?',
    answer:
      'Chai is an assertion library. An assertion evaluates that a condition is true.',
    subjectId: 6,
  },
  {
    question: 'What is Mocha?',
    answer: 'Mocha is a test runner.',
    subjectId: 6,
  },
]

export const subjects = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Ruby',
  },
  {
    id: 3,
    name: 'General',
  },
  {
    id: 4,
    name: 'HTML/CSS',
  },
  {
    id: 5,
    name: 'React/Redux',
  },
  {
    id: 6,
    name: 'Testing',
  },
]
