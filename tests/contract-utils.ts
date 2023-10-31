import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  ExcludeFromFees,
  OwnershipTransferred,
  SwapAndLiquify,
  SwapAndSendMarketing,
  SwapTokensAtAmountUpdated,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createExcludeFromFeesEvent(
  account: Address,
  isExcluded: boolean
): ExcludeFromFees {
  let excludeFromFeesEvent = changetype<ExcludeFromFees>(newMockEvent())

  excludeFromFeesEvent.parameters = new Array()

  excludeFromFeesEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  excludeFromFeesEvent.parameters.push(
    new ethereum.EventParam(
      "isExcluded",
      ethereum.Value.fromBoolean(isExcluded)
    )
  )

  return excludeFromFeesEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSwapAndLiquifyEvent(
  tokensSwapped: BigInt,
  ethReceived: BigInt,
  tokensIntoLiqudity: BigInt
): SwapAndLiquify {
  let swapAndLiquifyEvent = changetype<SwapAndLiquify>(newMockEvent())

  swapAndLiquifyEvent.parameters = new Array()

  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "tokensSwapped",
      ethereum.Value.fromUnsignedBigInt(tokensSwapped)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "ethReceived",
      ethereum.Value.fromUnsignedBigInt(ethReceived)
    )
  )
  swapAndLiquifyEvent.parameters.push(
    new ethereum.EventParam(
      "tokensIntoLiqudity",
      ethereum.Value.fromUnsignedBigInt(tokensIntoLiqudity)
    )
  )

  return swapAndLiquifyEvent
}

export function createSwapAndSendMarketingEvent(
  tokensSwapped: BigInt,
  ethSend: BigInt
): SwapAndSendMarketing {
  let swapAndSendMarketingEvent = changetype<SwapAndSendMarketing>(
    newMockEvent()
  )

  swapAndSendMarketingEvent.parameters = new Array()

  swapAndSendMarketingEvent.parameters.push(
    new ethereum.EventParam(
      "tokensSwapped",
      ethereum.Value.fromUnsignedBigInt(tokensSwapped)
    )
  )
  swapAndSendMarketingEvent.parameters.push(
    new ethereum.EventParam(
      "ethSend",
      ethereum.Value.fromUnsignedBigInt(ethSend)
    )
  )

  return swapAndSendMarketingEvent
}

export function createSwapTokensAtAmountUpdatedEvent(
  swapTokensAtAmount: BigInt
): SwapTokensAtAmountUpdated {
  let swapTokensAtAmountUpdatedEvent = changetype<SwapTokensAtAmountUpdated>(
    newMockEvent()
  )

  swapTokensAtAmountUpdatedEvent.parameters = new Array()

  swapTokensAtAmountUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "swapTokensAtAmount",
      ethereum.Value.fromUnsignedBigInt(swapTokensAtAmount)
    )
  )

  return swapTokensAtAmountUpdatedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
