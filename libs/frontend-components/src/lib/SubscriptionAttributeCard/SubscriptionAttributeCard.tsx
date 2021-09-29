/* eslint-disable @typescript-eslint/no-empty-interface */
import { AtlasStylesheet, isNumeric } from '@atlascode/coffee-shared-helpers';
import { Box, BoxProps, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';

export interface SubscriptionAttributeCardProps extends BoxProps {
  title?: string;
  icon?: React.FC<unknown>;
  info?: string;
}

export const SubscriptionAttributeCard = ({
  sx,
  title = 'Placeholder title',
  icon: Icon = Star,
  info = 'This is the info',
  ...rest
}: SubscriptionAttributeCardProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.icon} component={Icon} />
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.info(isNumeric(info))}>{info}</Typography>
      </Box>
    </Box>
  );
};

export default SubscriptionAttributeCard;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: { xs: '10.2em' },
    height: { xs: '10.2em' },
    borderRadius: '10px',
    boxShadow: (theme) => theme.shadows[5],
    bgcolor: '#fff',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
  },

  icon: {
    fontSize: { xs: '3.5em' },
    color: '#323232',
  },

  title: {
    fontSize: { xs: '1em' },
    color: (theme) => theme.palette.primary.main,
    fontWeight: 700,
  },

  info: (numerical = false) => {
    return {
      fontSize: { xs: numerical ? '2em' : '1em' },
      fontWeight: { xs: numerical ? 800 : 500 },
      color: '#323232',
      maxWidth: { xs: '15ch' },
      textAlign: 'center',
    };
  },
});
