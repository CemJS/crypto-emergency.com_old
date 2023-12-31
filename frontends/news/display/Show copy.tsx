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

let item, eventSource1

export default function () {
  // console.log('=SHOW=', this._ListsEventSource)
  // if (this.Static.recordsUpdate) {
  //   item = this.Static.recordsUpdate
  // } else {
  //   item = this.Static.recordsShow
  // }

  if (this._ListsEventSource.length == 1) {
    eventSource1 = this.eventSource(`Comments?uuid=${this.Variable.myInfo.uuid}&id=${item._id}`)

    eventSource1.addEventListener('add', ({ data }) => {
      if (!this.Static.recordsComments) {
        this.Static.recordsComments = []
      }
      let record = JSON.parse(data)
      this.Static.recordsComments.push(record)
      console.log('=9f6ead=', this.Static.recordsComments)
      this.init()
    });
  }

  this.Static.recordsComments?.forEach((item, i) => {
    if (this._ListsEventSource.length == 2 + i) {
      let eventSource2 = this.eventSource(`Comments?uuid=${this.Variable.myInfo.uuid}&idComm=${this.Static.recordsComments[i]._id}`)

      eventSource2.addEventListener('add', ({ data }) => {
        if (!this.Static.recordsCommentsInner) {
          this.Static.recordsCommentsInner = []
        }
        let record = JSON.parse(data)
        this.Static.recordsCommentsInner.push(record)
        console.log('=Comments=', this.Static.recordsCommentsInner)
        this.init()
      });
    }
  });

  console.log('=Comments!=', this.Static.recordsCommentsInner)

  return (
    <div class="news-show">
      <div class="back">
        <a href="/news" class="back_arrow"
          onclick={(e) => {
            this.Static.page = "main"
            this.Fn.link(e)
          }}
        >
          <img
            src={back}>
          </img>
        </a>
        <div
          class="tool"
          onclick={() => {
            this.Fn.initOne({
              name: "modalTool", ifOpen: (front) => {
                setTimeout(() => {
                  front.clearData()
                }, 500);
              },
              data: {
                data: {
                  page: "page"
                }
              },
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
                  this.Static.text = e.target.value
                }}
              ></textarea>
            </div>
            <button class="lenta__comment_button"
              onclick={() => {
                let data = {
                  _action: "insert",
                  // author: this.Variable.myInfo._id,
                  author: "63c7f6063be93e984c962b75",
                  text: this.Static.text,
                  table: "News",
                  tableID: item._id,
                  rating: 1
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
            this.Static.recordsComments?.length > 0
              ?
              <div class="user-comment">
                <div class="user-comment__list" ref="commentList">
                  {
                    this.Static.recordsComments?.map((comment) => {
                      return (
                        <div>
                          <div class="user-comment__item">
                            <a class="user-comment__avatar avatar" href="">
                              <div class="avatar__icon">
                                <img class="avatar__photo"
                                  src={comment.authorFull.avatar?.name
                                    ?
                                    `/assets/upload/avatar/${comment.authorFull.avatar?.name}`
                                    :
                                    { avatarDefault }
                                  }
                                />
                                <img class="avatar__frame"
                                  src={comment.authorFull.frame?.name
                                    ?
                                    `/assets/images/lenta/${comment.authorFull.frame?.name}`
                                    :
                                    frameDefault
                                  }
                                />
                                {
                                  comment.authorFull.status?.team
                                    ?
                                    <img class="avatar__team"
                                      src={comment.authorFull.status?.team
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
                                        <span>{comment.authorFull.statistic.level}</span>
                                      </div>
                                    </div>
                                }
                              </div>
                              <div class="user-comment__avatar_info">
                                <div class="user-comment__avatar_name">{comment.authorFull.nickname}</div>
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
                                <img src={dislike}
                                  onclick={() => {
                                    let data = {
                                      _action: "update",
                                      author: "63c7f6063be93e984c962b75",
                                      rating: -1,
                                      type: "minus",
                                      id: comment._id
                                    }
                                    fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                      method: "POST",
                                      headers: { "content-type": "application/json" },
                                      body: JSON.stringify(data),
                                    })
                                  }}
                                />
                                <span>{comment.statistic.rating}</span>
                                <img src={like}
                                  onclick={() => {
                                    let data = {
                                      _action: "update",
                                      author: "63c7f6063be93e984c962b75",
                                      rating: 1,
                                      type: "plus",
                                      id: comment._id
                                    }
                                    fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                      method: "POST",
                                      headers: { "content-type": "application/json" },
                                      body: JSON.stringify(data),
                                    })
                                  }}
                                />
                              </div>
                              <span class="user-comment__answer"
                                onclick={(e) => {
                                  let elemr = this.Ref.commentList.childNodes
                                  for (let i = 0; i < elemr.length; i++) {
                                    for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                      elemr[i].childNodes[y].lastChild.style = "display: none"
                                    }
                                  }

                                  let el = e.currentTarget
                                  el.parentElement.parentElement.lastChild.style = "display: flex"
                                  el.parentElement.parentElement.lastChild.firstChild.firstChild.focus()
                                }}
                              >Ответить</span>
                              <div class="user-comment__settings"
                                onclick={() => {
                                  this.Fn.initOne({
                                    name: "modalTool", ifOpen: (front) => {
                                      setTimeout(() => {
                                        front.clearData()
                                      }, 500);
                                    },
                                    data: {
                                      data: {
                                        page: "comments",
                                        id: comment._id,
                                        collection: "Comments",
                                        table: "News",
                                        tableID: item._id,
                                        rating: -1,
                                      }
                                    },
                                  })
                                }}
                              >
                                <img src={points} />
                              </div>
                            </div>
                            <div class="lenta__comment user-comment__form">
                              <div class="lenta__comment_field">
                                <textarea rows="1" data-max-height="200" data-scroll-last="48"
                                  oninput={(e) => {
                                    this.Static.textCom = e.target.value
                                  }}
                                ></textarea>
                              </div>
                              <button class="lenta__comment_button"
                                onclick={() => {
                                  let data = {
                                    _action: "insert",
                                    author: "63c7f6063be93e984c962b75",
                                    text: this.Static.textCom,
                                    table: "News",
                                    commentId: comment._id,
                                    rating: 1,
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
                          </div>
                          {
                            this.Static.recordsCommentsInner?.map((comm, index) => {
                              console.log('=5c62bc=', comm.commentId)
                              if (comm.commentId != comment._id) {
                                return
                              }
                              return (
                                <div class="user-comment__item" style="margin: 0 10px">
                                  <a class="user-comment__avatar avatar" href="">
                                    <div class="avatar__icon">
                                      <img class="avatar__photo"
                                        src={comm.authorFull.avatar?.name
                                          ?
                                          `/assets/upload/avatar/${comm.authorFull.avatar?.name}`
                                          :
                                          { avatarDefault }
                                        }
                                      />
                                      <img class="avatar__frame"
                                        src={comm.authorFull.frame?.name
                                          ?
                                          `/assets/images/lenta/${comm.authorFull.frame?.name}`
                                          :
                                          frameDefault
                                        }
                                      />
                                      {
                                        comm.authorFull.status?.team
                                          ?
                                          <img class="avatar__team"
                                            src={comm.authorFull.status?.team
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
                                              <span>{comm.authorFull.statistic.level}</span>
                                            </div>
                                          </div>
                                      }
                                    </div>
                                    <div class="user-comment__avatar_info">
                                      <div class="user-comment__avatar_name">{comm.authorFull.nickname}</div>
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
                                      <img src={dislike}
                                        onclick={() => {
                                          let data = {
                                            _action: "update",
                                            author: "63c7f6063be93e984c962b75",
                                            rating: -1,
                                            type: "minus",
                                            id: comm._id
                                          }
                                          fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                            method: "POST",
                                            headers: { "content-type": "application/json" },
                                            body: JSON.stringify(data),
                                          })
                                        }}
                                      />
                                      <span>{comm.statistic.rating}</span>
                                      <img src={like}
                                        onclick={() => {
                                          let data = {
                                            _action: "update",
                                            author: "63c7f6063be93e984c962b75",
                                            rating: 1,
                                            type: "plus",
                                            id: comm._id
                                          }
                                          fetch(`/api/events/Comments?uuid=${this.Variable.myInfo.uuid}`, {
                                            method: "POST",
                                            headers: { "content-type": "application/json" },
                                            body: JSON.stringify(data),
                                          })
                                        }}
                                      />
                                    </div>
                                    <span class="user-comment__answer"
                                      onclick={(e) => {
                                        let elemr = this.Ref.commentList.childNodes
                                        for (let i = 0; i < elemr.length; i++) {
                                          for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                            elemr[i].childNodes[y].lastChild.style = "display: none"
                                          }
                                        }

                                        let el = e.currentTarget
                                        el.parentElement.parentElement.lastChild.style = "display: flex;"
                                        el.parentElement.parentElement.lastChild.firstChild.firstChild.focus()
                                      }}
                                    >Ответить</span>
                                    <div class="user-comment__settings"
                                      onclick={() => {
                                        this.Fn.initOne({
                                          name: "modalTool", ifOpen: (front) => {
                                            setTimeout(() => {
                                              front.clearData()
                                            }, 500);
                                          },
                                          data: {
                                            data: {
                                              page: "comments",
                                              id: comm._id,
                                              collection: "Comments",
                                              table: "News",
                                              tableID: item._id,
                                              rating: -1,
                                            }
                                          },
                                        })
                                      }}
                                    >
                                      <img src={points} />
                                    </div>
                                  </div>
                                  <div class="lenta__comment user-comment__form">
                                    <div class="lenta__comment_field">
                                      <textarea rows="1" data-max-height="200" data-scroll-last="48"
                                        oninput={(e) => {
                                          this.Static.textCom = e.target.value
                                        }}
                                      ></textarea>
                                    </div>
                                    <button class="lenta__comment_button"
                                      onclick={() => {
                                        let data = {
                                          _action: "insert",
                                          author: "63c7f6063be93e984c962b75",
                                          text: this.Static.textCom,
                                          table: "News",
                                          commentId: comment._id,
                                          rating: 1,
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