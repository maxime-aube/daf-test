import mongoose from "mongoose";
import { SubscriptionSchema } from "./schema/SubscriptionSchema";

// ajout du modèle mongoose pour les souscriptions
// pour plusieurs modèles, un système d'imports dynamiques serait indiqué
mongoose.model(SubscriptionSchema.schemaName, SubscriptionSchema.create());

export default mongoose;
