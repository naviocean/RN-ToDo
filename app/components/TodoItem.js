
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { deleteTodo } from '../actions';

class TodoItem extends Component {
  deleteSelf() {
    this.props.dispatch(deleteTodo(this.props.id))
  }
  render() {
    return(
      <TouchableOpacity onPress={ this.deleteSelf.bind(this) }>
        <View style={ styles.todoContainer }>
          <Text style={ styles.todoText }>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>

    )
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {

  }
});

export default connect()(TodoItem)
