import { SubscriptionRepository } from "../repository/SubscriptionRepository";
import { Subscription } from "../types/Subscription";
import { QueryOptions } from "../types/QueryOptions";

export class SubscriptionService {
  private repository;

  // options pour la requête de souscriptions
  private options: QueryOptions = {
    select: "",
    limit: 10,
    sort: { contract_reference: -1 },
    where: [
      { current_status: "processing" },
      { start_date: { $gte: Date.parse("30 Dec 2018") } },
      { "SubscriptionType.name": "MAJ" },
    ],
  };

  // injection du repository dans le service.
  constructor(repository: SubscriptionRepository) {
    this.repository = repository;
  }

  // envoie la requête au repository et retourne le résultat formatté
  async subscriptionContrats() {
    const subscriptions = await this.repository.find(this.options);
    return subscriptions.map((subscription: Subscription) => {
      return {
        _id: subscription._id,
        contract_reference: subscription.contract_reference,
      };
    });
  }
}
