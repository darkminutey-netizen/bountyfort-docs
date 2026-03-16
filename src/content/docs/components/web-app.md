---
title: Web Application Overview
---

The BountyPort Web Application is a Next.js-based interface for maintainers and contributors to interact with the platform.

## Key Features

- **Bounty Discovery**: Browse open and funded bounties.
- **Bounty Creation**: Maintainers can create and fund new bounties.
- **Work Submission**: Contributors can submit their work for funded bounties.
- **Dashboard**: View personal dashboard with active bounties and performance metrics.
- **Profile**: View contributor profiles and performance stats.

## Technical Stack

- **Next.js**: Modern React framework for the web app.
- **Wagmi**: Wallet connection and interaction.
- **Viem**: Ethereum library for interacting with the BountyPort contracts.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Page Structure

The web application consists of several pages:

- `/`: Home page with a call to action and platform overview.
- `/bounties`: List of open and funded bounties.
- `/bounties/[id]`: Detailed view of a specific bounty, including submissions and payouts.
- `/bounties/new`: Page for maintainers to create new bounties.
- `/dashboard`: Personal dashboard for users.
- `/profile/[address]`: Contributor profile page.

## Interaction with the Platform

The web application interacts with the **Smart Contracts** on the blockchain and the **Indexer Service**'s API to provide a seamless user experience.

- **Blockchain Interaction**: The web app uses Wagmi and Viem to interact with the BountyPort contracts for creating, funding, and approving bounties.
- **API Interaction**: The web app queries the Indexer Service's API to fetch bounty information and contributor performance metrics.
