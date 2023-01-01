import { SelfPoolCreated as SelfPoolCreatedEvent } from "../generated/SelfPoolFactory/SelfPoolFactory";
import { SelfPoolEntity } from "../generated/schema";
import { SelfStakingPool } from "../generated/templates";

export function handleSelfPoolCreated(event: SelfPoolCreatedEvent): void {
  let entity = new SelfPoolEntity(event.params.pool.toHexString());
  entity.poolId = event.params.pool;
  entity.poolTx = event.transaction.hash;
  entity.ticketValue = event.params.ticketValue;
  entity.endTime = event.params.endTime;
  entity.capacity = event.params.capacity;
  entity.owner = event.params.owner;
  entity.ownerPercent = event.params.ownerPercent;
  entity.sumOfStake = 0;
  entity.poolIsMature = false;
  entity.save();
  SelfStakingPool.create(event.params.pool);
}
