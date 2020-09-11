This plugin was created with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

## Prerequisites
- Node JS version >= 8 installed globally
- npm version >= 5.3

## Steps I did to create new Plugin for custom content

```sh
npx create-guten-block my-block
cd my-block
npm start
```

## Why did I use create guten block?

- I considered using create-guten-block over ACF (Advanced Custom Fields), as it looked more structured and well documented

- Easy to customise

## Instructions to add this plugin to the theme:

- git clone the repo inside '~/wp-content/plugins folder 

```sh
cd Sunacare
npm install
npm start
```

- 'npm start' will watch for any changes in the plugin
- activate the plugin named as "Newsletter CTA"
- add a new block in any post (Block name: custom CGB block with a mail icon)
