import React, { useState, useEffect } from 'react'
import './App.css'

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'

import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatlist, setChatList] = useState([
    {
      chatId: 1,
      title: 'Fulado de Tal',
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      chatId: 2,
      title: 'Fulado de Tal',
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      chatId: 3,
      title: 'Fulado de Tal',
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      chatId: 4,
      title: 'Fulado de Tal',
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    }
  ])
  const [activeChat, setActiveChat] = useState({})
  return (
    <div className="janelaApp">
      <div className="barraLateral">
        <header>
          <img
            className="cabecalhoAvatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="foto de perfil"
          />
          <div className="cabecalhoBotoes">
            <div className="cabecalhoBtn">
              <DonutLarge style={{ color: '#919191' }} />
            </div>
            <div className="cabecalhoBtn">
              <Chat style={{ color: '#919191' }} />
            </div>
            <div className="cabecalhoBtn">
              <MoreVert style={{ color: '#919191' }} />
            </div>
          </div>
        </header>
        <div className="busca">
          <div className="busca-input">
            <Search fontSize="small" style={{ color: '#919191' }} />
            <input
              type="search"
              placeholder="Pesquisar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="listaChat">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="areaConteudo">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  )
}
