/*
  Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License.
  A copy of the License is located at http://aws.amazon.com/apache2.0/ or in the "license" file accompanying this file.
  This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_CREDENTIALSTABLE_ARN
	STORAGE_CREDENTIALSTABLE_NAME
	STORAGE_CREDENTIALSTABLE_STREAMARN
Amplify Params - DO NOT EDIT */

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// Declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// List all data from the related datatable at the path `/credentials`
app.get('/credentials', function(req, res) {
  // Add your code here to fetch data from the datatable
  // Assuming you are using AWS SDK to interact with the database
  const AWS = require('aws-sdk');
  const ddb = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: process.env.STORAGE_CREDENTIALSTABLE_NAME, // Get the table name from environment variable
  };

  ddb.scan(params, function(err, data) {
    if (err) {
      console.error('Error retrieving data:', err);
      res.status(500).json({ error: 'Error retrieving data' });
    } else {
      console.log('Data retrieved successfully:', data);
      res.json(data.Items); // Return the items from the table as the response
    }
  });
});

// Start the app server
app.listen(3000, function() {
  console.log('App started');
});

// Export the app object. When executing the application locally, this does nothing.
// However, to port it to AWS Lambda, we will create a wrapper around that will load the app from this file
module.exports = app;
