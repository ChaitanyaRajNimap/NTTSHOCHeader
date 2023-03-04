import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HOCComponent(WrappedComponent, headerTitle) {
  return function HeaderedComponent(props) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{headerTitle}</Text>
        </View>
        <WrappedComponent {...props} />
      </View>
    );
  };
}

function MyComponent(props) {
  return (
    <View style={styles.content}>
      <Text style={styles.heading}>My Component</Text>
      <Text style={styles.heading}>{props.message}</Text>
    </View>
  );
}

const HeaderedMyComponent = HOCComponent(MyComponent, 'My Component Header');

export default function App() {
  return <HeaderedMyComponent message="This message is passed as a prop." />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
