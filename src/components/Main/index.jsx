import styless from './style/index.module.css'

export const Main = () => {
    return (
        <div className={styless.main}>
            {/* Main Title */}
            <h1>Эксклюзивная <br /> и нестандартная <br /> мебель для дома</h1>
            {/* Main button */}
            <button className={styless.main__button}>ЗАКАЗАТЬ ПРОЕКТ</button>
        </div>
    )
}