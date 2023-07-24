import { Cemjsx } from "cemjs-all"
import up_arrow from '@svg/courseLine/up_arrow.svg'
import networking from '@svg/forum/networking.svg'
import communication from '@svg/forum/communication.svg'
import innovation  from '@svg/forum/innovation.svg'
import inspiration from '@svg/forum/inspiration.svg'
import education from '@svg/forum/education.svg'
import bg4  from '@images/forum/bg4.png'
import speaker1 from '@images/forum/speakers/speaker1.jpg'
import speaker2 from '@images/forum/speakers/speaker2.jpg'
import speaker3 from '@images/forum/speakers/speaker3.jpg'
import speaker4 from '@images/forum/speakers/speaker4.jpg'
import speaker5 from '@images/forum/speakers/speaker5.jpg'
import speaker6 from '@images/forum/speakers/speaker6.jpg'
import speaker7 from '@images/forum/speakers/speaker7.jpg'
import speaker8 from '@images/forum/speakers/speaker8.png'
import speaker9 from '@images/forum/speakers/speaker9.jpg'
import speaker10 from '@images/forum/speakers/speaker10.jpg'
import speaker11 from '@images/forum/speakers/speaker11.jpg'
import speaker12 from '@images/forum/speakers/speaker12.jpg'
import speaker13 from '@images/forum/speakers/speaker13.png'
import speaker14 from '@images/forum/speakers/speaker14.jpg'
import speaker15 from '@images/forum/speakers/speaker15.jpg'
import speaker16 from '@images/forum/speakers/speaker16.jpg'
import speaker17 from '@images/forum/speakers/speaker17.jpg'
import speaker18 from '@images/forum/speakers/speaker18.jpg'
import speaker19 from '@images/forum/speakers/speaker19.jpg'
import speaker20 from '@images/forum/speakers/speaker20.jpg'
import speaker21 from '@images/forum/speakers/speaker21.jpg'
import speaker22 from '@images/forum/speakers/speaker22.jpg'
import speaker23 from '@images/forum/speakers/speaker23.jpg'
import speaker24 from '@images/forum/speakers/speaker24.jpg'
import speaker25 from '@images/forum/speakers/speaker25.jpg'
import speaker26 from '@images/forum/speakers/speaker26.jpg'
import speaker27 from '@images/forum/speakers/speaker27.jpg'
import speaker28 from '@images/forum/speakers/speaker28.jpg'
import speaker29 from '@images/forum/speakers/speaker29.jpg'
import speaker30 from '@images/forum/speakers/speaker30.jpg'


import partner1 from '@images/forum/partners/partner1.png'
import partner2 from '@images/forum/partners/partner2.svg'
import partner3 from '@images/forum/partners/partner3.png'
import partner4 from '@images/forum/partners/partner4.png'
import partner5 from '@images/forum/partners/partner5.png'
import partner6 from '@images/forum/partners/partner6.png'
import partner7 from '@images/forum/partners/partner7.png'
import partner8 from '@images/forum/partners/partner8.png'
import partner9 from '@images/forum/partners/partner9.png'
import partner10 from '@images/forum/partners/partner10.png'
import partner11 from '@images/forum/partners/partner11.png'
import partner12 from '@images/forum/partners/partner12.png'
import partner13 from '@images/forum/partners/partner13.png'
import partner14 from '@images/forum/partners/partner14.png'
import partner15 from '@images/forum/partners/partner15.png'
import partner16 from '@images/forum/partners/partner16.svg'
import partner17 from '@images/forum/partners/partner17.png'
import partner18 from '@images/forum/partners/partner18.png'
import partner19 from '@images/forum/partners/partner19.png'
import partner20 from '@images/forum/partners/partner20.png'
import partner21 from '@images/forum/partners/partner21.png'
import partner22 from '@images/forum/partners/partner22.png'
import partner23 from '@images/forum/partners/partner23.png'
import partner24 from '@images/forum/partners/partner24.png'
import partner25 from '@images/forum/partners/partner25.png'
import partner26 from '@images/forum/partners/partner26.png'
import partner27 from '@images/forum/partners/partner27.png'



