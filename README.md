## App -Foundation
 layout components
  ## 1. Header
    - img logo
    - nav-items

   ## 2. Body
    - search
    -  Reaturant conatainer
      - ResCard
         # img
         # res name 
         # cusines
         # delivery time
         # star rating
  ## 3 . Footer
      - copyright
      - links
      - address
      - contact     



## Parcel 
-HRM
-Provides server (localhost for our app)
- consistent Hashing
-Tree Shaking
-Minification of the files
- compress our file 
- create a build for our project before pushing to production
-code spliting
-Diffrentical Bundling 
- Transplies Our Code (jsx into react element done by babel)
- Image optimization
Good error handling

## Types of Export / Import
- Default Export : exports only one component or function by default in a js file
- Named Export : exports multiple components or functions in a js file

## Super power of State Variable
- state variable is implemented by a hook
- ### Hook : Is a simple function provided by react developer , we can say as util and its built in
- useState hook is used to create state variable
- state variable is mutable
- state variable helps us to be synced with UI.
- usestate returns an array 
- usestate takes two arrays variable with setVariable name is used to re-render UI according data changed

## React Fiber or Reconciliation
- came in react 16 version
-React has virtual dom concept 
### Virtual dom is Javascript representation (objects) of tags , elements
- Basically combine all the jsx forms javascript obj which is virtual dom 
- React uses a diff algorithm which comapare the changes of virtual dom (old and new)
  then updates the actual dom. This makes dom manipulation easy ....


## useEffect 
- Normal Js Fucntion
- takes 2 arrguments (CALLBACK, DEPENDENCY ARRAY)
- useEffect call back function runs after the first dumby render. for eg to fetch api data
- hence we can use useEffect if have to render something after the first render.
