import "reflect-metadata";
import { configs } from "./configs";
import { DataSource } from "typeorm";
import {
  Inventory,
  ShoeCategory,
  ShoeHue,
  Shoes,
  ShoeSex,
  ShoeSize,
  User,
  UserAddress,
  UserPayment,
} from "./entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: configs.database.host,
  port: 5432,
  username: configs.database.username,
  password: configs.database.password,
  database: configs.database.database,
  synchronize: true,
  logging: false,
  entities: [
    Shoes,
    ShoeHue,
    ShoeSize,
    ShoeCategory,
    ShoeSize,
    Inventory,
    User,
    ShoeSex,
    UserPayment,
    UserAddress,
  ],
  migrations: [],
  subscribers: [],
});
