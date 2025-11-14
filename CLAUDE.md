# Magnificos - Cardano Project

## Project Overview
This is a Cardano blockchain project with both on-chain smart contracts and off-chain transaction handling components.

## Project Structure
```
magnificos/
├── src/
│   ├── on-chain/          # Aiken smart contracts
│   └── tx/                # TypeScript transaction utilities
├── .gitignore
└── CLAUDE.md
```

## Components

### On-Chain (`src/on-chain/`)
- **Purpose**: Smart contracts written in Aiken
- **Files**: Validator scripts and on-chain logic
- **Build**: Use Aiken compiler to generate Plutus scripts

### TX (`src/tx/`)
- **Purpose**: TypeScript utilities for building and submitting transactions
- **Framework**: Node.js with MeshSDK
- **Key Files**:
  - `src/utils.ts` - Utility functions for wallet creation, CBOR handling
  - `src/types.ts` - TypeScript interfaces for Plutus validators
  - `src/example.ts` - Transaction flow boilerplate
  - `src/example_cli.ts` - CLI example using Commander.js

## Dependencies

### TX Project Dependencies
- `@meshsdk/core` - Cardano SDK for transaction building
- `@meshsdk/core-csl` - Cardano serialization library
- `commander` - CLI framework
- `typescript` - TypeScript compiler

## Setup Instructions

### TX Project Setup
```bash
cd src/tx
npm install
npm run build    # Compile TypeScript
npm run dev      # Run with ts-node
```

### Environment Variables
Create `.env` file in `src/tx/`:
```
BLOCKFROST_API_KEY=your_blockfrost_api_key
SEED_PHRASE=your_24_word_seed_phrase
```

## Transaction Flow
The project provides a complete Cardano transaction workflow:

1. **Wallet Creation** - From seed phrase using MeshSDK
2. **Address Generation** - Get wallet and script addresses
3. **UTXO Fetching** - Retrieve available UTXOs
4. **Transaction Building** - Create unsigned transactions
5. **Transaction Signing** - Sign with wallet keys
6. **Transaction Submission** - Submit to Cardano network

## Usage Examples

### CLI Usage
```bash
# Show help
npm run dev src/example_cli.ts --help

# Basic commands
npm run dev src/example_cli.ts hello --name Alice
npm run dev src/example_cli.ts greet --name Bob
```

### Programmatic Usage
```typescript
import { createWallet, parseMnemonic } from './utils';

const provider = new BlockfrostProvider(apiKey);
const mnemonic = parseMnemonic(seedPhrase);
const wallet = await createWallet(provider, mnemonic, 0);
```

## Security Notes
- Never commit private keys, seed phrases, or API keys
- Use environment variables for sensitive data
- Always use testnet for development
- Review transactions before signing

## Build Commands
- `npm run build` - Compile TypeScript
- `npm run start` - Run compiled JavaScript
- `npm run dev` - Run with ts-node for development
- `npm run clean` - Remove build artifacts

## Network Configuration
- **Testnet**: Use `preprod` for testing
- **Mainnet**: Use `mainnet` for production
- Configure network via environment or CLI options