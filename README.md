# @isogon/eslint-config

## Installation

  1. `yarn add -D @isogon/eslint-config`

  2. Install our peer dependencies.
    If you are on linux you can run `yarn info @isogon/eslint-config peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D`

## Usage

### Simple usage

Create a lint script for yarn to run

```json
{
  "scripts": {
    "lint": "eslint -c @isogon ."
  }
}
```

### If you need to tweak it

Create `.eslint-config`, and create a lint script that yarn can run in your `package.json`:

```json
{
  "extends": "@isogon"
}
```

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

