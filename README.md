# vote-graph

## Overview

Web application that can manage questionnaires.

## Description
Implemented a front end so that the result is reflected in the graph at the same time as the answer by using the real-time update of Cloud Firestore.  
On the tabulation screen, the answer results are drawn in a graph.

## Demo
![hlcVkUPm1ei8GG93lYlL1641512213-1641512313](https://user-images.githubusercontent.com/46856574/148467653-f241d062-d1c7-4109-a088-8e9cd9703a1a.gif)

<!-- ## VS. -->

## Requirement
- "bootstrap-vue": "^2.21.2",
- "chart.js": "^2.8.0",
- "firebase": "^8.8.0",
- "vue": "^2.6.11",
- "vue-chartjs": "^3.4.2",
- "vue-router": "^3.5.2",
- "vuex": "^3.6.2"

## Usage
- Access the administrator registration screen
  ```
  http://localhost:8080/register
  ```
- Access the administrator login screen
  ```
  http://localhost:8080/login
  ```
- Access the questionnaire management screen
  ```
  http://localhost:8080/questions
  ```
- Access to questionnaire answer screen
  ```
  http://localhost:8080
  ```

## Install

You need to create a project in Firebase before installation.

1. Get source code

   ```
   git clone git@github.com:t-aono/vote-graph.git
   ```

2. Copy .env-example to create .env and set environment variables for your Firebase project.

   ```
   cp .env-example .env
   ```

3. Add package.

   ```
   yarn
   ```

4. Start local development environment.

   ```
   yarn run serve
   ```

<!-- ## Contribution -->

<!-- ## Licence -->

## Author

[t-aono](https://github.com/t-aono)

<!-- README.md Sample -->
<!-- https://deeeet.com/writing/2014/07/31/readme/ -->
