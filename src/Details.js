import React, { Component } from 'react'
import logo from './logo.svg';
import {NavBar} from "./ui-components";
import './App.css';
import { StreamingDetails } from './ui-components';
import { EditCards } from './ui-components';
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

            <h1>Streaming Details</h1>
              <NavBar/>
              <p>
                <EditCards/>
              </p>
          </div>
          </AmplifyProvider>
        );
        
      }
      
}
  

export default Streams