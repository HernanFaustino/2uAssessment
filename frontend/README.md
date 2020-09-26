# Fincite React Seed

This is a starter project for a React based frontend according to the Fincite standards. It includes the following:

* Webpack   
    * code splitting
    * minification

* Router
    * react-router-dom for navigation between components
* Module + File structure
* Development and Production builds
    * See usage on how to use each 
* Utilities
    * Backend requests, access and configuration of the store, sagas
* Redux
    * Best practice for state management
* Internationalization
    * react-intl for handling of multilanguage messages
* Form handling
    * Formik for form state management and Yup for validation
* Material UI
    * Material design based UI library
    * Can also be easily replaced by Bootstrap, for example
* JSS
    * Css-in-JS library that plays well with Material UI
* Sagas
    * redux-saga, asyncronous effect handling

Based on create-react-app and react-boilerplate

# Getting Started

## Requirements

Main requirements for this project are:

- node: >10.0.0
- npm: >5.8.0

## Usage
To use this seed as a base for your project

* Clone this repository

```
$ git clone git@bitbucket.org:fincite/seed-frontend-react.git
```

* Install dependencies

```
$ yarn install
```

* Test if all works well

  For standalone

  ```
  $ yarn start
  ```

  When integrated to backend (builds dev mode to disk)
 
  ```
  $ yarn watch
  ```
 
  Production build
  
  ```
  $ yarn build
  ```

* Update package.json to use your project name and version

* Push the codebase to your own repository

  ```
  $ git remote remove origin // removing the seed repo as your origin
  ```

  ```
  $ git remote add origin <your git url> 
  ```

  ```
  $ git add -A    // add all files 
  ```

  ```
  $ git commit -m "Initial push"    // commit them
  ```

  ```
  $ git push origin master    // push all to the master branch
  ```

## Builds
### Standalone
To run the frontend on it's own, use the following command

  ```
  $ yarn start
  ```
  
This starts a development server and builds the application in development mode (no obfuscation or minification).
This is not written to disk but done in memory to be very fast.

### Integrated to a backend in development
If you are using Django to serve the frontend, you need to run the build in "watch" mode.
This will use the development style of build (no obfuscation or minification) but writing 

To run in watch mode execute the script:
  ```
  $ yarn start
  ```
this will build the files to the `build` directory and rebuild the files each time a file its saved.

### In production mode

When deploying to production, build the application in production mode.
This does some major performance improvements as well as offuscating and minifying the build, for the fastest experience possible.

to build in production mode:
  ```
  $ yarn build
  ```
IMPORTANT: Some warnings in development mode, become errors in production so make sure to configure your CI / CD platform to test that the production build passes succesfully before merging.


# Contributing
If you have some ideas or improvements to this seed project, feel free to create pull requests or contact the memebers of the Unity team