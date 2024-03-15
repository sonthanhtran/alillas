import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserAddress } from "./UserAddress";
import { UserPayment } from "./UserPayment";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => UserAddress, (address) => address.user)
  address: UserAddress[];

  @OneToMany(() => UserPayment, (payment) => payment.user)
  payment: UserPayment[];
}
