import styless from './style/index.module.css'
import footerimg from '../../assets/footerimg.png'
import rightimg from '../../assets/apps.png'

export const Footer = () => {
    return (
        <div className={styless.footer}>
            {/* Footer left img */}
            <img src={footerimg} alt="спальня" className={styless.footer__img} />
            {/* Footer right card */}
            <div className={styless.footer__right}>
                {/* Footer right title */}
                <p className={styless.footer__right__title}>Хотите заказать проект?</p>
                {/* Footer right mini text */}
                <p className="footer__right__text">Оставьте заявку, и мы вам перезвоним</p>
                {/* Footer  form */}
                <div className="footer__right__form">
                    {/* Card name */}
                    <div>
                        <label htmlFor="name">Имя *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Введите ваше имя"
                                minLength="2"
                                maxLength="50"
                                required
                            />
                    </div>
                    {/* Card email */}
                    <div>
                        <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                                required
                            />
                    </div>
                    {/* Card phone */}
                    <div>
                        <label htmlFor="phone">Телефон *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+7 (XXX) XXX-XX-XX"
                                pattern="[0-9+\-\s()]{10,}"
                                required
                            />
                    </div>
                </div>
                {/* Footer button */}
                <button className={styless.footer__right__button}>Отпраавить заявку</button>
                {/* Footer img app store */}
                <img src={rightimg} alt="апп стор" className={styless.footer__right__img} />
            </div>
        </div>
    )
}