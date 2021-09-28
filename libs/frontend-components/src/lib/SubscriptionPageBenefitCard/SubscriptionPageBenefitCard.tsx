import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Typography,
} from '@material-ui/core';
import { CoffeeBagSVG } from '@atlascode/coffee-frontend-svg';

/* eslint-disable-next-line */
export interface SubscriptionPageBenefitCardProps extends BoxProps {
  icon?: React.FC<unknown>;
  caption?: string;
  ButtonProps?: ButtonProps;
}

export function SubscriptionPageBenefitCard({
  sx,
  caption = '60 capsulas de cafés selecionados.',
  icon = CoffeeBagSVG,
  ButtonProps = buttonDefaultProps,
  ...rest
}: SubscriptionPageBenefitCardProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.icon} component={icon} />
        <Typography variant="caption" sx={styles.caption}>
          {caption}
        </Typography>
        <Button {...ButtonProps} sx={styles.button}>
          Saiba mais
        </Button>
      </Box>
    </Box>
  );
}

export default SubscriptionPageBenefitCard;

const buttonDefaultProps: SubscriptionPageBenefitCardProps['ButtonProps'] = {
  variant: 'text',
  size: 'small',
};

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    borderRadius: '16px',
    bgColor: '#fff',
    width: { xs: '18em' },
    height: { xs: '21em' },
    boxShadow: (theme) => theme.shadows[3],
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-around',
    p: { xs: '1.25em 0.75em' },
    textAlign: 'center',
  },
  icon: {
    maxHeight: { xs: '5.7em' },
    width: 'auto',
  },
  caption: {
    fontSize: { xs: '1.4em' },
    lineHeight: { xs: '1.45em' },
    fontWeight: 500,
    color: '#333',
    maxWidth: { xs: '18ch' },
  },
  button: {
    color: (theme) => theme.palette.grey[600],
    fontSize: { xs: '1.4em' },
    borderRadius: { xs: '0.4em' },
    fontWeight: 700,
    padding: { xs: 0, md: 0, lg: 0 },
  },
});
