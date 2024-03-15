import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from ".";

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addressLine1: string;

  @Column()
  addressLine2: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  mobile: string;

  @ManyToOne(() => User, (user) => user.address)
  user: User;
}
