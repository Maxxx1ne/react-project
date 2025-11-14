import stlyless from './style/index.module.css'
import leftImg from '../../assets/small.png'
import rightImg from '../../assets/large.png'
 
export const Info = () => {
    return (
        <div className={stlyless.info}>
            {/* Left info card */}
            <div className={stlyless.info__leftCard}>
                {/* Mini text left */}
                <p className={stlyless.info__leftCard__text}>Мы можем произвести любую мебель для <br /> вашего проекта и найти производственное <br /> решение любой задумки.</p>
                {/* Mini img left */}
                <img src={leftImg} alt="маленькая каринка" className={stlyless.info__leftCard__img} />
            </div>
            {/* Img right */}
            <img src={rightImg} alt="большая картинка" className={stlyless.info__rightCard} />
        </div>
    )
}