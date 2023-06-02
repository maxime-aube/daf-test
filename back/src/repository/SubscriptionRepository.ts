import { Repository } from "./Repository";
import { Mongoose } from "mongoose";
import { SubscriptionSchema } from "../database/schema/SubscriptionSchema";
import { QueryOptions } from "../types/QueryOptions";

export class SubscriptionRepository extends Repository {
  constructor(database: Mongoose) {
    super(database, database.model(SubscriptionSchema.schemaName));
  }

  // envoie la requête à la base de données mongodb avec les options de requête et retourne le tableau de subscriptions
  async find(options: QueryOptions): Promise<any> {
    const res = await this.model
      .find(
        options.where.reduce((result, obj) => {
          return { ...result, ...obj };
        }, {})
      )
      .sort(options.sort)
      .limit(options.limit);

    return res;
  }
}
