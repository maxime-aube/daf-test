import { Model, Schema, Mongoose } from "mongoose";
import { QueryOptions } from "../types/QueryOptions";

export abstract class Repository {
  private database: Mongoose;
  protected model: Model<Schema>;

  constructor(database: Mongoose, model: Model<Schema>) {
    this.database = database;
    this.model = model;
  }

  abstract find(options: QueryOptions): Promise<any>;
}
