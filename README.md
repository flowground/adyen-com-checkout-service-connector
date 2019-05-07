# ![LOGO](logo.png) Adyen Checkout Service MSP Connector

## Description

A generated MSP connector for the Adyen Checkout Service API (version 32).

Generated from: https://api.apis.guru/v2/specs/adyen.com/CheckoutService/32/openapi.json<br/>
Generated at: 2019-05-07T11:15:12+03:00

## API Description

A web service to initiate and authorise payments with Adyen Checkout. You can use the same integration for payments made with cards (including One-Click and 3D Secure), mobile wallets, and local payment methods (e.g. iDEAL and Sofort). For more information, refer to [Checkout documentation](https://docs.adyen.com/developers/checkout).

## Authorization

This API does not require authorization.

## Actions

### Creates a payment setup

> Provides the data object that can be used to start the Checkout SDK. For the initial payment setup, pass the payment amount, currency, and other information that can be used by Adyen to optimize the payment flow and perform better risk assessment of the transaction.<br/>
> <br/>
> For more information, refer to [Set up a payment](https://docs.adyen.com/developers/checkout/implement-your-server-checkout/set-up-a-payment-checkout).

### Verifies payment result

> Verifies the payment result using the payload returned from the SDK.<br/>
> <br/>
> For more information, refer to [Verify a payment](https://docs.adyen.com/developers/checkout/implement-your-server-checkout/verify-a-payment-checkout).

## License

flowground :- Telekom iPaaS / adyen-com-checkout-service-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
