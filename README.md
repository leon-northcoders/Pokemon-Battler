## Pokemon Battle Game

Terminal Pokemon battler

## Prerequisites
This application was built with JavaScript and uses:
* [Node.js](https://nodejs.org/en/) - JavaScript run-time environment
* [Inquirer](https://www.npmjs.com/package/inquirer) - A collection of common interactive command line user interfaces
* [Colour](https://www.npmjs.com/package/colour) - Extends available colours for terminal text
* [Play-sound](https://www.npmjs.com/package/play-sound) - Play sounds by shelling out to one of the available audio players

## Installation

You will need to have Node installed before installing other dependencies. Information on how to do this can be found at the Node website.

1. Download a copy of the project through GitHub:
```
git clone  https://github.com/leon-northcoders/Pokemon-Battler.git
```
2. Download the necessary dependencies:
```
npm i
```

## Pokemon Themes

In order to change the terminal theme you must first install [Pokemon-Terminal](https://github.com/LazoCoder/Pokemon-Terminal)
1. To install, run:
```
npm install -g pokemon-terminal
```
2. To select theme:
```
pokemon <pokemon-name>
```
3. To remove theme:
```
pokemon --clear
```
The game will alternate themes, depending on which Pokemon is attacking & will clear when the game is initially started

## Run Game

To play the game:
```
npm run game
```
