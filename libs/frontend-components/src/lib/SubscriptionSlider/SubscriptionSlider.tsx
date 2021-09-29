import { Box, BoxProps } from '@material-ui/core';
import { AtlasStylesheet } from '@atlascode/coffee-shared-helpers';
import { CarbonSlider } from '../CarbonSlider/CarbonSlider';
import {
  SubscriptionItemProps,
  SubscriptionItem,
} from '../SubscriptionItem/SubscriptionItem';

/* eslint-disable-next-line */
export interface SubscriptionSliderProps extends BoxProps {
  items: SubscriptionItemProps[];
  uniqueID: string;
}

export function SubscriptionSlider({
  sx,
  items = [],
  uniqueID,
  ...rest
}: SubscriptionSliderProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }} {...rest}>
      <CarbonSlider
        uniqueID={uniqueID}
        list={items.map((value, index) => {
          return { ...value, activeIndex: index, amount: items.length };
        })}
        component={SubscriptionItem}
      />
    </Box>
  );
}

export default SubscriptionSlider;

const styles = AtlasStylesheet.create({
  root: {},
});
