#!/usr/bin/env node

const US = 'us'
const ES = 'es'
const DEFAULT_LANG = US
const LANGUAGUES = { ES, US } 

var game = process.argv[2]
var lang = process.argv[3]

const LANG = LANGUAGUES[LANGUAGUES[lang] ? lang : DEFAULT_LANG]

if (!game) {
  console.log('usage: node-games <game> <languague>\n');
  console.log('Games:');
  console.log('- spacecraft');
  console.log('- snake');
  console.log('- tanks\n');
  console.log('Optional params: \n')
  console.log('Languagues: ')
  console.log(Object.keys(LANGUAGUES).map( key => `- ${LANGUAGUES[key]}`).join('\n'))
  console.log(`The default languague is ${DEFAULT_LANG}\n`)
  return;
}
console.log(`Running the game in ${LANG}`)

require('babel-polyfill');

require(__dirname + '/build/' + game);
