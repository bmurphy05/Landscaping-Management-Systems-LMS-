import { 
    Entity,
    Column,
    PrimaryGeneratedColumn, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from "typeorm";
import { User } from './index';


@Entity("jobs")
export class Job extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column("text")
    date!: string;

    @OneToOne(() => User)
    @JoinColumn()
    @Column("uuid")
    customer!: string;

    @OneToOne(() => User)
    @JoinColumn()
    @Column("uuid", { nullable: true })
    landscaper: string | undefined;

    @Column("text")
    type!: string;

    @Column("float")
    cost!: number;

    @Column("text")
    status!: string;

    @Column("text")
    paymentStatus!: string;

    @Column("text")
    details!: string;
}