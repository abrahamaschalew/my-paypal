import * as React from 'react';
import { Component } from 'react';
import store from './store';


const Hi = (props: any) => {
    store.subscribe(() => console.log("From hi component ", store.getState()))
    return (<h1>Hello world</h1>)
}


export default Hi;