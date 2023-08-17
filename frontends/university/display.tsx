import { Cemjsx } from "cemjs-all"
import logo from '@svg/university/logo.svg'
import test from '@images/university/test.jpeg'
import reviews from '@images/university/reviews.jpeg'
import soon from '@images/university/soon.png'

export const display = function () {
  return (
    <div class="page">
      <div class="university">
        <div class="wrapper">
          <div class="university__container">
            <div class="university__header">
              <div class="university__header_title">
                <img src={logo} />
                <p>Крипто университет</p>
              </div>
              <button class="university__header_courses btn btn_gradient">
                <span>Все курсы</span>
              </button>
            </div>
            <div class="university__slogan">
              <h3>Откройте новые горизонты с Крипто университетом: образование, инновации, успех!</h3>
            </div>
            <div class="university__category university-category">
              {
                this.Static.records?.map((item) => {
                  return (
                    <a class="university-category__item">
                      <div class="university-category__item_title">
                        {item.name}
                        <p class="subtitle">{item.title}</p>
                      </div>
                      <img class="university-category__item_image" src={`/assets/upload/worldPress/${item.background}`} />
                      <p class="description">{item.description}</p>
                    </a>
                  )
                })
              }
            </div>
            <div class="university__test">
              <div class="university__test_container">
                <div class="university__test_title">
                  Узнай, какая профессия наиболее подходит именно тебе, с помощью нашего теста на профориентацию
                </div>
                <img class="university__test_background" src={test} alt="Фон." />
                <div class="university__test_button">
                  <span>Пройти бесплатно</span>
                </div>
                <img class="university__test_soon" src={soon} alt="Скоро." />
              </div>
            </div>
            <div class="university__reviews">
              <div class="university__reviews_title">Отзывы</div>
              <p class="university__reviews_soon">
                <span>Отзывы ещё не оставлены</span>
              </p>
              <img src="" alt="Фон." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}