export interface CreditCardInterface {
  id: string;
  foursLastNumbers: string;
  fullname: string;
}

export interface CreditCardFormInterface extends CreditCardInterface {
  cardNumber: string;
  validity: string;
  securityCode: string;
}
