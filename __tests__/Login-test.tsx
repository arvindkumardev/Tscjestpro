/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import App from '../App';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 import Login from '../src/Login';
 import Post from '../src/Post';
 
 // it('renders correctly', () => {
 //   renderer.create(<App />);
 // });
 
 test('test render snapshot', () => {
   const snapshot = renderer.create(<Login />).toJSON();
   console.log("testing",snapshot);
   expect(snapshot).toMatchSnapshot();
 })
 