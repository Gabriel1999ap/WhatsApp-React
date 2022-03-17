import React from 'react'
import './App.css'
import { Chat, DonutLarge, MoreVert, Search } from '@material-ui/icons'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
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
        <div className="listaChat">...</div>
      </div>
      <div className="areaConteudo">...</div>
    </div>
  )
}
