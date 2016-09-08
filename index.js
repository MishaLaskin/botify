'use strict';

const express = require('express')
const Slapp = require('slapp')
const BBConvoStore = require('slapp-convo-beepboop')
const BBContext = require('slapp-context-beepboop')
if (!process.env.PORT) throw Error('PORT missing')

let slapp = Slapp({
  convo_store: BBConvoStore(),
  context: BBContext()
})

var app = slapp.attachToExpress(express())

slapp.message('Hey!', ['direct_message'], (message, text) => {
  message.say('It\'s lit!').route('handleGreeting', { })
})

slapp.route('handleGreeting', (message, state) => {
  message.say(':smile:')
})

app.get('/', function (req, res) {
  res.send('WHATUPPP MY BLIP BLOTS!')
})

console.log('Listening on:' + process.env.PORT)
app.listen(process.env.PORT)
