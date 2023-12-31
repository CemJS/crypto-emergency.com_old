import { Cemjsx } from "cemjs-all"
import logoBig from '@svg/logo/CryptoEmergency/logoBig.svg'

export default function () {
    return (
        <header class="header">
            <div class="header__container">
                <div class="header__inner">
                    <nav class="header__menu">
                        <a class="header__logo" href="/" onclick={this.Fn.link}>
                            <img src={logoBig} alt="Crypto Emergency" />
                        </a>
                    </nav>
                    <div class="header__auth">
                        <div class="header__language"
                            // onclick={() => {
                            //     this.Fn.initOne({
                            //         name: "mainLanguage", ifOpen: (front) => {
                            //             setTimeout(() => {
                            //                 front.clearData()
                            //             }, 500);
                            //         }
                            //     })
                            // }}
                            onclick={() => this.Fn.initOne({ name: "modalSelectLanguage" })}
                        >
                            <span>Русский</span>
                        </div>
                        <button class="header__auth_log" type="button"
                            onclick={() => {
                                this.Fn.initOne({ name: "modalAuthorization" })
                                // this.Fn.initOne({ name: "modalTest" })
                            }}
                        >Вход</button>
                        <button class="header__auth_sign" type="button"
                            onclick={() => this.Fn.initOne({ name: "modalRegistration" })}
                        >
                            <span>Регистрация</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}