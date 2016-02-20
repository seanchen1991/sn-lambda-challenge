var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();

/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */

 exports.context = function(event, context) {
     var operation = event.operation;

     if (event.tableName) {
         event.payload.TableName = event.tableName;
     }

     switch (operation) {
         case 'create':
            dynamo.putItem(event.payload, function(err, data) {
                if (err) {
                    context.succeed({
                        "success": "false",
                        "failureReason": err.message
                    });
                    context.done();
                } else {
                    context.succeed({
                        "success": "true",
                        "value": event.payload.Item
                    });
                    context.done();
                }
            });
            break;
        case 'delete':
            dynamo.deleteItem(event.payload, function(err, data) {
                if (err) {
                    context.succeed({
                        "success": "false",
                        "failureReason": err.message
                    });
                    context.done();
                } else {
                    context.succeed({
                        "success": "true",
                        "value": event.payload.Key
                    });
                    context.done();
                }
            });
            break;
        case 'echo':
            context.succeed(event.payload);
            break;
        case 'ping':
            context.succeed('pong');
            break;
        default:
            context.fail(new Error('Unrecognized POST operation: ', operation));
     }
 };
