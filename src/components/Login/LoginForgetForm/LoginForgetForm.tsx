import { FaUserCircle, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


function LoginForgetForm() {
  function handleOnChange(e: any) {
    const formUpdatePassword: Element | null = document.querySelector(
      "#form-update-password"
    );
    if (formUpdatePassword) {
      const btnUpdatePassword: Element | null =
        formUpdatePassword.querySelector(".form-submit.update-password");
      const accountInput: Element | null = formUpdatePassword.querySelector(
        'input[name= "account"] '
      );
      const confirmCodeInput: Element | null = formUpdatePassword.querySelector(
        'input[name= "confirm-code"] '
      );

      // Khi user nhập confirm code
      if (accountInput != null && confirmCodeInput != null && btnUpdatePassword != null) {
        if ((accountInput as HTMLInputElement).value && (confirmCodeInput as HTMLInputElement).value) {
          (btnUpdatePassword as HTMLInputElement).style.background =
            "linear-gradient(270deg, #ff5400 0%, #f17f21 80.56%)";
        } else {
          (btnUpdatePassword as HTMLInputElement).style.background = "#c9c4c0";
        }
      }
    }

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
      
      <form action="" method="POST" className="form" id="form-update-password">
        <h3 className="form-title">Cấp lại mật khẩu</h3>

        <div className="form-group">
          <label htmlFor="account" className="form-label">
            Nhập tài khoản gmail
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
            Mã xác thực
          </label>
          <input
            id="confirm-code"
            name="confirm-code"
            type="text"
            className="form-control"
            onChange={handleOnChange}
          />
        </div>

        <Link className="form-option" to="/">
          <FaChevronLeft />
          <span>Quay lại trang Đăng Nhập</span>
        </Link>

        <button className="form-submit update-password">
          Cấp lại mật khẩu
        </button>
      </form>
    </div>
  );
}

export default LoginForgetForm;
