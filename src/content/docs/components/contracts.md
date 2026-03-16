---
title: Smart Contracts Overview
---

The BountyPort smart contracts are responsible for managing the lifecycle of bounties and ensuring trustless fund distribution.

## Core Contract: `BountyPort.sol`

The `BountyPort` contract is the primary entry point for the platform. It defines the `Bounty` struct and several functions for interacting with bounties.

### Bounty Struct

```solidity
struct Bounty {
    string titleMetadataURI;
    address rewardToken;
    uint256 rewardAmount;
    uint256 deadline;
    address creator;
    BountyStatus status;
    address contributor;
    string deliverableMetadataURI;
}
```

### Bounty Statuses

- `CREATED`: Bounty has been created but not yet funded.
- `FUNDED`: Bounty has been funded and is open for submissions.
- `SUBMITTED`: A contributor has submitted their work for the bounty.
- `COMPLETED`: The submission has been approved and funds have been released.
- `CANCELLED`: The bounty has been cancelled and funds (if any) have been refunded.

### Key Functions

- `createBounty(...)`: Allows a maintainer to create a new bounty.
- `fundBounty(...)`: Allows a maintainer to fund a created bounty with the specified reward token.
- `submitDeliverable(...)`: Allows a contributor to submit their work for a funded bounty.
- `approveSubmission(...)`: Allows a maintainer to approve a submission and release funds to the contributor.
- `rejectSubmission(...)`: Allows a maintainer to reject a submission, returning the bounty to the `FUNDED` status.
- `cancelBounty(...)`: Allows a maintainer to cancel a `CREATED` bounty.
- `refundBounty(...)`: Allows a maintainer to refund a `FUNDED` bounty.

## Deployment and Interaction

The BountyPort contracts are currently developed using **Foundry**. You can deploy them to a local network or a testnet using the `forge create` command.

```bash
forge create --rpc-url <your-rpc-url> --private-key <your-private-key> src/BountyPort.sol:BountyPort
```
