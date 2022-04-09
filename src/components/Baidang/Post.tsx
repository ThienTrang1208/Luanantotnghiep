import { faker } from '@faker-js/faker'
import React from 'react'
import './Style-post.css'
import HinhDang from "./assets/hinhdang.jpg";

export default function Post({ data, type }: any) {
  const fakeImg = faker.image.image()
  return (
    <div className="post__container">
      {/* image */}
      <div className="post__avatar">
        <img className="avatar-img" src={HinhDang} alt="p-1" />
        <div className="profile-name">Hồng Xuân</div>
      </div>
      <div className="post__image">
        <img src={fakeImg} alt="p-1" />
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
              <span>{data.like}</span> lượt thích
            </a>
          </div>
        </div>
        {/* Username + Caption */}
        <div className="post__caption">
          <div className="post__caption--user">
            <span className="user-name">
              <a href="/#">Hồng Xuân</a>
            </span>
            &nbsp;
            <span className="caption">{data.caption}</span>
          </div>
          {/* Time */}
          <p className="post__caption--time">
            <span>{Math.floor(Math.random() * 10) + 1}</span>
            {type ? ' Ngày trước' : ' Giờ trước' }
          </p>
        </div>
        {/* input field for comment */}
        <div className="post__comment">
          <form>
            <span>
              <i className="bx bx-smile"></i>
            </span>
            <input type="text" placeholder="Thêm bình luận..." />
            <button className="btn btn-post-comment">Đăng</button>
          </form>
        </div>
      </div>
    </div>
  )
}