interface Course {
  _id: string
  nameCoin: string
  currentCourse: number
  change: number
}
const speakers_2 = [
  {
    id : 14,
    photo: speaker14,
    speaker: 'Сергей Павлович',
    about_speaker: 'Люди PRO',
    show: true
  },
  {
    id : 2,
    photo: speaker2,
    speaker: 'Андрей Тугарин',
    about_speaker: 'CEO компании GMT Legal',
    show: true
  },
  {
    id : 6,
    photo: speaker6,
    speaker: 'Вероника Близнец',
    about_speaker: 'Адвокат, юрист-международник',
    show: true
  },
  {
    id : 7,
    photo: speaker7,
    speaker: 'Mr. Sailer YouTube',
    about_speaker: 'Блогер журналист',
    show: true
  },
  {
    id : 29,
    photo: speaker29,
    speaker: 'Олег Иванов',
    about_speaker: 'Серийный предприниматель, инвестор',
    show: true
  },
  {
    id : 8,
    photo: speaker8,
    speaker: 'Валерий Осипов',
    about_speaker: 'ArtEmotioChain',
    show: false
  }
]

const speakers = [
  {   
    id : 3,
    photo: speaker3,
    speaker: 'Александр Бражников',
    about_speaker: 'Исполнительный директор РАКИБ',
    show: true
  },
  {
    id : 27,
    photo: speaker27,
    speaker: 'Павел Гудимов',
    about_speaker:'Директор по развитию РАКИБ',
    show: true
  },
  {
    id : 5,
    photo: speaker5,
    speaker: 'Алексей Зюзин',
    about_speaker: 'Организатор Crypto Summit',
    show: true
  },
  {
    id : 15,
    photo: speaker15,
    speaker: 'Владимир Туров',
    about_speaker: 'Turov Invest',
    show: true
  },
  {
    id : 1,
    photo: speaker1,
    speaker: 'Ян Кривоносов',
    about_speaker: 'CEO Crypto Emergency',
    show: true
  },
  {
    id : 14,
    photo: speaker14,
    speaker: 'Сергей Павлович',
    about_speaker: 'Люди PRO',
    show: true
  },
  {
    id : 2,
    photo: speaker2,
    speaker: 'Андрей Тугарин',
    about_speaker: 'CEO компании GMT Legal',
    show: false
  },
  {
    id : 6,
    photo: speaker6,
    speaker: 'Вероника Близнец',
    about_speaker: 'Адвокат, юрист-международник',
    show: false
  },
  {
    id : 7,
    photo: speaker7,
    speaker: 'Mr. Sailer YouTube',
    about_speaker: 'Блогер журналист',
    show: false
  },
  {
    id : 29,
    photo: speaker29,
    speaker: 'Олег Иванов',
    about_speaker: 'Серийный предприниматель, инвестор',
    show: false
  },
  {
    id : 8,
    photo: speaker8,
    speaker: 'Валерий Осипов',
    about_speaker: 'ArtEmotioChain',
    show: false
  },
  {
    id : 9,
    photo: speaker9,
    speaker: 'Александр Изюрьев',
    about_speaker: 'Основатель клуба инвесторов UnionClub',
    show: false
  },
  {
    id : 10,
    photo: speaker10,
    speaker: 'Ярослав Кожухов',
    about_speaker: 'Metis',
    show: false
  },
  {
    id : 25,
    photo: speaker25,
    speaker: 'Кирилл Филимонов',
    about_speaker: 'Основатель Россграм',
    show: false
  },
  {
    id : 30,
    photo: speaker30,
    speaker: 'Владислав Судьин',
    about_speaker: 'Зам. председателя Комиссии по инновациям и инвестициям IFSPD',
    show: false
  },
  {
    id : 12,
    photo:speaker12,
    speaker: 'Вячеслав Носков',
    about_speaker: 'PRO BLOCKCHAIN MEDIA',
    show: false
  },
  {
    id : 26,
    photo: speaker26,
    speaker: 'Бурков Максим',
    about_speaker: 'Основатель группы web3 компаний Pro Blockchain Media',
    show: false
  },
  {
    id : 13,
    photo: speaker13,
    speaker: 'Денис Магданов',
    about_speaker: 'DUMA NETWORK',
    show: false
  },
  {
    id : 17,
    photo: speaker17,
    speaker: 'Сергей Грабский',
    about_speaker: 'Руководитель Ассоциации цифрового развития Краснодарского края',
    show: false
  },
  {
    id : 18,
    photo: speaker18,
    speaker: 'Евгений Сапожников',
    about_speaker: 'Основатель обменника криптовалют Keine-exchange',
    show: false
  },
  {
    id : 19,
    photo: speaker19,
    speaker:'Денис Стригун' ,
    about_speaker: 'CEO WEB3Space',
    show: false
  },
  {
    id : 20,
    photo: speaker20,
    speaker: 'Иван Деркач',
    about_speaker: 'CTO WEB3Space',
    show: false
  },
  {
    id : 21,
    photo: speaker21,
    speaker: 'Дмитрий Романов',
    about_speaker: 'Консультант блокчейн-проектов',
    show: false
  },
  {
    id : 22,
    photo: speaker22,
    speaker: 'Илья Ткаченко',
    about_speaker: 'Криптоэксперт',
    show: false
  },
  {
    id : 23,
    photo: speaker23,
    speaker: 'Тимофей Григоренко',
    about_speaker: 'Майнинг, владелец 1GHS',
    show: false
  },
  {
    id : 24,
    photo: speaker24,
    speaker: 'Лев Пониманский',
    about_speaker: 'Криптоэнтузиаст',
    show: false
  },
  {
    id : 28,
    photo: speaker28,
    speaker: 'Наталья Сазонова',
    about_speaker: 'CEO Rabotavkripte',
    show: false
  }
]

