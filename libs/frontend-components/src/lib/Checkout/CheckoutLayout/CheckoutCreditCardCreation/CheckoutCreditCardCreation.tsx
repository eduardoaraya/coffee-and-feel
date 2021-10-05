import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, TextField, TextFieldProps } from '@material-ui/core';
import {
  CreditCardView,
  CreditCardViewProps,
} from '../../../CreditCard/CreditCardView/CreditCardView';

/* eslint-disable-next-line */
export interface CheckoutCreditCardCreationProps extends BoxProps {}

export function CheckoutCreditCardCreation(
  props: CheckoutCreditCardCreationProps
) {
  return (
    <div>
      <CreditCardView />
    </div>
  );
}

export default CheckoutCreditCardCreation;

const styles = AtlasStylesheet.create({
  root: {},
});
