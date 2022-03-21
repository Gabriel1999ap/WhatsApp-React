import React, { useState, useEffect } from 'react'
import './App.css'
import NewChat from './components/NewChat'

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
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    name: 'Gabriel Almeida'
  })
  const [showNewChat, setShowNewChat] = useState(false)

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  return (
    <div className="janelaApp">
      <div className="barraLateral">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img
            className="cabecalhoAvatar"
            src={user.avatar}
            alt="foto de perfil"
          />
          <div className="cabecalhoBotoes">
            <div className="cabecalhoBtn">
              <DonutLarge style={{ color: '#919191' }} />
            </div>
            <div onClick={handleNewChat} className="cabecalhoBtn">
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
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  )
}
