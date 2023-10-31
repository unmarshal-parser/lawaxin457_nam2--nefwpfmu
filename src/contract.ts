import {
  Approval as ApprovalEvent,
  ExcludeFromFees as ExcludeFromFeesEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SwapAndLiquify as SwapAndLiquifyEvent,
  SwapAndSendMarketing as SwapAndSendMarketingEvent,
  SwapTokensAtAmountUpdated as SwapTokensAtAmountUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  ExcludeFromFees,
  OwnershipTransferred,
  SwapAndLiquify,
  SwapAndSendMarketing,
  SwapTokensAtAmountUpdated,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExcludeFromFees(event: ExcludeFromFeesEvent): void {
  let entity = new ExcludeFromFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.isExcluded = event.params.isExcluded

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapAndLiquify(event: SwapAndLiquifyEvent): void {
  let entity = new SwapAndLiquify(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokensSwapped = event.params.tokensSwapped
  entity.ethReceived = event.params.ethReceived
  entity.tokensIntoLiqudity = event.params.tokensIntoLiqudity

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapAndSendMarketing(
  event: SwapAndSendMarketingEvent
): void {
  let entity = new SwapAndSendMarketing(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokensSwapped = event.params.tokensSwapped
  entity.ethSend = event.params.ethSend

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapTokensAtAmountUpdated(
  event: SwapTokensAtAmountUpdatedEvent
): void {
  let entity = new SwapTokensAtAmountUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.swapTokensAtAmount = event.params.swapTokensAtAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
