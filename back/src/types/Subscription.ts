export type Subscription = {
  _id: string;
  Company: string;
  Tool: string;
  ToolModel: string;
  ToolCategory: string;
  SubscriptionModel: string;
  SubscriptionType: {
    id?: string;
    name: string;
  };
  contract_reference: string;
  duration: number;
  start_date: Date;
  active: boolean;
  payment_method: string;
  denounced: boolean;
  canceled: boolean;
  renewable: boolean;
  current_status: string;
  ended_on: Date;
};
