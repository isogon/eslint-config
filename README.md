# @isogon/eslint-config

## Usage

  1. `yarn add -D @isogon/eslint-config`

  2. Install our peer dependencies.
    If you are on linux you can run `yarn info @isogon/eslint-config peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add -D`

  3. Create `.eslint-config`:
    ```json
    {
      "extends": "@isogon"
    }
    ```

  4. Create a lint script that yarn can run in your `package.json`:
    ```json
    {
      "scripts": {
        "lint": "eslint --ext .js,.jsx,.vue ."
      }
    }
    ```
