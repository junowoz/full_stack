REDUX - State Management Tool with a single store as CDS - Shared information is stored in objects.
REDUCERS = Manages the State and Returns the newly updated state
ACTIONS = 2 property types: Unique ID & Payload (data)
DISPATCH = Used to send actions to update the data

The State of The Application = All of the functions and parts of the app.
State Management =  The process of sharing and updating this State. 

Redux is a state management library that follows a pattern known as the Flux architecture. In the Flux pattern, and in Redux, shared information is not stored in components but in a single object. Components are just given data to render and can request changes using events called actions. The state is available throughout the application and updates are made in a predictable manner: components are “notified” whenever a change is made to the state.

# One-Way Data Flow
In most applications, there are three parts:

- State – the current data used in the app
- View – the user interface displayed to users
- Actions – events that a user can take to change the state

The flow of information would go like this:

- The state holds the current data used by the app’s components.
- The view components display that state data.
- When a user interacts with the view, like clicking a button, the state will be updated in some way.
- The view is updated to display the new state.

---

# CORE CONCEPTS IN REDUX

## State
State is the current information behind a web application.

For a calendar application it includes the events (name, date, label, etc.), the current timezone, and the display filters. For a todo app it includes the todo items (description, completed/not completed), the current order of the items, and display filters. For a word editor, it includes the contents of the document, the print settings, and comments.

With Redux, state can be any JavaScript type, including: number, string, boolean, array, and object.