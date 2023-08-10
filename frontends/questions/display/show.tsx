import { Cemjsx } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg"
import avatarDefault from "@images/lenta/avatar_default.png"
import teamLogo from "@svg/lenta/mini_logo.svg"
import leveGray from "@svg/lenta/level_gray.svg"
import views from "@svg/news/views.svg"
import dislike from "@svg/lenta/dislike.svg"
import like from "@svg/lenta/like.svg"
import points from "@svg/lenta/points.svg"
import sendMessage from "@svg/lenta/send_message.svg"
import comments from "@svg/news/comments.svg"

export default function () {

  // console.log('=f229cd=', this._ListsEventSource, `Answers?uuid=${this.Variable.myInfo.uuid}&id=${this.Static.record._id}`)
  if (this._ListsEventSource.length == 1) {
    let eventSource1 = this.eventSource(`Answers?uuid=${this.Variable.myInfo.uuid}&id=${this.Static.record._id}`)

    eventSource1.addEventListener('message', ({ data }) => {
      let records = JSON.parse(data)
      console.log('=641d61=', records)
      this.Static.recordsAnswer = records
      this.init()
    });
  }

  console.log('=57c87c=', this.Static.recordsAnswer)
  let item = this.Static.record
  let answers = this.Static.recordsAnswer
  return (
    <div class="questions-show">
      <div class="wrapper">
        <div class="questions-show__container">
          <div class="questions__user">
            <a class="avatar" href="#">
              <div class="avatar__icon">
                <img class="avatar__photo"
                  src={item.author.avatar?.name
                    ?
                    `/assets/upload/avatar/${item.author.avatar?.name}`
                    :
                    avatarDefault
                  }
                />
                <img class="avatar__frame"
                  src={item.author.frame?.name
                    ?
                    `/assets/images/lenta/${item.author.frame?.name}`
                    :
                    frameDefault
                  }
                />
                {
                  item.author.status?.team
                    ?
                    <img class="avatar__team"
                      src={item.author.status?.team
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
                        <span>{item.author.statistic.level}</span>
                      </div>
                    </div>
                }
              </div>
              <div class="avatar__name">
                <span>{item.author.nickname}</span>
              </div>
            </a>
          </div>
          <p class="questions-show__title">{item.title}</p>
          <p class="questions-show__description">{item.text}</p>
          <div class="questions__item_statistic questions-show__statistic">
            <span>
              <img src={comments} alt="Комментарии." />
              {item.statistic.answer}
            </span>
            <span class="questions-show__statistic_view">
              <img src={views} alt="Просмотры." />
              {item.statistic.view}
            </span>
            <span>{this.Services.functions.dateFormat(item.showDate, "now")}</span>
          </div>
        </div>

        {
            answers?.length > 0
              ?
              <div class="user-comment questions-show__answers">
                <div class="user-comment__list">
                  {
                    answers?.map((answer) => {
                      return (
                        <div>
                          <div class="user-comment__item">
                            <a class="user-comment__avatar avatar" href="">
                              <div class="avatar__icon">
                                <img class="avatar__photo"
                                  src={answer.author.avatar?.name
                                    ?
                                    `/assets/upload/avatar/${answer.author.avatar?.name}`
                                    :
                                    { avatarDefault }
                                  }
                                />
                                <img class="avatar__frame"
                                  src={answer.author.frame?.name && answer.author.frame?.name != "default.svg"
                                    ?
                                    `/assets/images/lenta/${answer.author.frame?.name}`
                                    :
                                    frameDefault
                                  }
                                />
                                {
                                  answer.author.status?.team
                                    ?
                                    <img class="avatar__team"
                                      src={answer.author.status?.team
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
                                        <span>{answer.author.statistic.level}</span>
                                      </div>
                                    </div>
                                }
                              </div>
                              <div class="user-comment__avatar_info">
                                <div class="user-comment__avatar_name">{answer.author.nickname}</div>
                                <span class="user-comment__avatar_time">{this.Services.functions.dateFormat(answer.showdate, "time")}</span>
                              </div>
                            </a>
                            <div class="user-comment__body">
                              <span>
                                {this.Services.functions.editText(answer.text, { paragraph: true, clear: true, html: true })}
                              </span>
                            </div>
                            <div class="user-comment__statistic comment-statistic">
                              <div class="comment-statistic__rating">
                                <img src={dislike} />
                                <span>{answer.statistic.rating}</span>
                                <img src={like} />
                              </div>
                              <div class="user-comment__settings">
                                <img src={points} />
                              </div>
                            </div>
                          </div>
                          {
                            answer.comments.map((comm) => {
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
                                        src={ comm.author.frame?.name && comm.author.frame?.name != "default.svg"
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
    </div>
  )
}