/**
 * App.js
 */

import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
const url = window.location.origin + '/graphql'

const client = new ApolloClient({
  uri: url,
});

const abc = () => {
  client
  .query({
    query: gql`
      {
        testField
      }
    `
  })
  .then(result => console.log(result));
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    abc()
    return (
    <React.Fragment>
      <ApolloProvider client={client} >
        I am a working
      </ApolloProvider>
    </React.Fragment>
    );
  }
}

export default App;
