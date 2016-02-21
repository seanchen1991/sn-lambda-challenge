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
