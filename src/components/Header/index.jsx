import styless from './style/index.module.css'
import logo from '../../assets/logo.png'

export const Header = () => {
    return (
        <div className={styless.header}>
            {/* Main logo */}
            <img src={logo} alt="лого" className={styless.header__img} />
            {/* Main menu */}
            <div className={styless.header__menu}>
                <a href="/">О нас</a>
                <a href="/">Проекты</a>
                <a href="/">Материалы</a>
                <a href="/">Отзывы</a>
            </div>
            {/* Main phone */}
            <p className={styless.header__phone}>
                +7 999 999 99 99
            </p>
        </div>
    )
}