const partners2 = [
  {
    url : "https://www.instagram.com/abrau1870/",
    logo: partner7,
  },
  {
    url : "https://www.instagram.com/barycoffee.nvr/",
    logo: partner8,
  },
  {
    url : "https://hginov.ru/",
    logo: partner9,
  },
  {
    url : "https://ti.turovinvest.ru/",
    logo: partner10,
  },
  {
    url : "https://cryptonews.net/ru/",
    logo: partner11,
  },
  {
    url : "https://ru.beincrypto.com/",
    logo: partner12,
  },
  {
    url : "https://cripta.games/",
    logo: partner13,
  },
  {
    url : "https://www.artemotiochain.ru/",
    logo: partner14,
  },
]
const partners = [
  {
    url : "https://keine-exchange.com/?rid=29633",
    logo: partner1,
  },
  {
    url : "http://тц-черноморский.рф/",
    logo: partner2,
  },
  {
    url : "https://cryptoholding.ru/",
    logo: partner3,
  },
  {
    url : "https://racib.com/",
    logo: partner4,
  },
  {
    url : "https://carding.pro/",
    logo: partner5,
  },
  {
    url : "https://blockchain24.pro/",
    logo: partner6,
  },
  {
    url : "https://www.instagram.com/abrau1870/",
    logo: partner7,
  },
  {
    url : "https://www.instagram.com/barycoffee.nvr/",
    logo: partner8,
  },
  {
    url : "https://hginov.ru/",
    logo: partner9,
  },
  {
    url : "https://ti.turovinvest.ru/",
    logo: partner10,
  },
  {
    url : "https://cryptonews.net/ru/",
    logo: partner11,
  },
  {
    url : "https://ru.beincrypto.com/",
    logo: partner12,
  },
  {
    url : "https://cripta.games/",
    logo: partner13,
  },
  {
    url : "https://www.artemotiochain.ru/",
    logo: partner14,
  },
  {
    url : "https://duma.network/",
    logo: partner15,
  },
  {
    url : "https://pro-blockchain.com/crypto-news",
    logo: partner16,
  },
  {
    url : "https://miningmoon.ru/",
    logo: partner17,
  },
  {
    url : "https://t.me/MetisDAO_ru",
    logo: partner18,
  },
  {
    url : "https://getblock.net/how-it-works",
    logo: partner19,
  },
  {
    url : "https://web3space.io/bot",
    logo: partner20,
  },
  {
    url : "https://7winds.mobi/",
    logo: partner21,
  },
  {
    url : "https://t.me/channel_SoulMate",
    logo: partner22,
  },
  {
    url : "https://kollegiya-sokolov.ru/",
    logo: partner23,
  },
  {
    url : "https://daogogreen.com/",
    logo: partner24,
  },
  {
    url : "https://rossgram.ru/",
    logo: partner25,
  },
  {
    url : "https://altcoinlog.com/",
    logo: partner26,
  },
  {
    url : "https://t.me/unionclub_chat",
    logo: partner27,
  },
]


const contentAbout = [
  {
    img:'',
    title: 'Crypto Юг 2023',
    text: 'Прекрасная возможность провести время приятно и с пользой, открыть для себя новые возможности, повысить экспертность и увеличить доход.'
  },

  {
    img: education,
    title: 'Образование',
    text: 'Форум предоставляет доступ к содержательным беседам, семинарам и панельным дискуссиям о последних тенденциях и разработках в индустрии криптовалют.'
  },
  {
    img: communication,
    title: 'Живое общение',
    text: 'Возможность в живую пообщаться с любимым экспертом или с другими участниками и профессионалами крипторынка.'
  },
  {
    img: networking,
    title: 'Нетворкинг',
    text: 'Еесли вы ищите перспективные проекты для поддержки или участия, наш форум предоставляет отличную возможность встретиться и пообщаться с нужными людьми.'
  },
  {
    img: innovation,
    title: 'Инновации',
    text: 'Ты можешь ознакомиться с передовыми технологиями и инновационными решениями, которые формируют будущее индустрии криптовалют.'
  },
  {
    img: inspiration,
    title: 'Вдохновение ',
    text: 'На форуме выступают дальновидные спикеры, которые могут вдохновить тебя вывести собственные идеи и проекты на новый уровень.'
  },
]

