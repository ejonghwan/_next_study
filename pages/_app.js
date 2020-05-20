import React from 'react';
import DefaultView from '../Component/DefaultView';

import withRedux from 'next-redux-wrapper'
import { createStore, compose, applyMiddleware } from 'redux'
import reducer, { initialState } from '../reducers/user';


const App = ({ Component, store }) => {
    return (
        <div>
            <DefaultView store={store}>
                <Component />
            </DefaultView>
        </div>
    );
};

export default widthRedux( (initialState, options) => {
    const Middleware = []
    const store = createStore(reducer, initialState);
    


} )(App);