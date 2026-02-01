# Greeting Action

A simple GitHub Action that greets users. This action demonstrates the basic structure and functionality of a GitHub Action.

## Features

- Customizable greeting message
- Outputs the greeting for use in subsequent steps
- Simple and easy to use

## Usage

### Inputs

- `who-to-greet` - **Required** The name of the person to greet. Default: `"World"`

### Outputs

- `greeting-message` - The greeting message that was generated

### Example Workflow

Create a workflow file (e.g., `.github/workflows/greeting.yml`):

```yaml
name: Greeting Workflow

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Run greeting action
        id: greeting
        uses: ./
        with:
          who-to-greet: 'GitHub User'
      
      - name: Display greeting
        run: echo "${{ steps.greeting.outputs.greeting-message }}"
```

### Using in Another Repository

To use this action in another repository:

```yaml
- name: Run greeting action
  uses: Om-2611/action-repo@v1
  with:
    who-to-greet: 'Your Name'
```

## Development

### Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes to `index.js`
4. Build the distribution: `npm run build`

### Building

The action uses `@vercel/ncc` to compile the action and its dependencies into a single file:

```bash
npm run build
```

This creates the `dist/index.js` file that's referenced in `action.yml`.

## License

MIT