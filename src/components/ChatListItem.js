import React from 'react'
import './ChatListItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onClick, active, data }) => {
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
          <div className="listaChatHr">19:00</div>
        </div>
        <div className="listaChatConversa">
          <div className="listaChatUltimaMsg">
            <p>
              teste testet testteste testet testteste testet testteste testet
              testteste testet testteste testet testteste testet test
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
