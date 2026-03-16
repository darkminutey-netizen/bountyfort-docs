---
title: Local Setup Guide
---

To set up BountyPort locally, you'll need to follow several steps to configure the smart contracts, indexer service, and web application.

## Prerequisites

- **Node.js (v18+)**
- **Foundry (Forge, Anvil, Cast)**
- **PostgreSQL instance**

## Step 1: Smart Contracts Setup

1. Clone the `bountyfort-contracts` repository.
2. Install dependencies:
   ```bash
   forge install
   ```
3. Run a local blockchain using Anvil:
   ```bash
   anvil
   ```
4. Deploy the `BountyPort` contract to the local network:
   ```bash
   forge create --rpc-url http://localhost:8545 --private-key <your-private-key> src/BountyPort.sol:BountyPort
   ```

## Step 2: Indexer Service Setup

1. Clone the `bountyfort-indexer` repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file with your `DATABASE_URL` and `PORT`.
4. Initialize the database:
   ```bash
   npm run prisma:migrate --name init
   ```
5. Seed the database with sample data:
   ```bash
   npx prisma db seed
   ```
6. Run the indexer service in development mode:
   ```bash
   npm run dev
   ```

## Step 3: Web Application Setup

1. Clone the `bountyfort-web` repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Connecting the Components

1. Make sure the Anvil node is running.
2. Ensure the Indexer Service is running and connected to the Anvil node.
3. Verify the Web Application is running and connected to the Indexer Service's API.
4. Interact with the BountyPort platform through the Web Application.
