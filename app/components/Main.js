/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { addTodo } from '../actions';

import TodoItem from './TodoItem';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      newToDoText: ""
    }
  }

  addNewToDo() {
    let { newToDoText } = this.state;
    if( newToDoText && newToDoText != '') {
      this.setState({
        newToDoText: ""
      });
      this.props.dispatch(addTodo(newToDoText));
    }
  }

  render() {
    let temporaryTodos = [
      {
        id: '12121',
        text: 'Hello'
      },
      {
        id: '12111',
        text: 'Welcome'
      }
    ]

    var renderTodos = () => {
      // return temporaryTodos.map((todo) => {
      return this.props.todos.map((todo) => {
        return(
          <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
        )
      });
    }

    return (
      <View style={ styles.container }>
        <StatusBar barStyle='light-content' />
        <View style={ styles.topBar }>
          <Text style={ styles.title }>
            To Do List
          </Text>
        </View>
        <View style={ styles.inputContainter }>
          <TextInput
            onChange={(event)=>{
              this.setState({
                newToDoText: event.nativeEvent.text
              });
            }}
            value={this.state.newToDoText}
            returnKeyType="done"
            placeholder="New To Do"
            onSubmitEditing={ this.addNewToDo.bind(this) }
            style={ styles.input }/>

        </View>
        <ScrollView automaticallyAjustContentInsets={false}>
            {renderTodos()}
        </ScrollView>
      </View>
    );
  }
}
// })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topBar: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  inputContainter: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: '#fff'

  }

});

const mapStateToProps = (state) => {
  return {
    todos:state.todos
  }
}


// module.exports = connect(mapStateToProps)(Main);
export default connect(mapStateToProps)(Main);
