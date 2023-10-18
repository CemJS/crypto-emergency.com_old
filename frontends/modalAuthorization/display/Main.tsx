import { Cemjsx } from "cemjs-all"
import email from '@svg/modalMessage/icon_email.svg'
import lock from "@svg/modalRegistration/lock.svg"
import eye from "@svg/modalRegistration/eye.svg"
import eyeSlash from "@svg/modalRegistration/eye-slash.svg"

export default function () {
    return (
        <main class="modalWindow_main">
            <div class="modalAuth">
                <div class={[
                    "modalWindow_field",
                    this.Static.form.email.value.length ? "modalWindow_field__valid" : null,
                    this.Static.form.email.error ? "modalWindow_field__error" : null,
                    this.Static.form.email.valid ? "modalWindow_field__success" : null
                ]}>
                    <input
                        type="email"
                        required
                        autocomplete="off"
                        oninput={(e: any) => {
                            this.Static.form.email.value = e.target.value;
                            this.Services.functions.formEmail(this.Static.form.email)
                            this.fn("checkFrom")
                            this.init()
                        }} />
                    <div class="modalWindow_field_labelLine">
                        <img src={email}></img>
                        <span>{this.Static.form.email.placeholder}</span>
                    </div>
                    <p class="modalWindow_field__status" style="color:#E84142">{this.Static.form.email.error}</p>
                </div>
                <div
                    class={[
                        "modalWindow_field",
                        this.Static.form.pass.value.length ? "modalWindow_field__valid" : null
                    ]}>
                    <input
                        type="password"
                        required
                        oninput={(e: any) => {
                            this.Static.form.pass.value = e.target.value;
                            this.init()
                        }}
                    />
                    <div class="modalWindow_field_labelLine">
                        <img src={lock}></img>
                        <span>{this.Static.form.pass.placeholder}</span>
                    </div>

                    <div class="modalWindow_field__tooltip">
                        <img
                            alt="Показать пароль"
                            class="modalWindow_field__eye"
                            src={this.Static.passType == "password" ? eye : eyeSlash}
                            onclick={() => {
                                if (this.Static.passType == "password") {
                                    this.Static.passType = "text"
                                } else {
                                    this.Static.passType = "password"
                                }
                                this.init()
                            }}
                        />
                    </div>
                </div>
                <div class="f-col">
                    <p>При использовании платформы вы соглашаетесь с <a href="/policy" class="link-beauty">политикой сайта.</a></p>
                    <span
                        class="link-beauty"
                        onclick={() => this.Fn.initOne({ name: "modalRecoverPass" })}
                    >Забыли пароль?</span>
                </div>

            </div>
        </main>

        //             <form>
        //                 <div class="authorization-form">
        //                     <div class="authorization-form__email">
        //                         <label>
        //                             {
        //                                 this.Static.buttonActive == "email"
        //                                     ?
        //                                     this.Static.email.label
        //                                     :
        //                                     this.Static.phone.label
        //                             }
        //                         </label>
        //                         {
        //                             this.Static.buttonActive == 'email'
        //                                 ?
        //                                 <div>
        //                                     <div class="error">
        //                                         <span style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "display: block" : "display: none"}>Неверный e-mail</span>
        //                                     </div>
        //                                     <div class="authorization-form__email_input email">
        //                                         <input
        //                                             ref="email"
        //                                             type="text"
        //                                             value={this.Static.email.value}
        //                                             placeholder={this.Static.email.placeholder}
        //                                             style={this.Static.email?.value.length > 0 && this.Static.email.valid == false ? "border-color: red" : this.Static.email.valid == true ? "border-color: green" : null}
        //                                             oninput={(e) => {
        //                                                 if (this.Services.functions.validateEmail(e.target.value)) {
        //                                                     this.Static.email.valid = true
        //                                                 } else {
        //                                                     this.Static.email.valid = false
        //                                                 }
        //                                                 this.Static.email.value = e.target.value
        //                                                 this.fn("checkForm")
        //                                                 this.init()
        //                                             }}
        //                                         />
        //                                     </div>
        //                                 </div>
        //                                 :
        //                                 <div class="authorization-form__phone">
        //                                     <div class="phone phone__country">
        //                                         <div class="phone__country_selected"
        //                                             onclick={() => {
        //                                                 this.Ref.elemCountry.hidden = !this.Ref.elemCountry.hidden
        //                                             }}
        //                                         >
        //                                             <span>
        //                                                 +{this.Static.phone.code}
        //                                                 <img src={blank} class={["flag", `flag-${this.Static.phone.abbr}`]} />
        //                                             </span>
        //                                         </div>
        //                                         <div
        //                                             class="phone__country_options"
        //                                             hidden={true}
        //                                             ref="elemCountry"
        //                                         >
        //                                             <ul>
        //                                                 {
        //                                                     phone.map((item: any) => {
        //                                                         return (
        //                                                             <li class="phone__country_item"
        //                                                                 onClick={() => {
        //                                                                     this.Static.phone.code = item.code
        //                                                                     this.Static.phone.abbr = item.abbr
        //                                                                     this.Ref.elemCountry.hidden = true
        //                                                                     this.init()
        //                                                                 }}
        //                                                             >
        //                                                                 <span>
        //                                                                     +{item.code}
        //                                                                     <img src={blank} class={`flag flag-${item.abbr}`} />
        //                                                                 </span>
        //                                                                 {item.text}
        //                                                             </li>
        //                                                         )
        //                                                     })
        //                                                 }
        //                                             </ul>
        //                                         </div>
        //                                     </div>
        //                                     <div class="phone__number">
        //                                         <input
        //                                             ref="phone"
        //                                             type="number"
        //                                             placeholder="99900000000"
        //                                             value={this.Static.phone.value}
        //                                             style={this.Static.phone.value.length > 0 && this.Static.phone.value.length < 7 || this.Static.phone.value.length > 15 && this.Static.phone.valid == false ? "border-color: red" : this.Static.phone.valid == true ? "border-color: green" : null}
        //                                             oninput={(e) => {
        //                                                 if (e.target.value.length > 6 && e.target.value.length < 16) {
        //                                                     this.Static.phone.valid = true
        //                                                 } else {
        //                                                     this.Static.phone.valid = false
        //                                                 }
        //                                                 this.Static.phone.value = e.target.value
        //                                                 this.fn("checkForm")
        //                                                 this.init()
        //                                             }}
        //                                         />
        //                                     </div>
        //                                 </div>
        //                         }
        //                     </div>
        //                     <div class="authorization-form__password">
        //                         <img class="lock" src={lock} />
        //                         <input
        //                             ref="password"
        //                             type={this.Static.viewPassword ? "text" : "password"}
        //                             placeholder={this.Static.pass.placeholder}
        //                             style={this.Static.pass.value.length > 1 ? "border-color: green" : null}
        //                             oninput={(e) => {
        //                                 this.Static.pass.value = e.target.value
        //                                 if (this.Static.pass.value.length > 1) {
        //                                     this.Static.pass.valid = true
        //                                 } else {
        //                                     this.Static.pass.valid = false
        //                                 }
        //                                 this.fn("checkForm")
        //                                 this.init()
        //                             }}
        //                         />
        //                         <img class="eye" src={this.Static.viewPassword ? eyeSlash : eye}
        //                             onclick={() => {
        //                                 this.Static.viewPassword = !this.Static.viewPassword
        //                             }}
        //                         />
        //                     </div>
        //                     <div class="authorization-form__agree">
        //                         <span>
        //                             {`При использовании платформы вы соглашаетесь с `}
        //                             <a class="agree" href="" target="_blank">политикой сайта</a>
        //                         </span>
        //                     </div>
        //                     <div class="authorization-form__forgot">
        //                         <button class="agree"
        //                             onclick={() => {
        //                                 this.clearData()
        //                                 this.Fn.initOne({
        //                                     name: "modalRecoverPass"
        //                                 })
        //                             }}
        //                         >Забыли пароль?</button>
        //                     </div>
        //                 </div>
        //                 <div class="authorization-form__footer">
        //                     <div class={["button", "button_gradient", "button_auth",
        //                         !this.Static.isValid ? "button_inactive" : null
        //                     ]}>
        //                         <span>
        //                             Вход
        //                         </span>
        //                     </div>
        //                     <button
        //                         class="button authorization-form__registration"
        //                         onclick={() => {
        //                             this.clearData()
        //                             this.Fn.initOne({
        //                                 name: "modalRegistration"
        //                             })
        //                         }}
        //                     >
        //                         <span>
        //                             Регистрация
        //                         </span>
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    )
}