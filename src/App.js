import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat'

import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'
import Api from './Api'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatlist, setChatList] = useState([])
  const [activeChat, setActiveChat] = useState({})
  const [user, setUser] = useState(null)
  const [showNewChat, setShowNewChat] = useState(false)

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setChatList)
      return unsub
    }
  })

  const handleNewChat = () => {
    setShowNewChat(true)
  }

  //AUTENTICAÇÃO DO LOGIN
  const handleLoginData = async (u) => {
    // PEGANDO OS DADOS DO USUARIO
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }
    await Api.addUser(newUser)
    setUser(newUser)
  }

  if (user === null) {
    return <Login onReceive={handleLoginData} />
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
              <Chat style={{ color: '#919191' }}></Chat>
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
        {activeChat.chatId !== undefined && (
          <ChatWindow user={user} data={activeChat} />
        )}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  )
}
