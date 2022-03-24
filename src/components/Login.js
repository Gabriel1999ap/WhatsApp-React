import React from 'react'
import Api from '../Api'
import './Login.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onReceive }) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup()
    if (result) {
      onReceive(result.user)
    } else {
      alert('Erro!')
    }
  }
  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>Logar com o Facebook</button>
    </div>
  )
}
