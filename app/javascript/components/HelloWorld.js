/**
 * App.js
 */

import React from 'react';
import ApolloClient from "apollo-boost";
import { Query, withApollo } from "react-apollo";
import { ApolloProvider } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
const url = window.location.origin + '/graphql'

const client = new ApolloClient({
  ssrMode: true,
  uri: url,
});

const abc = gql`
      {
        testField
      }
    `

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
    <React.Fragment>
      <ApolloProvider client={client} >
        <Query query={abc}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading'
          if (error) return `Error! ${error.message}`;
            return (
              data.testField
            )
          }
        }
        </Query>
      </ApolloProvider>
    </React.Fragment>
    );
  }
}

export default HelloWorld;
