import React, { Component } from 'react'

// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {

   render() {
      return (
         <div>
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
					
               <h1>My Element...</h1>
            </ReactCSSTransitionGroup>
         </div>      
      );
   }
}

export default App;
// import { connect } from 'react-redux'
// import { addTodo } from './actions/actions'

// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'

// class App extends Component {
//   render() {
//     const { dispatch, visibleTodos } = this.props

//     return (
//       <div>

//         <AddTodo
//           onAddClick = {text =>
//             dispatch(addTodo(text)) }
//           />

//         <TodoList todos = {visibleTodos}/>

//       </div>
//     )
//   }
// }

// function select(state) {
//   return {
//     visibleTodos: state.todos
//   }
// }

// export default connect(select)(App)