var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

 exports.handler = function(event, context) {
     var payload = {
         TableName: 'SN-Lambda-Table',
         Item: event
     };

     dynamo.putItem(payload, function(err, data) {
         if (err) {
             context.succeed({
                 "success": "false",
                 "failureReason": err.message
             });
             context.done();
         } else {
             context.succeed({
                 "success": "true"
             });
             context.done();
         }
     });
 };
