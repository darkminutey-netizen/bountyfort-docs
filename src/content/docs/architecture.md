---
title: MVP Architecture Overview
---

BountyPort consists of three main components:

1. **Smart Contracts**: The core logic of the platform, handling bounty lifecycle and funds.
2. **Indexer Service**: A Prisma-based service for fast and efficient bounty tracking.
3. **Web Application**: A Next.js-based interface for maintainers and contributors.

## Data Flow

The following diagram illustrates the data flow within the BountyPort architecture:

1. **Maintainer** creates a bounty through the **Web App**.
2. **Web App** interacts with the **Smart Contracts** on the blockchain.
3. **Smart Contracts** emit events upon bounty creation, funding, and approval.
4. **Indexer Service** monitors the blockchain for these events.
5. **Indexer Service** stores the event data in a **PostgreSQL** database.
6. **Web App** queries the **Indexer Service**'s API to display bounty information.
7. **Contributor** submits work through the **Web App**, which again interacts with the **Smart Contracts**.
8. **Maintainer** approves the work, triggering a fund payout through the **Smart Contracts**.
9. **Smart Contracts** emit payout events, which are indexed by the **Indexer Service**.

## Technology Stack

- **Smart Contracts**: Solidity, Foundry
- **Indexer Service**: TypeScript, Prisma, Express, Viem
- **Web Application**: Next.js, Wagmi, Viem
- **Database**: PostgreSQL
