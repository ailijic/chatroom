// public/main.js
/* global $, io */

start()
function start () {
  'use strict'

  $(document).ready(() => {
    const socket = io()
    const input = $('input')
    const messages = $('#messages')

    socket.on('message', addMessage)

    input.on('keydown', (event) => {
      if (event.keyCode !== 13) {
        return
      } else {
        const message = input.val()
        addMessage(message)
        socket.emit('message', message)
        input.val('')
      }
    })

    function addMessage (message) {
      messages.append(`<div> ${message} </div>`)
    }
  })
}
