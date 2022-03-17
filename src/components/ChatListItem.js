import React from 'react'
import './ChatListItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="listaCompletaDoChat">
      <img
        className="listaChatAvatar"
        src="https://www.w3schools.com/howto/img_avatar2.png"
        alt="imagem de perfil da conversa"
      />
      <div className="listaChatConversas">
        <div className="listaChatConversa">
          <div className="listaChatNome">Gabriel Almeida</div>
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
