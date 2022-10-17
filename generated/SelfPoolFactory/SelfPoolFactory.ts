// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class SelfPoolFactoryOwnershipTransferred extends ethereum.Event {
  get params(): SelfPoolFactoryOwnershipTransferred__Params {
    return new SelfPoolFactoryOwnershipTransferred__Params(this);
  }
}

export class SelfPoolFactoryOwnershipTransferred__Params {
  _event: SelfPoolFactoryOwnershipTransferred;

  constructor(event: SelfPoolFactoryOwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SelfPoolCreated extends ethereum.Event {
  get params(): SelfPoolCreated__Params {
    return new SelfPoolCreated__Params(this);
  }
}

export class SelfPoolCreated__Params {
  _event: SelfPoolCreated;

  constructor(event: SelfPoolCreated) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ticketValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get capacity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get creatorAddress(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get creatorPercent(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get ownerPercent(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class SelfPoolFactory extends ethereum.SmartContract {
  static bind(address: Address): SelfPoolFactory {
    return new SelfPoolFactory("SelfPoolFactory", address);
  }

  getMaxCreatorPercent(): BigInt {
    let result = super.call(
      "getMaxCreatorPercent",
      "getMaxCreatorPercent():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getMaxCreatorPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMaxCreatorPercent",
      "getMaxCreatorPercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getOwnerPercent(): BigInt {
    let result = super.call(
      "getOwnerPercent",
      "getOwnerPercent():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getOwnerPercent(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getOwnerPercent",
      "getOwnerPercent():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usdc(): Address {
    let result = super.call("usdc", "usdc():(address)", []);

    return result[0].toAddress();
  }

  try_usdc(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdc", "usdc():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _maxCreatorPercent(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _ownerPercent(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get ticketValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get capacity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get creatorPercent(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
