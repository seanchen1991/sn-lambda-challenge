# sn-lambda-challenge
AWS Lambda challenge for Social Native.

The specification for this challenge can be found [here](https://gist.github.com/aaron9000/991ad9d44e52a9a10326).

Example POST Request:
```
curl -H "Content-Type: application/json" -X POST -d "{\"Key\":\"foo\", \"name\":\"Sean\"}" https://omf1ko8ytd.execute-api.us-west-2.amazonaws.com/prod/operations/upsert
```

Example GET Request:
```
curl -X GET https://omf1ko8ytd.execute-api.us-west-2.amazonaws.com/prod/operations/fetch/{somekey}
```

To run the deploy script:

1. Ensure that it has the proper permissions to execute by running `chmod +x scripts/deploy.sh`.

2. The script requires two arguments, the first one being the execution role ARN for the IAM role you wish the Lambda functions to utilize. The second argument is the API ID of the API you wish to deploy.

Execute the script from the project's root directory by running `scripts/deploy.sh [execution-role-arn] [rest-api-id]`.
