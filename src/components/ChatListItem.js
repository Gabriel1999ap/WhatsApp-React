import React, { useState, useEffect } from 'react'
import './ChatListItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onClick, active, data }) => {
  const [time, setTime] = useState('')
  useEffect(() => {
    if (data.lastMessageDate > 0) {
      let d = new Date(data.lastMessageDate.seconds * 1000)
      let hours = d.getHours()
      let minutes = d.getMinutes()
      hours = hours < 10 ? '0' + hours : hours
      minutes = minutes < 10 ? '0' + minutes : minutes
      setTime(`${hours}:${minutes}`)
    }
  }, [data])
  return (
    <div
      className={`listaCompletaDoChat ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <img
        className="listaChatAvatar"
        src={data.image}
        alt="imagem de perfil da conversa"
      />
      <div className="listaChatConversas">
        <div className="listaChatConversa">
          <div className="listaChatNome">{data.title}</div>
          <div className="listaChatHr">{time}</div>
        </div>
        <div className="listaChatConversa">
          <div className="listaChatUltimaMsg">
            <p>{data.lastMessage}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
