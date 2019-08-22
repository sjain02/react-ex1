# Important concepts in React

- let, const and var
- ES6 arrow functions

  - arguments are no more bound in arrow function

  ```
  //ES5 Syntax: arguments is the all param pass to f(x)
  const add=function(a,b){
      console.log(arguments)
      return a+b
  }
  ```

  - this keyword is no more bound

  ```
  const tourist={
      name:'Alice',
      places:['Hyderabad','Bangalore','Mumbai']
      placeVisited:function(){
          console.log(this.name);
          console.log(this.places)

      this.places.forEach(function(place){
          console.log(this.name + ' visited '+place)
          //ERROR "cannot read property of undefined" this.name is only accessible in context to anonymos f(x)
      });
      }
  }
  //workaround->that=this and use that.name in anonymous
  ```

- JSX expression
- conditional rendering { options.map((t)=>(t))}
- babel-cli, babel-preset-env, babel-preset-react,babel-cli (react productive tool kits)
- babel src/app.js --output-file=public/app.js --presets=env,react --watch
- live-server public
- setting up package.json (npm init)
- Events and attributes
- Data Bindings
- DOM Elements: React Search will result in various DOM element supported
- ES6 Classes
- React Components (Creation, component Interaction)
- Default Props

```
ComponentName.defaultProps={

}
example:
Header.defaultProps={
    title:'Header',
    subTitle:'Sub Title'
}
```

- Lifecycle Methods **naming is important**, _these methods are for class basec component_
  - componentDidMount(){}
  - componentDidUpdate([prevProps,prevState]){}
  - componentWillUnmount(){} _Usually can be used for cleaning up_
- Saving and Loading data: _localStorage_ **NOTE: only works with string data**

  - localStorage.setItem('name','Saurabh')
  - localStorage.getItem('name')
    _To Store the object_ JSON.stringify(js_object) and JSON.parse(JSON.stringify_str)
  - example

  ```
  const Book={
      Title:'Alice in Wonderland',
      type:'Fiction',
      subtype:'Tales'
  }
  book_str=JSON.stringify(Book)
  bookObj=JSON.parse(book_str)
  ```

  - Webpack configuration (npm install webpack --save, HELP webpack.js.org)
    _avoid global installation_
    _help to run site with single js file_
    \_node webpack.config.json # this is to run the webpack configuration file

    - webpack requires webpack.config.js mentioning minium entry-point and output location
    - npm install webpack-dev-server --save #combine build and watch feature in webpack

    ```
    const path=require('path');
    module.exports={
        entry:'./src/app.js',
        output:{
            path:path.join(__dirname,'public'),
            filename:'bundle.js'
        },
    module:{
      rules:[{
          loader:'babel-loader',
          test:/\.js$/,
          exclude:/node_modules/
      }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback:true // mentioning default to index.html as routes handled at client
    }
    }

    # as for babel we are using two pre-sets env & react for webback we need to use file .babelrc to pass command line arguments in json format
    .babelrc content
    {
        presets:["evn","react"]
    }
    ```

    - webpack --watch, webpack
    - webpack maintain local scope for each import to maintain name conflict. Two type of exports are there name exports and default exports

    ```
    //source .js file
    #named export
    const square=(x)=>x*x;
    const add=(x,y)=>a+b
    export {square,add} OR
    export const cube =(x)=>{x**3}

    #default export
    export default (a,b)=>a-b #inline
    OR
    export {subtract as default}
    OR
    const subtract=(a,b)=>a-b
    export default subtract

    //destination file
    import {square} from source.js

    #importing default export
    import subtracttwoNumber,{square, add} from source.js
    OR
    import subtract,{square, add} from source.js
    ```

    - loader: webpack need babel loader for JSX conversion (babel-core, babel-loader)

    - devtool : example cheap-module-eval-source-map to make debugging easier

- Redux : as we are using the state which serve a purpose for small applications but they are not scalable as we need to make some decisions like

  - Whcih component to maintain state
  - passing state around the components for interaction (move from Parent to composition based approach)
  - tightly coupled components with state, Redux eliminates that

  - **Redux Setup**

    - npm install redux --save
    - import {createStore, combineReducers} from 'redux'
    - comparision
      _Redux_

      ```
      // first parameter is current state
      const store=createStore((state={count:0},action)=>{
          switch(action.type){
              case 'INCREMENT':
              return{
                  count:state.count+1 // OR
                  count: state.count+action.incrementBy
              }
              default:
              return state;
          }

      });
      ```

      _State_

      ```
      this.state={
          count:0
      }
      ```

    - store.getState();//returns the current state from Redux store
    - store.subscribe(()=>{
      console.log("I will be called anytime the redux state changes")
      })

    - Dispatching actions

    ```
    #Action generator
    const increment=({incrementBy=0}={})=>{
       type:'INCREMENT',
       incrementBy
    }
    store.dispatch(increment(4))
    ```

    - Reducers: Reducers are pure function (the output is determine by input), never change state or action passed to reducer(immutable)

    ```
    const expenseReducer=(state={count:0},action)=>{
        switch(action.type){
            case "INCREMENT":
                return{
                    count:state.count+action.incrementBy
                }
            default:
                return state;
        }
    }
    const filterReducerDefaultState={
        text:'',
        sortBy:'date',
        startDate:0,
        endDate:0
    }
    const filterReducer=(state=filterReducerDefaultState,action)=>{
        switch(action.type){
            case "INCREMENT":
                return{
                    count:state.count+action.incrementBy
                }
            default:
                return state;
        }
    }

    const reducers=combineReducer({
        expenses:expenseReducer,
        filters:filterReducer
    });
    const store=createStore(reducers)
    ```

    - ES6 Spread Operators in Redux

      - Array spread
        ```
        names=["Alice","Mice","Joyce"]
        [...names,"Royce"] #will result in new array with "Royce"
        ["Royce",...names] #will result in new array with "Royce" at 1st place
        ```
      - Object spread
        `person={name:"Alice",age:34,city:"Paris"} {...person,name:"Joyce"} # will update name and return a new object {...person,lname:"Wonderland"} # will add a new property to object`
        -React redux library: npm install react-redux --save

        ```
        import {Provider} from 'react-redux'
            const jsx=(
                <Provider store={store}>
                <AppRouter />
                </Provider>
            )

        import {connect} from 'react-redux';
        const HOC=connect((state)=>{
            return{
                name:'Andrew'
            }
        })(ExpenseList);
        ```
