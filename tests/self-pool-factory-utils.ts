import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  SelfPoolFactoryOwnershipTransferred,
  SelfPoolCreated
} from "../generated/SelfPoolFactory/SelfPoolFactory"

export function createSelfPoolFactoryOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): SelfPoolFactoryOwnershipTransferred {
  let selfPoolFactoryOwnershipTransferredEvent = changetype<
    SelfPoolFactoryOwnershipTransferred
  >(newMockEvent())

  selfPoolFactoryOwnershipTransferredEvent.parameters = new Array()

  selfPoolFactoryOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  selfPoolFactoryOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return selfPoolFactoryOwnershipTransferredEvent
}

export function createSelfPoolCreatedEvent(
  pool: Address,
  ticketValue: BigInt,
  endTime: BigInt,
  capacity: BigInt,
  owner: Address,
  ownerPercent: BigInt
): SelfPoolCreated {
  let selfPoolCreatedEvent = changetype<SelfPoolCreated>(newMockEvent())

  selfPoolCreatedEvent.parameters = new Array()

  selfPoolCreatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )
  selfPoolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ticketValue",
      ethereum.Value.fromUnsignedBigInt(ticketValue)
    )
  )
  selfPoolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  selfPoolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "capacity",
      ethereum.Value.fromUnsignedBigInt(capacity)
    )
  )
  selfPoolCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  selfPoolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerPercent",
      ethereum.Value.fromUnsignedBigInt(ownerPercent)
    )
  )

  return selfPoolCreatedEvent
}
