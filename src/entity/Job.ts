import { 
    Entity,
    Column,
    PrimaryColumn,
    BeforeInsert, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from "typeorm";
import { User } from './index';
import uuidv4 = require('uuid/v4');

@Entity("jobs")
export class Job extends BaseEntity {
    @PrimaryColumn("uuid")
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
    jobCost!: number;

    @Column("text")
    status!: string;

    @Column("text")
    paymentStatus!: string;

    @Column("text")
    details!: string;

    @BeforeInsert()
    addId() {
        this.id = uuidv4();
    }
}