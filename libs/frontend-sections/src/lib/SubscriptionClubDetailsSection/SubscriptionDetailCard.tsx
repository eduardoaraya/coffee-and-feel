import { Button, Typography } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { PlanInterface } from './Contracts/SubscriptionClubDetailsInterface';

export interface SubscriptionDetailCardProps {
  plan: PlanInterface;
}

export const SubscriptionDetailCard: React.FC<SubscriptionDetailCardProps> = ({
  plan,
}): JSX.Element => {
  return (
    <div className="subscription-box-detail" key={plan.id}>
      <div className="title-box">
        <Typography variant="h3">{plan.title}</Typography>
        <Typography>{plan.subtitle}</Typography>
      </div>
      <ul className="check-list">
        {plan.content.map((item, key) => (
          <li key={key}>
            <Check />
            <Typography>{item}</Typography>
          </li>
        ))}
      </ul>
      <div className="price-area">
        <Typography className="price-total">{plan.priceText}</Typography>
        {plan.priceInfo ?? (
          <Typography variant="body1" className="price-info">
            {plan.priceInfo}
          </Typography>
        )}
      </div>
      <Button>Saiba mais</Button>
    </div>
  );
};

export default SubscriptionDetailCard;
