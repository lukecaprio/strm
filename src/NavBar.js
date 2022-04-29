import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { NavBarTest } from './ui-components';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

class Streams extends Component {
    render() {
        return (
          <AmplifyProvider>
          <div className="App">
      
              <p>
                <NavBarTest/>
              </p>
          </div>
          </AmplifyProvider>
        );
        
      }
      
}

  

export default Streams