export const display = function () {

    return (

      <div class="forum">
        <section class="forum_preview">
          <div class="wrapper">
            <div class="forum_preview_about">
              <h1>Crypto ЮГ</h1>
            </div>
          </div>
        </section>
        <div class="wrapper">
          <div class="page page__container ">
            <section class="about_section">
              <div class="items_about">
                {
                  contentAbout.map((item, index)=>{
                    return(
                      <div class="item_about">
                        <div class='head'> 
                          <img src={item.img} alt="img" />
                          <h5>{item.title}</h5>  
                        </div>
                        <p>{item.text}</p>
                      </div>
                    )
                  })
                }
              </div>
            </section>
              <section class="event_section">
              <h4>Спикеры</h4>
              <div class="events_list">
                <div class="tabs">
                  <span class={['tabs_year', this.Static.tabName == 'CryptoЮГ2023' ? 'active_year' : null]}
                  onclick={()=>{
                    this.Static.tabName = 'CryptoЮГ2023';
                    this.init();

                  }}
                  >
                    CryptoЮГ2023</span>
                  <span class={['tab_year', this.Static.tabName == 'CryptoЮГ2022' ? 'active_year' : null]}
                  onclick={()=>{
                    this.Static.tabName = 'CryptoЮГ2022';
                    this.init();
                  }}  
                  >
                    CryptoЮГ2022</span>
                </div>
                <div class={["speakers", this.Static.tabName == 'CryptoЮГ2023' ? null : "hidden"  ]}>
                  {
                    speakers.map((item, index)=>{
                      return(
                        <div class={["speaker", item.show ? null : "hidden"]}>
                          <div class='photo'>
                            <img src={item.photo} alt="img" />
                          </div>
                          <div class='speaker_about'>
                            <h3>{item.speaker}</h3>
                            <p>{item.about_speaker}</p>
                          </div>
                        </div>
                      )
                    })
                  }

                  <div 
                    class="show_all"
                    ref="button"
                    onclick={()=>{
                      this.Ref.button.classList.add('hidden')
                      speakers.forEach((item, index)=>{
                        item.show = true
                      })
                      this.init()
                    }}
                  >
                    <span type="button">Показать всех</span>
                  </div>
                </div>
                <div class={["speakers", this.Static.tabName == 'CryptoЮГ2022' ? null : "hidden"  ]}>
                  {
                    speakers_2.map((item, index)=>{
                      return(
                        <div class={["speaker", item.show ? null : "hidden"]}>
                          <div class='photo'>
                            <img src={item.photo} alt="img" />
                          </div>
                          <div class='speaker_about'>
                            <h3>{item.speaker}</h3>
                            <p>{item.about_speaker}</p>
                          </div>
                        </div>
                      )
                    })
                  }
                  <div 
                    class="show_all"
                    ref="button"
                    onclick={()=>{
                      this.Ref.button.classList.add('hidden')
                      speakers_2.forEach((item, index)=>{
                        item.show = true
                      })
                      this.init()
                    }}
                  >
                    <span type="button">Показать всех</span>
                  </div>
                </div>
                
              </div>
            </section>

            <section class="partners_section">
              <h4>Партнеры</h4>
                <div class="tabs">
                  <span class={['tabs_year', this.Static.tabName == 'CryptoЮГ2023' ? 'active_year' : null]}
                  onclick={()=>{
                    this.Static.tabName = 'CryptoЮГ2023';
                    this.init();

                  }}
                  >
                    CryptoЮГ2023</span>
                  <span class={['tab_year', this.Static.tabName == 'CryptoЮГ2022' ? 'active_year' : null]}
                  onclick={()=>{
                    this.Static.tabName = 'CryptoЮГ2022';
                    this.init();
                  }}  
                  >
                    CryptoЮГ2022</span>
                </div>
              <div class = {["partners_list", this.Static.tabName == 'CryptoЮГ2023' ? null : "hidden"  ]}>
                  {
                    partners.map((item, index)=>{
                      return(
                        <a target="_blank" href={item.url} class="partners_list_item">
                          <img src={item.logo} alt="img" />
                        </a>
                      )
                    })
                  }
              </div>
              <div class = "partners_list">
                  {
                    partners2.map((item, index)=>{
                      return(
                        <a target="_blank" href={item.url} class="partners_list_item">
                          <img src={item.logo} alt="img" />
                        </a>
                      )
                    })
                  }
              </div>
            </section>
        </div>
      </div>
      </div>
    )
}