import {
  Stake,
  SetWinner,
} from "../generated/templates/StakingPool/StakingPool";
import { StakeEntity } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleStake(event: Stake): void {
  let stake = StakeEntity.load(event.params.pool.toHexString());
  if (stake == null) stake = new StakeEntity(event.params.pool.toHexString());
  stake.staker = event.params.staker;
  stake.pool = event.params.pool;
  log.info("successfully save stake in handleStake", [
    event.params.staker.toHexString(),
    event.params.pool.toHexString(),
  ]);

  stake.save();
}
export function handleSetWinner(event: SetWinner): void {
  let pool = StakeEntity.load(event.params.pool.toHexString());
  if (pool == null) {
    log.error("can,t find pool in handleSetWinner", [
      event.address.toHexString(),
      event.params.winner.toHexString(),
      event.transaction.hash.toHexString(),
    ]);
    return;
  }
  pool.winner = event.params.winner;
  pool.winnerTx = event.transaction.hash;

  log.info("successfully save pool in handleSetWinner", [
    event.address.toHexString(),
    event.params.winner.toHexString(),
    event.transaction.hash.toHexString(),
  ]);
  pool.save();
}
