import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import AppWrapper from './AppWrapper';
import reportWebVitals from './reportWebVitals';
import Keycloak from 'keycloak-js';
const _kc = new Keycloak('/keycloak.json');

const keycloakConfig = {
  realm: "gocorp",
  url: "https://goauth.gerardoortiz.com/auth/",
  required: "none",
  clientId: "sap",
  credentials: {
    secret: "aae9b6eb-6cf7-4700-b27e-d1e1fdb6c092"
  } ,
  port : 0
};

const initKeycloak = () => {
    const keycloak = new Keycloak(keycloakConfig);
    return new Promise((resolve, reject) => {
      keycloak.init({ onLoad: 'login-required' })
        .then((authenticated) => {
          if (authenticated) {
            resolve(keycloak);
          } else {
            reject(new Error('User not authenticated'));
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
  initKeycloak()
    .then((keycloak) => {
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
        <React.StrictMode>
          <HashRouter>
            <AppWrapper />
          </HashRouter>
        </React.StrictMode>
      );
      
      reportWebVitals();
    })
    .catch((error) => {
      console.error('Error initializing Keycloak:', error);
      
    });