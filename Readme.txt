How to run this demo on local machine?
-> 
1. To run this demo Nodejs must be installed in your machine
2. then open command prompt (terminal) and navigate to demo folder(directory) (i.e. redux-demo)
3. run following command --> "npm update"  these will install node modules on your local machine. 
4. Then run following command -->  "npm start" these will start demo in your browser.


What we have implemented?
->
we have create a simple React demo, in which we have managed state using Redux.
Here we have create persons array,  which is collection of person object, having properties: name, age
In this demo we can add and remove persons.


How we have implemented with Redux?
->
1. We have created Reducer inside src/store/reducer.js
2. We have added store to src/index.js
3. We have dispatched action to reducer from as well as subscribed to state from 'src/containers/persons.js

How it works immutably?
->
here we immutably add person object and remove person object to redux store.
1. for adding object immutably we have used 
	state.persons.concat(newPerson)
    i.e. concat() method because it create new array and add newPerson object to that new array.
2. for removing object immutable we have used
	state.persons.filter(person => person.id !== action.personId)
    i.e filter() method because it create new array of object with match condition (i.e. without deleted object)