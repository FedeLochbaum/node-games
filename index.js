#!/usr/bin/env node

const us = 'us'
const es = 'es'

const DEFAULT_LANG = us
const LANGUAGES = { es, us } 

var game = process.argv[2]
var lang = process.argv[3]

global.SELECTED_LANG = LANGUAGES[LANGUAGES[lang] ? lang : DEFAULT_LANG]

if (!game) {
  console.log('usage: node-games <game> <language>\n');
  console.log('Games:')
  console.log('- spacecraft')
  console.log('- snake')
  console.log('- tanks\n')
  console.log('Optional params: \n')
  console.log('Languages: ')
  console.log(Object.keys(LANGUAGES).map( key => `- ${LANGUAGES[key]}`).join('\n'))
  console.log(`Default language is ${DEFAULT_LANG}\n`)
  return;
}

console.log(`Running the game in ${global.SELECTED_LANG}`)

require('babel-polyfill')

require(__dirname + '/build/' + game)
