import { APIGatewayProxyEvent, APIGatewayProxyResult, Context, EventBridgeEvent } from 'aws-lambda';

/**
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 */

export const eventBridgeHandler = async (
  event: EventBridgeEvent<"solidcore.cron.1minute", {}>,
  _context: Context
): Promise<void> => {
  console.log({ event_type: "event.received", event });
  console.log("My New Feature - feat-1")

  if (event.source === 'solidcore.cron.1minute') {
    console.log('solidcore.cron.1minute');
  }

}; 


export const httpHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {

  console.log({ event_type: "httpHandler", event });

  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
      event,
      context,
    }),
  };

  return response;
};
