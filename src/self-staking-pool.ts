import {
  SelfPoolStake,
  SelfPoolSetWinner,
} from "../generated/templates/SelfStakingPool/SelfStakingPool";

import { SelfStakeEntity, SelfPoolEntity } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleStake(event: SelfPoolStake): void {
  let pool = SelfPoolEntity.load(event.params.pool.toHexString());
  let stake = new SelfStakeEntity(event.transaction.hash.toHexString());
  stake.staker = event.params.staker;
  stake.pool = event.params.pool;
  stake.stakeTx = event.transaction.hash;
  if (pool) {
    pool.sumOfStake++;
    pool.save();
  }
  log.info("successfully save stake in handleStake", [
    event.params.staker.toHexString(),
    event.params.pool.toHexString(),
  ]);

  stake.save();
}
export function handleSetWinner(event: SelfPoolSetWinner): void {
  let pool = SelfPoolEntity.load(event.params.pool.toHexString());
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
