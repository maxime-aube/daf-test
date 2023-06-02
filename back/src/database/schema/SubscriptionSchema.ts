import { Schema, Types } from "mongoose";

export class SubscriptionSchema {
  public static schemaName = "subscription";

  static create(): Schema {
    return new Schema({
      Company: Types.ObjectId,
      Tool: Types.ObjectId,
      ToolModel: Types.ObjectId,
      ToolCategory: Types.ObjectId,
      SubscriptionModel: Types.ObjectId,
      SubscriptionType: {
        id: Types.ObjectId,
        name: String,
      },
      contract_reference: String,
      duration: Number,
      start_date: Date,
      active: Boolean,
      payment_method: String,
      denounced: Boolean,
      canceled: Boolean,
      renewable: Boolean,
      current_status: String,
      ended_on: Date,
    });
  }
}
