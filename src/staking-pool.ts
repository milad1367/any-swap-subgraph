import { Stake } from "../generated/templates/StakingPool/StakingPool";
import { StakeEntity } from "../generated/schema";

export function handleStake(event: Stake): void {
  let stake = StakeEntity.load(event.transaction.hash.toHex());
  if (stake == null) stake = new StakeEntity(event.transaction.hash.toHex());
  stake.staker = event.params.staker;
  stake.pool = event.params.pool;
  stake.save();
}
