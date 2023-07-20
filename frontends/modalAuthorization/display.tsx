import { Cemjsx } from "cemjs-all"
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import blank from "@images/modalAuthorization/blank.gif"
import phone from 'json/phoneCodes.json'

const sendAuthorization = async function (e) {
  e.preventDefault();
  if (!this.Static.isValid) {
    return false
  }

  let data = {
    pass: this.Static.pass.value,
    email: "",
    phone: "",
    code: ""
  };
  if (this.Static.buttonActive == "email") {
    data.email = this.Static.email.value
  } else {
    data.phone = `+${this.Static.phone.value}`
    // data.phone = `+${Static.phone.code}${this.Static.phone.value}`
    // data.code = Static.phone.abbr
  }
}

export const display = function () {
  console.log('=0b660d=', phone)
  return (
    <div class="modal modal_open">
      <div class="modal__black"
        onclick={() => {
          setTimeout(() => {
            this.clearData()
          }, 5);
        }}
      />
      <div class="modal__container authorization">
        <header class="modal__header authorization__header">
          <h2 class="authorization__title">
            Авторизация
          </h2>
          <button
            class="modal__close"
            type="button"
            onclick={() => {
              setTimeout(() => {
                this.clearData()
              }, 5);
            }}
          />
        </header>
        <div class="modal__body">
          <div class="authorization__mobileoreemail">
            <button class={["button", "button_toggler", this.Static.buttonActive == "email" ? "button_active" : null]}
              onclick={() => {
                this.Static.buttonActive = "email"
              }}
            >
              E-mail
            </button>
            <button class={["button", "button_toggler", this.Static.buttonActive == "phone" ? "button_active" : null]}

            style="margin-right: 0"
              onclick={() => {
                this.Static.buttonActive = "phone"
              }}
            >
              Телефон
            </button>
          </div>
          <form>
            <div class="authorization-form">
              <div class="authorization-form__email">
                <label>
                  {
                    this.Static.buttonActive == "email"
                      ?
                      this.Static.email.label
                      :
                      this.Static.phone.label
                  }
                </label>
                {
                  this.Static.buttonActive == 'email'
                    ?
                    <div class="authorization-form__email_input email">
                      <input type="text" placeholder={this.Static.email.placeholder} />
                    </div>
                    :
                    <div class="authorization-form__phone">
                      <div class="phone phone__country">
                        <div class="phone__country_selected"
                          onclick={() => {
                            this.Ref.elemCountry.hidden = !this.Ref.elemCountry.hidden
                          }}
                        >
                          <span>
                            +{this.Static.phone.code}
                            <img src={blank} class={["flag", `flag-${this.Static.phone.abbr}`]} />
                          </span>
                        </div>
                        <div
                          class="phone__country_options"
                          hidden={true}
                          ref="elemCountry"
                        >
                          <ul>
                            {
                              phone.map((item: any) => {
                                return (
                                  <li class="phone__country_item"
                                    onClick={() => {
                                      this.Static.phone.code = item.code
                                      this.Static.phone.abbr = item.abbr
                                      this.Ref.elemCountry.hidden = true
                                      this.init()
                                    }}
                                  >
                                    <span>
                                      +{item.code}
                                      <img src={blank} class={`flag flag-${item.abbr}`} />
                                    </span>
                                    {item.text}
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                      <div class="phone__number">
                        <input type="text" placeholder="99900000000" />
                      </div>
                    </div>
                }

              </div>
              <div class="authorization-form__password">
                <img class="lock" src={lock} />
                <input type="text" placeholder={this.Static.pass.placeholder} />
                <img class="eye" src={eye} />
              </div>
              <div class="authorization-form__agree">
                <span>
                  {`При использовании платформы вы соглашаетесь с `}
                  <a class="agree" href="" target="_blank">политикой сайта</a>
                </span>
              </div>
              <div class="authorization-form__forgot">
                <a class="agree" href="">Забыли пароль?</a>
              </div>
            </div>
            <div class="authorization-form__footer">
              <div class={["button", "button_gradient", "button_auth",
                !this.Static.isValid ? "button_inactive" : null
              ]}>
                <span>
                  Вход
                </span>
              </div>
              <a
                class="button authorization-form__registration"
                href=""
                onclick={() => {
                  this.Fn.initOne({
                    name: "modalRegistration"
                  })
                }}
              >
                <span>
                  Регистрация
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}