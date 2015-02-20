<h3>An angular js IOS style admin app.</h3>

Uses several charing libraries including : 

Chartjs<br/>
Flotcharts<br/>
morris charts<br/>

It is built using bootstrap with several custom features.

Also included are grunt configurations and bower dependencies for development testing and production deployment.

<h4>Install using grunt : </h4>

1 ) Install node js (http://nodejs.org/download/)

2 ) In the application root folder run : npm install

This will install all grunt dependencies so that tasks can be run

3 ) Run bower install

This will install all project dependencies like angular, bootstrap etc.

4 ) Run :

grunt dev - For development
grunt test - For testing purposes
grunt minified - For production

All files will be concatenated in the dist/app.js file

Website will be deployed on http://localhost:8080 (path can be configured in the Gruntfile.js)



