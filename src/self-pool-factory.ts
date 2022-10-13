import {
  SelfPoolFactoryOwnershipTransferred as SelfPoolFactoryOwnershipTransferredEvent,
  SelfPoolCreated as SelfPoolCreatedEvent
} from "../generated/SelfPoolFactory/SelfPoolFactory"
import {
  SelfPoolFactoryOwnershipTransferred,
  SelfPoolCreated
} from "../generated/schema"

export function handleSelfPoolFactoryOwnershipTransferred(
  event: SelfPoolFactoryOwnershipTransferredEvent
): void {
  let entity = new SelfPoolFactoryOwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleSelfPoolCreated(event: SelfPoolCreatedEvent): void {
  let entity = new SelfPoolCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.pool = event.params.pool
  entity.ticketValue = event.params.ticketValue
  entity.endTime = event.params.endTime
  entity.capacity = event.params.capacity
  entity.owner = event.params.owner
  entity.ownerPercent = event.params.ownerPercent
  entity.save()
}
