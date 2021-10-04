import { Box, BoxProps, Typography } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  SubscriptionAttributeCardProps,
  SubscriptionAttributeCard,
} from '../SubscriptionAttributeCard/SubscriptionAttributeCard';
import {
  PaginationDots,
  PaginationDotsProps,
} from '../PaginationDots/PaginationDots';

/* eslint-disable-next-line */
export interface SubscriptionItemProps extends BoxProps, PaginationDotsProps {
  attributes: SubscriptionAttributeCardProps[];
  title: string;
  description: string;
  src: string;
  alt: string;
}

export function SubscriptionItem({
  sx,
  attributes = [],
  title,
  description,
  src,
  alt,
  amount,
  activeIndex,
  ...rest
}: SubscriptionItemProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <Box sx={styles.container}>
        <Box sx={styles.photoContainer}>
          <Box sx={styles.circle}>
            <Box src={src} alt={alt} component="img" sx={styles.photo} />
          </Box>
        </Box>

        <Box sx={styles.infoContainer}>
          <PaginationDots
            sx={styles.pagination}
            amount={amount}
            activeIndex={activeIndex}
          />
          <Typography sx={styles.title}>{title}</Typography>
          <Typography sx={styles.description}>{description}</Typography>

          <Box sx={styles.attributesContainer}>
            {attributes.map((attributesProps, index) => {
              return (
                <SubscriptionAttributeCard {...attributesProps} key={index} />
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SubscriptionItem;

const styles = AtlasStylesheet.create({
  root: {
    fontSize: '10px',
    width: '100%',
    height: '100%',
    bgcolor: '#323232',
    borderRadius: '22px',
  },
  title: {
    fontSize: { xs: '2em' },
    fontWeight: 700,
    color: '#fff',
    textAlign: { xs: 'center', lg: 'start' },
  },
  description: {
    color: '#fff',
    fontSize: { xs: '1.4em' },
    maxWidth: { xs: '35ch', lg: '50ch' },
  },
  attribute: {},

  photo: {
    width: '100%',
    height: '90%',
    objectFit: 'contain',
  },

  circle: {
    width: { xs: '18.4em', lg: '38.2em' },
    height: { xs: '18.4em', lg: '38.2em' },
    bgcolor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },

  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: { xs: 'column', lg: 'row' },
    alignItems: { xs: 'center' },
    justifyContent: { xs: 'center' },
    rowGap: { xs: '3em' },
    columnGap: { xs: '7em' },
  },
  photoContainer: {
    display: 'flex',
    justifyContent: { xs: 'center', lg: 'unset' },
  },
  infoContainer: {
    color: '#fff',
    rowGap: { xs: '3em', lg: '4em' },
    display: 'flex',
    flexDirection: 'column',
    textAlign: { xs: 'center', lg: 'start' },
  },
  pagination: {
    gap: { xs: '2.75em' },
    justifyContent: { xs: 'center', lg: 'flex-start' },
  },
  attributesContainer: {
    display: { xs: 'none', lg: 'flex' },
    gap: { xs: '2em' },
  },
});
