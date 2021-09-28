import { useState } from 'react';
import {
  ProductInterface,
  TabOption,
} from '@atlascode/coffee-front-components';

export interface UseProductPlansTabsInterface {
  tabs: TabOption[];
  isCurrentPlan: (id: number) => boolean;
  userPlan: number;
}

export const useProductPlansTabs = (
  product?: ProductInterface
): UseProductPlansTabsInterface => {
  const [userPlan, setUserPlan] = useState<number>(1);
  const isCurrentPlan = (id: number): boolean => id === userPlan;

  return {
    isCurrentPlan,
    userPlan,
    tabs:
      product && product.plans.length > 0
        ? product.plans.map(
            (plan) =>
              ({
                id: plan.id,
                content: plan.name,
                active: isCurrentPlan(plan.id),
                handleClick: () => setUserPlan(plan.id),
              } as TabOption)
          )
        : [],
  };
};

export default useProductPlansTabs;
