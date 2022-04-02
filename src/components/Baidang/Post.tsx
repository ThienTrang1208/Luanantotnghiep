import React from "react";
import "./Style-post.css";
import HinhDang from "./assets/hinhdang.jpg";


export default function Post() {
  return (
    <div className="post__container">
      {/* image */}
      <div className="post__image">
        <img src={HinhDang} alt="p-1" />
      </div>
      <div className="post__group-bottom">
        {/* Group of interactive icons */}
        <div className="post__group-bottom">
          <div className="icons">
            <div className="icons-left">
              <span>
                <i className="bx bx-heart"></i>
              </span>
              <span>
                <i className="bx bx-message-rounded"></i>
              </span>
              <span>
                <i className="bx bx-paper-plane"></i>
              </span>
            </div>
            <div className="icons-right">
              <span>
                <i className="bx bx-bookmark"></i>
              </span>
            </div>
          </div>
          <div className="post__interactive-info">
            <a href="/#">
              <span>321</span> lượt thích
            </a>
          </div>
        </div>
        {/* Username + Caption */}
        <div className="post__caption">
          <div className="post__caption--user">
            <span className="user-name">
              <a href="/#">Banh_bao</a>
            </span>
            &nbsp;
            <span className="caption">
              "Không gì là không thể nếu chúng ta cố gắng hết sức."
            </span>
          </div>
          {/* Time */}
          <p className="post__caption--time"><span>1</span> Ngày trước</p>
        </div>
        {/* input field for comment */}
        <div className="post__comment">
            <form>
                <span>
                    <i className='bx bx-smile'></i>
                </span>
                <input type="text" placeholder="Thêm bình luận..." />
                <button className="btn btn-post-comment">Đăng</button>
            </form>
        </div>
      </div>
    </div>
  );
}