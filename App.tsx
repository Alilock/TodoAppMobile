import { Alert, Modal, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Provider } from 'react-redux';
import { store } from './features/store';
import TodoApp from './pages/TodoApp';
const App = () => {

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>

  )
}

export default App

