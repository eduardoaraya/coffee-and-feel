export interface PlanInterface {
  id: number;
  title: string;
  content: string[];
  subtitle: string;
  priceText: string;
  priceInfo?: string;
}

export interface SubscriptionClubDetails {
  plans?: PlanInterface[];
}
