/**
 * Based on https://github.com/mdn/webextensions-examples/tree/master/commands
 */

'use strict'
const url_1 = 'http://localhost:8000/'
const url_2 = 'https://www.google.fr/'

const fetchLogStatus = url => fetch(url)
  .then(response => {
    console.log(`${url}: `, response.status)
  })
  .catch(error => {
    console.error(`${url}: `, error)
  })

chrome.commands.onCommand.addListener(command =>
  fetchLogStatus(url_1)
    .then(() => fetchLogStatus(url_2))
)
