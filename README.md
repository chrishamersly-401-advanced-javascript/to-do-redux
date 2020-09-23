# to-do-redux

#### Monday Changes

1. As a user, I would like an easy way to add a new to do item using an online interface
1. As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
1. As a user, I would like to delete to do items that are no longer needed
1. As a user, I would like to easily mark to do items as completed
1. As a user, I would like to edit an existing to do item
> Technical Requirements / Notes
1. You’ve been provided “starter code” for this phase. Copy the starter code folder contents into your repository to use as your starting point for the application. We’ll be refactoring this to fulfill the requirements.

1. Convert the architecture from Class Based Components into Functional Components
1. Apply styling and layout using React Bootstrap Components
1. Ensure the current functionality works unchanged
1. Manage state using the useState() hook
1. Use a useEffect() hook to change the title of the browser with the complete/incomplete counts
1. Use a useEffect() hook to pre-load the seeded To Do Items
1. Match the provided mockup for the design
1. Use react-bootstrap components and theming
>Some interactivity notes:
1. Each item in list should show the text of the item as well as the assignee
1. When clicked, toggle the “complete” status of the item.
1. Items should be styled differently when complete/incomplete making their status visually obvious

# Tuesday Changes
1. On application start, display all of the to do items from the API/Database
1. When adding an item, issue a POST request to the API server
1. When marking items complete, issue a PUT request to the API server for the item
1. When deleting items, issue a DELETE request to the API server for the item

> Implementation Requirements

>API
1. You have previously built a working, and deployed API server that handles data models such as categories and products
1. Add a new data model for “To Do” items as noted in the Business Requirements document, and deploy it to Heroku
>Hooks:
1. Use the useEffect() hook to pre-load the To Do Items from the API on application start
1. Replace the current form change/submit handlers with the useForm() custom hook to manage the “Add Item” form
1. Create a new custom hook called useAjax() to abstract the API calls
1. Using this hook in your component should make the calls to the server
  >This hook should:
  1. Accept the URL to the API server, the REST method, and (when relevant) the BODY (JSON) of the request
  1. Handle CORS Settings, Content-Type, Headers and possibly authentication
  1. You should use axios to perform the actual AJAX calls