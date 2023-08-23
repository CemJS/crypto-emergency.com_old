import { Cemjsx } from "cemjs-all"
import views from "@svg/news/views.svg"
import comments from "@svg/news/comments.svg"
import dislike from "@svg/lenta/dislike.svg"
import like from "@svg/lenta/like.svg"
import frameDefault from "@svg/lenta/default.svg"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import points from "@svg/lenta/points.svg"
import sendMessage from "@svg/lenta/send_message.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import back from '@svg/icon/prev.svg'

let item

export default function () {
  console.log('=57c87c=', this.Static.record)
  if (this.Static.recordsUpdate) {
    item = this.Static.recordsUpdate
  } else {
    item = this.Static.record
  }
  this.Static.data.newsId = item._id
  return (
    <div class="news-show">
      <div class="back">
        <div class="back_arrow">
          <img
            src={back}
            onclick={() => {
              delete this.Static.record
              this.init()
            }}
          >
          </img>
        </div>
        <div
          class="tool"
          onclick={() => {
            this.Fn.initOne({
              name: "modalTool", ifOpen: (front) => {
                setTimeout(() => {
                  front.clearData()
                }, 500);
              }
            })
          }}
        >
          <span class="tool_item"></span>
          <span class="tool_item"></span>
          <span class="tool_item"></span>
        </div>
      </div>
      <h1>{item.title}</h1>
      <section class="news-show__container">
        <div class="news-show__img">
          <img src={`/assets/upload/news/${item.image}`} alt="" />
        </div>
        <p class="news-show__preview">{item.preview}</p>
        <p class="news-show__description">{this.Services.functions.editText(item.text, { clear: true, paragraph: true, html: true })}</p>
        <div class="news-show__statistic">
          <span>
            <img src={views} alt="Просмотры." />
            {item.statistic?.view}
          </span>
          <span>
            <img src={comments} alt="Комментарии." />
            {item.statistic.comments}
          </span>
          <span>{this.Services.functions.dateFormat(item.showDate, "now")}</span>
        </div>
        <div class="news-show__comments">
          <h2>Комментировать</h2>

          <div class="lenta__comment">
            <div class="lenta__comment_field">
              <textarea rows="1"
                oninput={(e) => {
                  console.log('=a533d5=', this.Static.data)
                  this.Static.data.text = e.target.value
                }}
              ></textarea>
            </div>
            <button class="lenta__comment_button"
              onclick={() => {
                let data = {
                  uuid: this.Variable.myInfo.uuid,
                  action: "insert",
                  data: this.Static.data
                }
                fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify(data),
                })
              }}
            >
              <img src={sendMessage} />
            </button>
          </div>

          {
            item.comments.length > 0
              ?
              <div class="user-comment">
                <div class="user-comment__list">
                  {
                    item.comments?.map((comment) => {
                      return (
                        <div>
                          <div class="user-comment__item">
                            <a class="user-comment__avatar avatar" href="">
                              <div class="avatar__icon">
                                <img class="avatar__photo"
                                  src={comment.author.avatar?.name
                                    ?
                                    `/assets/upload/avatar/${comment.author.avatar?.name}`
                                    :
                                    { avatarDefault }
                                  }
                                />
                                <img class="avatar__frame"
                                  src={comment.author.frame?.name
                                    ?
                                    `/assets/images/lenta/${comment.author.frame?.name}`
                                    :
                                    frameDefault
                                  }
                                />
                                {
                                  comment.author.status?.team
                                    ?
                                    <img class="avatar__team"
                                      src={comment.author.status?.team
                                        ?
                                        teamLogo
                                        :
                                        null
                                      }
                                    />
                                    :
                                    <div>
                                      <div class="avatar__level">
                                        <img src={leveGray} />
                                        <span>{comment.author.statistic.level}</span>
                                      </div>
                                    </div>
                                }
                              </div>
                              <div class="user-comment__avatar_info">
                                <div class="user-comment__avatar_name">{comment.author.nickname}</div>
                                <span class="user-comment__avatar_time">{this.Services.functions.dateFormat(comment.showdate, "time")}</span>
                              </div>
                            </a>
                            <div class="user-comment__body">
                              <span>
                                {this.Services.functions.editText(comment.text, { paragraph: true, clear: true, html: true })}
                              </span>
                            </div>
                            <div class="user-comment__statistic comment-statistic">
                              <div class="comment-statistic__rating">
                                <img src={dislike} />
                                <span>{comment.rating}</span>
                                <img src={like} />
                              </div>
                              <div class="user-comment__settings">
                                <img src={points} />
                              </div>
                            </div>
                          </div>
                          {
                            comment.comments?.map((comm) => {
                              return (
                                <div class="user-comment__item" style="margin: 0 10px">
                                  <a class="user-comment__avatar avatar" href="">
                                    <div class="avatar__icon">
                                      <img class="avatar__photo"
                                        src={comm.author.avatar?.name
                                          ?
                                          `/assets/upload/avatar/${comm.author.avatar?.name}`
                                          :
                                          { avatarDefault }
                                        }
                                      />
                                      <img class="avatar__frame"
                                        src={comm.author.frame?.name
                                          ?
                                          `/assets/images/lenta/${comm.author.frame?.name}`
                                          :
                                          frameDefault
                                        }
                                      />
                                      {
                                        comm.author.status?.team
                                          ?
                                          <img class="avatar__team"
                                            src={comm.author.status?.team
                                              ?
                                              teamLogo
                                              :
                                              null
                                            }
                                          />
                                          :
                                          <div>
                                            <div class="avatar__level">
                                              <img src={leveGray} />
                                              <span>{comm.author.statistic.level}</span>
                                            </div>
                                          </div>
                                      }
                                    </div>
                                    <div class="user-comment__avatar_info">
                                      <div class="user-comment__avatar_name">{comm.author.nickname}</div>
                                      <span class="user-comment__avatar_time">{this.Services.functions.dateFormat(comm.showdate, "time")}</span>
                                    </div>
                                  </a>
                                  <div class="user-comment__body">
                                    <span>
                                      {this.Services.functions.editText(comm.text, { paragraph: true, clear: true, html: true })}
                                    </span>
                                  </div>
                                  <div class="user-comment__statistic comment-statistic">
                                    <div class="comment-statistic__rating">
                                      <img src={dislike} />
                                      <span>{comm.rating}</span>
                                      <img src={like} />
                                    </div>
                                    <span class="user-comment__answer"
                                      onclick={(e) => {
                                        let el = e.currentTarget
                                        el.parentElement.parentElement.lastChild.style = "display: flex"
                                      }}
                                    >Ответить</span>
                                    <div class="user-comment__settings">
                                      <img src={points} />
                                    </div>
                                  </div>
                                  <div class="lenta__comment user-comment__form">
                                    <div class="lenta__comment_field">
                                      <textarea rows="1" data-max-height="200" data-scroll-last="48"></textarea>
                                    </div>
                                    <button class="lenta__comment_button">
                                      <img src={sendMessage} />
                                    </button>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              :
              null
          }
        </div>
      </section>
    </div>
  )
}