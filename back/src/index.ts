import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import mongoose from "./database/database";
import { Mongoose } from "mongoose";
import { SubscriptionRepository } from "./repository/SubscriptionRepository";
import { SubscriptionService } from "./service/SubscriptionService";

// chargement des variables d'environnemnt
dotenv.config();
const { env, hostname, port, db_hostname, db_port, db_name } = process.env;

// déclaration du serveur express avec CORS
const server = express();
server.use(cors());

let database: Mongoose;

// fonction asynchrone pour connectet mongoose à la base de données
async function connectDb() {
  database = await mongoose.connect(
    `mongodb://${db_hostname}:${db_port}/${db_name}`
  );
  console.log("connected to database");
}

connectDb()
  .then(async () => {
    /**
     * GET /subscriptions
     */
    server.get(
      "/subscriptions",
      (req: Request, res: Response, next: NextFunction) => {
        console.log(`request received on ${req.url}`);
        next();
      },
      async (req: Request, res: Response) => {
        const subscriptionService = new SubscriptionService(
          new SubscriptionRepository(database)
        );

        const result = await subscriptionService.subscriptionContrats();

        res.status(200).json({
          success: true,
          references: result,
        });
      }
    );

    /**
     * redirection des mauvaises URL vers /subscriptions.
     * solution alternative : 404 (code commenté)
     */
    server.use(
      "*",
      (req: Request, res: Response, next: NextFunction) => {
        console.log("wrong request received. redirecting to /subscriptions");
        next();
      },
      (req: Request, res: Response) => {
        res.redirect(`http://${hostname}:${port}/subscriptions`);
        // res.status(404).json({
        //   success: false,
        //   message: `There's nothing here. try GET http://${hostname}:${port}/subscriptions`,
        // });
      }
    );

    // démarrage du serveur express
    server.listen(port, () => {
      console.log(
        `Server listening on port ${port} in ${env} environment.`,
        `use http://${hostname}:${port}/subscriptions`
      );
    });
  })
  .catch(() => {
    console.log("ERROR: unable to connect to database");
    process.exit();
  });
