import stuless from './style/index.module.css'

export const InfoFooter = () => {
    return (
        <div className={stuless.infoFooter}>
            {/* Main title */}
            <h3>Как мы работаем</h3>
            {/* Right information */}
            <div className={stuless.rightInfo}>
                {/* Mini right top text */}
                <p className={stuless.rightInfo__text}>Алгоритм работы с нами для удобства <br /> и понимания проекта</p>
                {/* Right item text */}
                <div className={stuless.rightInfo__main}>
                    {/* Right card info */}
                    <div className={stuless.rightInfo__main__card}>
                        {/* Card title */}
                        <p className={stuless.rightInfo__main__card__title}>Идея</p>
                        {/* Card info */}
                        <p className={stuless.rightInfo__main__card__miniInfo}>Клиент приходит к нам с идеей. Это может <br /> быть изображение/ эскиз или другой <br /> референс. А мы думаем над тем, как это <br /> реализовать, делаем технические чертежи <br /> и предлагаем решения по материалам.</p>
                    </div>
                    {/* Right card info */}
                    <div className={stuless.rightInfo__main__card}>
                        {/* Card title */}
                        <p className={stuless.rightInfo__main__card__title}>Техническое <br /> задание</p>
                        {/* Card info */}
                        <p className={stuless.rightInfo__main__card__miniInfo}>Вместе с клиентом формулируем <br /> корректное ТЗ, которое включает в себя <br /> визуализацию изделия, эскизный чертёж <br /> с габаритами, информацию по материалам <br /> и отделке, срок реализации проекта <br /> и другие обязательные пункты.</p>
                    </div>
                    {/* Right card info */}
                    <div className={stuless.rightInfo__main__card}>
                        {/* Card title */}
                        <p className={stuless.rightInfo__main__card__title}>Коммерческое <br /> предложение</p>
                        {/* Card info */}
                        <p className={stuless.rightInfo__main__card__miniInfo}>Предпочтительно используем <br /> натуральные материалы. Но любую смету <br /> можем оптимизировать, упростив <br /> материалы или конструктив. Сможем <br /> подстроиться под бюджет клиента <br /> и согласуем коммерческое предложение</p>
                    </div>
                    {/* Right card info */}
                    <div className={stuless.rightInfo__main__card}>
                        {/* Card title */}
                        <p className={stuless.rightInfo__main__card__title}>Подготовка <br /> рабочего проекта</p>
                        {/* Card info */}
                        <p className={stuless.rightInfo__main__card__miniInfo}>Создадим рабочую документацию <br /> и чертежи. Это фундамент качественного <br /> производства. На этом этапе утверждаем <br /> с клиентом все габариты и материалы, <br /> чертежи и приступаем к производству..</p>
                    </div>
                    {/* Right card info */}
                    <div className={stuless.rightInfo__main__card}>
                        {/* Card title */}
                        <p className={stuless.rightInfo__main__card__title}>Производство <br /> и монтаж</p>
                        {/* Card info */}
                        <p className={stuless.rightInfo__main__card__miniInfo}>Производство занимает от 15 рабочих <br /> дней, в зависимости от сложности <br /> и объёма. Монтажом тоже занимаемся <br /> самостоятельно. Ведь мы это сделаем <br /> быстро и аккуратно..</p>
                    </div>
                </div>
            </div>
        </div>
    )
}