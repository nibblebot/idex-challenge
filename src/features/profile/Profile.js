import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  selectEmail,
  selectFullName,
  selectAvatar,
  selectLanguage,
  setLanguage,
  setProfile,
} from "./profileSlice"
import { Link } from "react-router-dom"

const messages = {
  en: {
    LANGUAGE: "Select language",
  },
  es: {
    LANGUAGE: "Seleccionar idioma",
  },
}

export function Profile() {
  const email = useSelector(selectEmail)
  const fullName = useSelector(selectFullName)
  const avatar = useSelector(selectAvatar)
  const language = useSelector(selectLanguage)
  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  const [editEmail, setEmail] = useState(email)
  const [editFullName, setFullName] = useState(fullName)

  function updateProfile(event) {
    event.preventDefault()
    dispatch(setProfile({ email: editEmail, fullName: editFullName }))
    setEditing(false)
  }

  function updateLanguage(event) {
    dispatch(setLanguage(event.target.value))
  }

  return (
    <div>
      <header>
        <h1>Profile</h1>
        <div className="header-account">
          <div className="header-fullname">{fullName}</div>
          <img src={avatar} className="header-avatar" alt="avatar" />
        </div>
      </header>
      <div className="profile-card">
        <img src={avatar} className="profile-card-avatar" alt="avatar" />
        {!editing && (
          <div>
            <div className="profile-fields">
              <label>Full name</label>
              <div className="profile-fullName">{fullName}</div>
              <label>Email</label>
              <div className="profile-email">{email}</div>
            </div>
            <div className="profile-edit">
              <Link
                to="edit"
                onClick={(e) => {
                  e.preventDefault()
                  setEditing(true)
                }}
              >
                Edit Profile
              </Link>
            </div>
          </div>
        )}
        {editing && (
          <form>
            <label>Full name</label>
            <input
              type="text"
              className="profile-fullName-edit"
              value={editFullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              className="profile-email-edit"
              value={editEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={updateProfile} type="submit">
              Save
            </button>
          </form>
        )}
        {/* <div className="profile-password">
          <a href="#" onClick={}>
            Change Password
          </a>
        </div> */}
        <div className="profile-language">
          {messages[language].LANGUAGE}
          <select onChange={updateLanguage} value={language}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        {/* <div className="profile-logout">
          <a href="#" onClick={}>
            Logout
          </a>
        </div> */}
      </div>
    </div>
  )
}
