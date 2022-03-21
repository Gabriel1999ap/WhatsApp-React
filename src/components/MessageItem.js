import React from 'react'
import './MessageItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ data, user }) => {
  return (
    /* O user MENSAGEM NO FINAL (FLEX-END) SE O outro a mensagem (FLEX-START)
     */
    <div
      className="menssageLine"
      style={{
        justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
      }}
    >
      {/* O user MENSAGEM COR #DCF8C6("VERDE") SE O outro a mensagem #FFF("BRANCA")
       */}
      <div
        className="menssageItem"
        style={{
          backgroundColor: user.id === data.author ? '#dcf8c6' : '#fff'
        }}
      >
        <div className="menssagemText">{data.body}</div>
        <div className="menssagemDate">12:00</div>
      </div>
    </div>
  )
}
