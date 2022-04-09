import {
  sendEmailVerification,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth'
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../../AuthContext'
import { auth } from '../../../firebase'
import '../Login.css'
import iconPassword from './image/IconPassword.png'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { setTimeActive }: any = useAuthValue()
  const navigate = useNavigate()

  const login = (e: any) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (!auth?.currentUser?.emailVerified) {
          console.log('haha');
          
          sendEmailVerification(auth?.currentUser as any)
            .then(() => {
              setTimeActive(true)
              navigate('/verify-email')
            })
            .catch((err) => alert(err.message))
        } else {
          navigate('/main')
        }
      })
      .catch((err) => setError(err.message))
  }

  return (
    <div className="login">
      <div className="Bao">
        <form onSubmit={login} name="login_form">
          <h3 className="form-title">Đăng nhập</h3>

          <div className="form-group">
            <label htmlFor="account" className="form-label">
              Email đăng nhập
            </label>
            <i className="form-icon">{<FaUserCircle />}</i>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email đăng nhập"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <img src={iconPassword} className="form-icon" alt="Icon Password" />
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button className="form-submit btn-login" type="submit">
            Đăng nhập
          </button>
          {error && <div className="auth__error">{error}</div>}
          <div>
            <Link to="/register" className="form-option">
              Đăng ký tài khoản
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
