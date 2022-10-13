// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PoolEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PoolEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PoolEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PoolEntity", id.toString(), this);
    }
  }

  static load(id: string): PoolEntity | null {
    return changetype<PoolEntity | null>(store.get("PoolEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolId(): Bytes {
    let value = this.get("poolId");
    return value!.toBytes();
  }

  set poolId(value: Bytes) {
    this.set("poolId", Value.fromBytes(value));
  }

  get capacity(): BigInt {
    let value = this.get("capacity");
    return value!.toBigInt();
  }

  set capacity(value: BigInt) {
    this.set("capacity", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value!.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get ticketValue(): BigInt {
    let value = this.get("ticketValue");
    return value!.toBigInt();
  }

  set ticketValue(value: BigInt) {
    this.set("ticketValue", Value.fromBigInt(value));
  }

  get winner(): Bytes | null {
    let value = this.get("winner");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set winner(value: Bytes | null) {
    if (!value) {
      this.unset("winner");
    } else {
      this.set("winner", Value.fromBytes(<Bytes>value));
    }
  }

  get winnerTx(): Bytes | null {
    let value = this.get("winnerTx");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set winnerTx(value: Bytes | null) {
    if (!value) {
      this.unset("winnerTx");
    } else {
      this.set("winnerTx", Value.fromBytes(<Bytes>value));
    }
  }

  get poolTx(): Bytes {
    let value = this.get("poolTx");
    return value!.toBytes();
  }

  set poolTx(value: Bytes) {
    this.set("poolTx", Value.fromBytes(value));
  }

  get sumOfStake(): i32 {
    let value = this.get("sumOfStake");
    return value!.toI32();
  }

  set sumOfStake(value: i32) {
    this.set("sumOfStake", Value.fromI32(value));
  }
}

export class StakeEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakeEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type StakeEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeEntity", id.toString(), this);
    }
  }

  static load(id: string): StakeEntity | null {
    return changetype<StakeEntity | null>(store.get("StakeEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get staker(): Bytes {
    let value = this.get("staker");
    return value!.toBytes();
  }

  set staker(value: Bytes) {
    this.set("staker", Value.fromBytes(value));
  }

  get stakeTx(): Bytes {
    let value = this.get("stakeTx");
    return value!.toBytes();
  }

  set stakeTx(value: Bytes) {
    this.set("stakeTx", Value.fromBytes(value));
  }
}

export class SelfPoolFactoryOwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save SelfPoolFactoryOwnershipTransferred entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SelfPoolFactoryOwnershipTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SelfPoolFactoryOwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): SelfPoolFactoryOwnershipTransferred | null {
    return changetype<SelfPoolFactoryOwnershipTransferred | null>(
      store.get("SelfPoolFactoryOwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value!.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class SelfPoolEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SelfPoolEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SelfPoolEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SelfPoolEntity", id.toString(), this);
    }
  }

  static load(id: string): SelfPoolEntity | null {
    return changetype<SelfPoolEntity | null>(store.get("SelfPoolEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    return value!.toBytes();
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }

  get ticketValue(): BigInt {
    let value = this.get("ticketValue");
    return value!.toBigInt();
  }

  set ticketValue(value: BigInt) {
    this.set("ticketValue", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value!.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get capacity(): BigInt {
    let value = this.get("capacity");
    return value!.toBigInt();
  }

  set capacity(value: BigInt) {
    this.set("capacity", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get ownerPercent(): BigInt {
    let value = this.get("ownerPercent");
    return value!.toBigInt();
  }

  set ownerPercent(value: BigInt) {
    this.set("ownerPercent", Value.fromBigInt(value));
  }
}
