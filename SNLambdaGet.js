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
         case 'fetch':
            dynamo.getItem(event.payload, function(err, data) {
                if (err) {
                    context.succeed({
                        "success": "false",
                        "failureReason": err.message
                    });
                    context.done();
                } else if (Object.keys(data).length === 0) {
                    context.succeed({
                        "success": "false",
                        "failureReason": "Key not found"
                    });
                } else {
                    context.succeed({
                        "success": "true",
                        "value": data
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
            context.fail(new Error('Unrecognized GET operation: ', operation));
     }
 };
