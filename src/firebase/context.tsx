import React, { createContext } from 'react';

const firebaseContext = createContext<any>(null);
const { Consumer } = firebaseContext;

// tslint:disable-next-line: variable-name
export const withFirebase = (Component: any) => (props: any) => (
  <Consumer>{firebase => <Component {...props} firebase={firebase} />}</Consumer>
);

export default firebaseContext;
