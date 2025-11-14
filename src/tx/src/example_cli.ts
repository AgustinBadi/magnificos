#!/usr/bin/env node

// Import Commander.js library for building command-line interfaces
import { Command } from 'commander';

// Create a new Command instance - this is the root program
const program = new Command();

// Configure the main program with metadata
program
  .name('simple-cli')                           // Set the CLI name (shown in help)
  .description('Simple CLI example using Commander')  // Main description
  .version('1.0.0');                           // Version number (accessible with --version)

// Define a basic command with optional parameters
program
  .command('hello')                            // Command name: "hello"
  .description('Say hello')                    // Command description (shown in help)
  .option('-n, --name <name>', 'Your name')   // Optional flag: -n or --name with value
  .action((options) => {                       // Function to execute when command is run
    // Use provided name or default to "World"
    const name = options.name || 'World';
    console.log(`Hello, ${name}!`);
  });

// Define a command with required parameters
program
  .command('greet')                                    // Command name: "greet"
  .description('Greet someone')                        // Command description
  .requiredOption('-n, --name <name>', 'Name to greet') // Required flag (command fails without it)
  .action((options) => {                               // Function to execute
    // options.name is guaranteed to exist because it's required
    console.log(`Greetings, ${options.name}!`);
  });

// Parse command-line arguments and execute the appropriate command
// This must be called at the end to process user input
program.parse();

/*
Usage examples:
  npm run dev src/example_cli.ts hello              → "Hello, World!"
  npm run dev src/example_cli.ts hello --name Alice → "Hello, Alice!"
  npm run dev src/example_cli.ts greet --name Bob   → "Greetings, Bob!"
  npm run dev src/example_cli.ts --help             → Shows help for all commands
  npm run dev src/example_cli.ts --version          → Shows version
*/