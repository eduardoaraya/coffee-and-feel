import { Box } from '@material-ui/core';
import { PlanInterface } from './Contracts/SubscriptionClubDetailsInterface';
import { SubscriptionDetailCard } from './SubscriptionDetailCard';

export interface SubscriptionDetailListProps {
  plans: PlanInterface[];
}

export const SubscriptionDetailList: React.FC<SubscriptionDetailListProps> = ({
  plans,
}): JSX.Element => {
  return (
    <Box className="subscription-details-wrapper">
      {plans?.map((plan) => (
        <SubscriptionDetailCard plan={plan} />
      ))}
    </Box>
  );
};

export default SubscriptionDetailList;
