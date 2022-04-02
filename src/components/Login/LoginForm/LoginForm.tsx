import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import iconPassword from "./image/IconPassword.png";
import "../Login.css";

function LoginForm() {
  function handleOnChange(e: any) {
    // Khi user nhập vào input
    if (e.target.value) {
      e.target.style.backgroundColor = "#fff";
      e.target.style.border = "1px solid rgba(55, 56, 57, 0.5)";
    } else {
      e.target.style.backgroundColor = "#f2f2f2";
      e.target.style.border = "none";
    }
  }

  return (
    <div className="login">
      <div className="Bao">
        <form action="" method="POST" className="form" id="form-login">
          <h3 className="form-title">Đăng nhập</h3>

          <div className="form-group">
            <label htmlFor="account" className="form-label">
              Tên đăng nhập
            </label>
            <i className="form-icon">{<FaUserCircle />}</i>
            <input
              id="account"
              name="account"
              type="text"
              className="form-control"
              onChange={handleOnChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Mật khẩu
            </label>
            <img src={iconPassword} className="form-icon" />
            <input
              id="password"
              name="password"
              type="password"
              className="form-control"
              onChange={handleOnChange}
            />
          </div>

          <Link to="/password-reset" className="form-option">
            <span>Quên mật khẩu?</span>
          </Link>

          <Link
            to="/main"
            className="form-submit btn-login"
          >
            Đăng nhập
          </Link>
        </form>
       </div>
    </div>
  );
}

export default LoginForm;
