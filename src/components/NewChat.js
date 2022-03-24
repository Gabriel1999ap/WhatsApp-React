import React, { useState, useEffect } from 'react'

import './NewChat.css'
import Api from '../Api'

import { ArrowBack } from '@material-ui/icons'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getList = async () => {
      if (user !== null) {
        let results = await Api.getContactList(user.id)
        setList(results)
      }
    }
    getList()
  }, [user])
  const addNewChat = async (user2) => {
    await Api.addNewChat(user, user2)

    handleClose()
  }

  const handleClose = () => {
    setShow(false)
  }
  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChathead">
        <div onClick={handleClose} className="newChatbackbutton">
          <ArrowBack style={{ color: '#fff' }} />
        </div>
        <div className="newChatheadtitle">Nova Conversa</div>
      </div>
      <div className="newChatlist">
        {list.map((item, key) => (
          <div
            onClick={() => addNewChat(item)}
            className="newchatitem"
            key={key}
          >
            <img className="newchatitemavatar" src={item.avatar} alt=""></img>
            <div className="newchatitemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
