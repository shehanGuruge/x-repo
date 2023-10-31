/* eslint-disable jsx-a11y/accessible-emoji */
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import App from './App';
//import  { client } from '@x-repo/network';

export const ParentApp = () => {

  return (
    // <ApolloProvider client={client}>
       <App/>
    // </ApolloProvider>
  );
};

export default ParentApp;
