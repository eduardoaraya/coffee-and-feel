import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Typography,
} from '@material-ui/core';
import { Check } from '@material-ui/icons';

/* eslint-disable-next-line */
export interface SubscriptionBenefitsListCardProps extends BoxProps {
  benefits: string[];
  title: string;
  caption: string;
  price: string;
  additionalInfo?: string;
  ButtonProps?: ButtonProps;
}

export function SubscriptionBenefitsListCard({
  sx,
  benefits = [],
  title,
  caption,
  additionalInfo,
  price,
  ButtonProps,
  ...rest
}: SubscriptionBenefitsListCardProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.header}>
          <Typography sx={styles.title}>{title}</Typography>
          <Typography sx={styles.caption}>{caption}</Typography>
        </Box>

        <Box sx={styles.benefitsContainer}>
          {benefits.map((benefitValue, index) => {
            return (
              <Box key={index} sx={styles.benefitWrapper}>
                <Check sx={styles.benefitIcon} />
                <Typography sx={styles.benefitLabel}>{benefitValue}</Typography>
              </Box>
            );
          })}
        </Box>

        <Box sx={styles.pricingContainer}>
          <Typography sx={styles.price}>{price}</Typography>
          <Typography sx={styles.additionalInfo}>{additionalInfo}</Typography>
        </Box>

        <Box sx={styles.buttonContainer}>
          <Button {...ButtonProps} variant="contained" color="primary">
            Quero assinar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SubscriptionBenefitsListCard;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: 'max-content',
    height: { xs: 'auto' },
    borderRadius: '17px',
    boxShadow: (theme) => theme.shadows[5],
    p: { xs: '2.5em 3em' },
    minWidth: { xs: '30em', lg: '37.5em' },
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '0.5em' },
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: { xs: '3em' },
  },

  title: {
    fontSize: { xs: '2em', lg: '3em' },
    fontWeight: 700,
    color: '#323232',
  },
  caption: {
    fontSize: { xs: '1.4em' },
    color: (theme) => theme.palette.grey[500],
  },

  benefitsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: '0.75rem' },
  },
  benefitWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: { xs: '1em' },
  },
  benefitIcon: {
    fill: (theme) => theme.palette.success.main,
    fontSize: { xs: '2.5em' },
  },
  benefitLabel: {
    fontSize: { xs: '1.4em' },
    fontWeight: 500,
    color: (theme) => theme.palette.grey[500],
  },

  pricingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: { xs: '2.15em' },
    color: '#323232',
    fontWeight: 700,
  },
  additionalInfo: {
    fontSize: { xs: '1.35em' },
    color: '#323232',
  },

  button: {},

  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
});
