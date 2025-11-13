import styless from './style/index.module.css'

export const FooterInfo = () => {
    return (
        <div className={styless.footerInfo}>
            {/* Footer section */}
            <div className={styless.footerInfo__char}>
                {/* Main footer char */}
                <p className={styless.footerInfo__text}>© 2023 Aveji</p>
                <p className={styless.footerInfo__mini}>Все права защищены</p>
            </div>
            {/* Center footer char */}
            <p className={styless.footerInfo__centerText}>Политика конфеденциальности / Оплата и доставка</p>
            {/* Right footer char */}
            <div className={styless.footerInfo__rightChar}>
                <p className={styless.footerInfo__rightChar__txt}>ВКОНТАКТЕ</p>
                <p className={styless.footerInfo__rightChar__txt}>ТЕЛЕГРАМ</p>
            </div>
        </div>
    )
}