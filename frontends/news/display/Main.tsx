import { Cemjsx } from "cemjs-all"
import CategoryLine from "./CategoryLine"
import comments from "@svg/news/comments.svg"


const RenderItems = function ({ items }) {

  if (!items.length) {
    return (
      <div class="news__inner">
        нет записей
      </div>
    )
  }
  return (
    <div>
      <div class="news__inner">
        {
          items.map((item, index) => {
            return (
              <a class="news__item"
                href={`/news/show/${item._id}`}
                onclick={(e: any) => {
                  this.Static.record = item
                  this.Fn.link(e)
                }}
                isVisible={() => {
                  if (index == items.length - 3) {
                    this.Static.moreid = items[items.length - 1]._id
                    this.fn("addEvent")
                  }
                }}
                >
                <div class="news__item_image">
                  <img src={`/assets/upload/news/${item.image}`} />
                </div>
                <div class="news__item_title">{item.title}</div>
                <div class="news__item_description">{item.preview}</div>
                <div class="news__item_statistic">
                  <span>
                    <img src={comments} alt="Комментарии." />
                    {item.statistic.comments}
                  </span>
                  <span>{this.Services.functions.dateFormat(item.showDate)}</span>
                </div>
              </a>
            )
          })
        }
      </div>
    </div>
  )
}

export default function () {
  return (
    <section class="page">
      <CategoryLine items={this.Static.category} />
      <div class="wrapper">
        <RenderItems items={this.Static.records} />
      </div>
    </section>
  )
}