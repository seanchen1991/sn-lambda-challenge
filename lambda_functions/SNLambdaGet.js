var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

exports.handler = function(event, context) {
    var payload = {
        TableName: 'SN-Lambda-Table',
        Key: {
            Key: event.params.key
        }
    };

    dynamo.getItem(payload, function(err, data) {
        if (err) {
            context.succeed({
                "success": "false",
                "key": event.params.key,
                "failureReason": err.message
            });
            context.done();
        } else if (Object.keys(data).length === 0) {
            context.succeed({
                "success": "false",
                "key": event.params.key,
                "failureReason": "Key not found"
            });
        } else {
            context.succeed({
                "success": "true",
                "key": event.params.key,
                "value": data.Item
            });
            context.done();
        }
    });
};
