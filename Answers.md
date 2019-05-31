# Answers

1.  What is React JS and what problems does it try and solve?
React is a JS library that you can use to rapidly create interactive UIs. It is useful for create one page applications like our todo list where we added, removed, and changed item states without having to reload the entire page, only the sections that were changed.

1.  What does it mean to _think_ in react?
It means to think about how you can break apart your application into separate components so it’s easier to develop, maintain, and understand. It also means thinking on how to keep the DRY principle by making reusable components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
a stateful component can carry and handle state whereas a functional component only deals with props and cannot hold data itself. the stateful components pass props data to the functional componenets for them to use in rendering the UI.

1.  Describe state.
State is data we have that is persistent in memory as long as your component is in memory. It is also immutable and the “heart” of the app. State usually becomes props for children components.

1.  Describe props.
Props is short for properties and is the “life blood” of the app. They are the values that are passed components and are immutable also.