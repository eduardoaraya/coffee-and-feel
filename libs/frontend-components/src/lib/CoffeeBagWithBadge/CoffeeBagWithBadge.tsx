import { CoffeeBagSVG } from '@atlascode/coffee-frontend-svg';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import {
  Box,
  BoxProps,
  IconButton,
  Badge,
  IconButtonProps,
  BadgeProps,
  SvgIconProps,
} from '@material-ui/core';

/* eslint-disable-next-line */
export interface CoffeBagWithBadgeProps extends IconButtonProps {
  BadgeProps?: BadgeProps;
  IconProps?: SvgIconProps;
}

export function CoffeeBagWithBadge({
  sx,
  BadgeProps,
  IconProps,
  ...rest
}: CoffeBagWithBadgeProps) {
  const {
    badgeContent,
    anchorOrigin = { horizontal: 'right', vertical: 'bottom' },
    color = 'primary',
    sx: badgeSx = styles.badge,
    ...badgeRest
  } = { ...BadgeProps };

  return (
    <IconButton sx={{ ...styles.root, ...sx }} {...rest}>
      <Badge
        sx={badgeSx}
        badgeContent={badgeContent}
        anchorOrigin={anchorOrigin}
        color={color}
        {...badgeRest}
      >
        <CoffeeBagSVG {...IconProps} />
      </Badge>
    </IconButton>
  );
}

export default CoffeeBagWithBadge;

const styles = AtlasStylesheet.create({
  root: {
    position: 'relative',
    fontSize: '10px',
    padding: '13px',
  },

  badge: {
    '.MuiBadge-badge': {
      fontSize: { xs: '1.25em' },
    },
  },
});
