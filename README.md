# sn-lambda-challenge
AWS Lambda challenge for Social Native.

The specification for this challenge can be found [here](https://gist.github.com/aaron9000/991ad9d44e52a9a10326).

Example POST Request:
```
curl -H "Content-Type: application/json" -X POST -d "{\"operation\":\"create\",\"tableName\":\"SN-Lambda-Table\",\"payload\":{\"Item\":{\"Key\":\"foo\", \"name\":\"Sean\"}}}" https://omf1ko8ytd.execute-api.us-west-2.amazonaws.com/prod/dynamodboperations
```

Example GET Request:
```
curl -H "Content-Type: application/json" -X GET -d "{\"operation\":\"fetch\",\"tableName\":\"SN-Lambda-Table\",\"payload\":{\"Key\":{\"Key\":\"foo\"}}}" https://omf1ko8ytd.execute-api.us-west-2.amazonaws.com/prod/dynamodboperations
```
