import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from ".";

@Entity()
export class UserPayment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  paymentType: string;

  @Column()
  provider: string;

  @Column()
  accountNo: number;

  @Column()
  expiry: Date;

  @ManyToOne(() => User, (user) => user.payment)
  user: User;
}
