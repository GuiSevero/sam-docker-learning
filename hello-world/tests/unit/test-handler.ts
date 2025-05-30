import { httpHandler } from '../../app';
import { expect } from 'chai';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const event = {} as APIGatewayProxyEvent;
        const context = {} as Context;
        
        const result = await httpHandler(event, context);

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        const response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("hello world");
    });
}); 
