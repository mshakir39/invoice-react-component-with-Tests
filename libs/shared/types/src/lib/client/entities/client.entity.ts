import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { EntityMeta } from "../../common/entity-meta";
import type { Address } from "../../common/address";
import type { Percentage, Amount } from "../../common/measurements";
import type { ProjectEntity } from "../../project/entities/project.entity";
import type { ArchitectEntity } from "../../architect/entities/architect.entity";

/**
 * A client is whom an architect works for.
 */
@Entity("client")
export class ClientEntity extends EntityMeta {

  /**
   * This is the name of the client
   */
  @Column()
  name!: string;

  /**
   * This is supposed to be a client's point of contact. Because we have a nullable
   * contacts array that holds a list of a client's contacts, this field might not be needed
   * in the future.
   */
  @Column({ default: "" })
  pointOfContactFullName!: string;

  /**
   * Client's full address.
   */
  @Column("jsonb")
  address!: Address;

  /**
   * Primary email address of a client.
   */
  @Column({ default: "" })
  email!: string;

  /**
   * Telephone number of a client.
   */
  @Column({ default: "" })
  phone!: string;

  /**
   * This is just a percentage for whether a client will sign a contract.
   */
  @Column("jsonb")
  likelihoodOfSuccess!: Percentage;

  /**
   * The total value of the contract. It is used with the likelihoodOfSuccess to determine the priority of this client.
   * Using this formula (likelihoodOfSuccess/100 * totalEstimatedValue), an architect can get an actual dollar value
   * for what a contract is worth compared to other contract. This value will then be used to set priority for each contract.
   *
   * For example if a contract has totalEstimatedValue = N1,000,000, and likelihoodOfSuccess = 70
   * Actual Contact value = ((70/100) * 1,000,000) = 700,000 USD.
   * Which means that this contract has more priority over any other contract less than 700,000 USD actual value.
   */
  @Column("jsonb")
  totalEstimatedValue!: Amount;
}
