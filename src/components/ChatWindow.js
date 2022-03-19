import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'

import {
  InsertEmoticon,
  Search,
  AttachFile,
  MoreVert,
  Close,
  Send,
  Mic
} from '@material-ui/icons'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let recognition = null
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition()
  }

  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState('')
  const [listening, setListening] = useState(false)

  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji)
  }
  //função para utilizar o microfone
  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true)
      }
      recognition.onend = () => {
        setListening(false)
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript)
      }

      recognition.start()
    }
  }
  const handleSendClick = () => {}

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img avatar"
          />
          <div className="chatWindow--name">Gabriel Almeida</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <Search style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFile style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVert style={{ color: '#919191' }} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body"></div>

      <div
        className="chatWindowemojiarea"
        style={{ height: emojiOpen ? '200px' : '0px' }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <Close style={{ color: '#919191' }} />
          </div>
          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticon
              style={{ color: emojiOpen ? '#009688' : '#919191' }}
            />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            placeholder="Digite uma mensagem"
            className="chatWindow--input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--pos">
          {text === '' && (
            <div onClick={handleMicClick} className="chatWindow--btn">
              <Mic style={{ color: listening ? '#126ECE' : '#919191' }}></Mic>
            </div>
          )}
          {text !== '' && (
            <div onClick={handleSendClick} className="chatWindow--btn">
              <Send></Send>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
