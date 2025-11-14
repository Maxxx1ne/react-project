import styless from './style/index.module.css'

export const InfoCard = () => {
    return (
        <div className={styless.infoCard}>
            {/* Main second title */}
            <h2>Более 5 лет создаем <br /> мебель для вашего <br /> комфорта</h2>
            {/* Right card info */}
            <div className={styless.infoCard__right}>
                {/* First top right card */}
                <div className={styless.infoCard__right__first}>
                    <p className={styless.infoCard__right__first__text}>Мы — команда профессионалов, которые могут <br /> произвести любую мебель для вашего проекта, а также <br /> найти производственное решение любой задумки.</p>
                    <p className={styless.infoCard__right__first__text}>Наша основная цель — реализовывать самые смелые <br /> задумки, и делать это качественно и аккуратно.</p>
                    <p className={styless.infoCard__right__first__text}>В качестве материалов мы используем натуральные <br /> — стекло, дерево, бетон, камень, металл и эпоксидную <br /> смолу.</p>
                </div>
                {/* Second bottom right card */}
                <div className={styless.infoCard__right__second}>
                    {/* Right card mini info 1 */}
                    <div className={styless.infoCard__right__second__card}>
                        {/* Main info 1 */}
                        <p className={styless.infoCard__right__second__card__top}>1 год</p>
                        {/* Mini info 1 */}
                        <p className={styless.infoCard__right__second__card__mini}>гарантии на всю продукцию</p>
                    </div>
                    {/* Right card mini info 2 */}
                    <div className={styless.infoCard__right__second__card}>
                        {/* Main info 2 */}
                        <p className={styless.infoCard__right__second__card__top}>300+</p>
                        {/* Mini info 2 */}
                        <p lassName={styless.infoCard__right__second__card__mini}>выполненных проектов</p>
                    </div>
                    {/* Right card mini info 3 */}
                    <div className={styless.infoCard__right__second__card}>
                        {/* Main info 3 */}
                        <p className={styless.infoCard__right__second__card__top}>15 дней</p>
                        {/* Mini info 3 */}
                        <p lassName={styless.infoCard__right__second__card__mini}>срок производства</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 