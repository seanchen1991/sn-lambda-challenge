#!/bin/sh

# zip up SNLambdaGet and SNLambdaPost functions

zip -r SNLambdaGet.zip lambda_functions/SNLambdaGet.js
zip -r SNLambdaPost.zip lambda_functions/SNLambdaPost.js

# create each function using AWS CLI

aws lambda create-function \
--region us-west-2 \
--function-name SNLambdaGet \
--zip-file fileb://SNLambdaGet.zip \
--role $1 \
--handler SNLambdaGet.handler \
--runtime nodejs \
--profile adminuser

aws lambda create-function \
--region us-west-2 \
--function-name SNLambdaPost \
--zip-file fileb://SNLambdaPost.zip \
--role $1 \
--handler SNLambdaPost.handler \
--runtime nodejs \
--profile adminuser

# deploy the API

aws apigateway create-deployment \
--rest-api-id $2 \
--stage-name prod
