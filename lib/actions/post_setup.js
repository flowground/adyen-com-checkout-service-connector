/**
 * Auto-generated action file for "Adyen Checkout Service" API.
 *
 * Generated at: 2019-05-07T08:15:12.026Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / adyen-com-checkout-service-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/setup'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "currency": "currency",
    "value": "value",
    "additionalAmount": "additionalAmount",
    "additionalData": "additionalData",
    "amount": "amount",
    "bankAccountNumber": "bankAccountNumber",
    "bankCity": "bankCity",
    "bankLocationId": "bankLocationId",
    "bankName": "bankName",
    "bic": "bic",
    "countryCode": "countryCode",
    "iban": "iban",
    "ownerName": "ownerName",
    "taxId": "taxId",
    "bankAccount": "bankAccount",
    "city": "city",
    "country": "country",
    "houseNumberOrName": "houseNumberOrName",
    "postalCode": "postalCode",
    "stateOrProvince": "stateOrProvince",
    "street": "street",
    "billingAddress": "billingAddress",
    "acceptHeader": "acceptHeader",
    "userAgent": "userAgent",
    "browserInfo": "browserInfo",
    "captureDelayHours": "captureDelayHours",
    "cvc": "cvc",
    "expiryMonth": "expiryMonth",
    "expiryYear": "expiryYear",
    "holderName": "holderName",
    "issueNumber": "issueNumber",
    "number": "number",
    "startMonth": "startMonth",
    "startYear": "startYear",
    "card": "card",
    "channel": "channel",
    "addressEditable": "addressEditable",
    "enabled": "enabled",
    "avs": "avs",
    "cardHolderNameRequired": "cardHolderNameRequired",
    "installments": "installments",
    "configuration": "configuration",
    "dateOfBirth": "dateOfBirth",
    "account": "account",
    "accountType": "accountType",
    "baseAmount": "baseAmount",
    "basePoints": "basePoints",
    "buy": "buy",
    "interbank": "interbank",
    "reference": "reference",
    "sell": "sell",
    "signature": "signature",
    "source": "source",
    "type": "type",
    "validTill": "validTill",
    "dccQuote": "dccQuote",
    "deliveryAddress": "deliveryAddress",
    "deliveryDate": "deliveryDate",
    "deviceFingerprint": "deviceFingerprint",
    "enableOneClick": "enableOneClick",
    "enableRecurring": "enableRecurring",
    "entityType": "entityType",
    "fraudOffset": "fraudOffset",
    "html": "html",
    "mcc": "mcc",
    "merchantAccount": "merchantAccount",
    "merchantOrderReference": "merchantOrderReference",
    "metadata": "metadata",
    "authenticationResponse": "authenticationResponse",
    "cavv": "cavv",
    "cavvAlgorithm": "cavvAlgorithm",
    "directoryResponse": "directoryResponse",
    "eci": "eci",
    "xid": "xid",
    "mpiData": "mpiData",
    "nationality": "nationality",
    "orderReference": "orderReference",
    "origin": "origin",
    "contract": "contract",
    "recurringDetailName": "recurringDetailName",
    "tokenService": "tokenService",
    "recurring": "recurring",
    "recurringProcessingModel": "recurringProcessingModel",
    "returnUrl": "returnUrl",
    "selectedBrand": "selectedBrand",
    "selectedRecurringDetailReference": "selectedRecurringDetailReference",
    "sessionId": "sessionId",
    "sessionValidity": "sessionValidity",
    "shopperEmail": "shopperEmail",
    "shopperIP": "shopperIP",
    "shopperInteraction": "shopperInteraction",
    "shopperLocale": "shopperLocale",
    "firstName": "firstName",
    "gender": "gender",
    "infix": "infix",
    "lastName": "lastName",
    "shopperName": "shopperName",
    "shopperReference": "shopperReference",
    "shopperStatement": "shopperStatement",
    "socialSecurityNumber": "socialSecurityNumber",
    "store": "store",
    "telephoneNumber": "telephoneNumber",
    "token": "token",
    "totalsGroup": "totalsGroup",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/setup',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}