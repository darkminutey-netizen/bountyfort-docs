---
title: Indexer Service Overview
---

The BountyPort Indexer is a TypeScript-based service that monitors the Ethereum blockchain for BountyPort contract events and stores the data in a queryable PostgreSQL database.

## Key Responsibilities

- **Event Ingestion**: Monitors the `BountyCreated`, `BountyFunded`, `BountySubmitted`, `BountyApproved`, `BountyRejected`, `BountyCancelled`, and `BountyRefunded` events.
- **Data Persistence**: Stores the event data in a PostgreSQL database using Prisma.
- **API Endpoints**: Provides several API endpoints for querying bounty information, contributor performance metrics, and organization dashboards.

## API Endpoints

The indexer exposes the following API endpoints:

- `GET /api/v1/bounties`: List open and funded bounties.
- `GET /api/v1/bounties/:id`: Get detailed bounty info, including submissions and payouts.
- `GET /api/v1/contributors/:address`: Get contributor profile with performance metrics.
- `GET /api/v1/organizations/:address/summary`: Get organization dashboard summary.

## Technical Stack

- **TypeScript**: For a type-safe backend.
- **PostgreSQL**: Robust relational database.
- **Prisma**: ORM for schema management and database access.
- **Express**: Lightweight web framework for the API.
- **Viem**: Modern library for Ethereum event handling.

## Database Schema

The indexer uses a Prisma schema to define the database tables and relationships. The schema includes tables for:

- `Bounty`: Stores bounty information and status.
- `Contributor`: Stores contributor profiles and metrics.
- `Submission`: Stores work submissions for bounties.
- `Payout`: Stores information about bounty payouts.

## Architecture Assumptions

- **Idempotency**: Every event is tracked in the `ProcessedEvent` table using `transactionHash` and `logIndex` to prevent duplicate processing.
- **Organization**: An organization is simply identified by the `creator` address of a bounty.
- **Precision**: Monetary amounts are stored as `String` in the database to safely handle large `uint256` values from Ethereum without precision loss.
