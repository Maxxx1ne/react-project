import styless from './style/index.module.css'
import imgZero from '../../assets/project (0).png'
import imgFirst from '../../assets/project (1).png'
import imgSecond from '../../assets/project (2).png'
import imgThird from '../../assets/project (3).png'
import imgFourth from '../../assets/project (4).png'
import imgFifth from '../../assets/project (5).png'

export const Projects = () => {
    return (
        <div className={styless.projects}>
            {/* Title */}
            <h4>Проекты</h4>
            {/* Section with img */}
            <div className={styless.projects__gridContainer}>
                <img src={imgZero} alt="картинка 1" className={styless.projects__gridContainer__img} />
                <img src={imgFirst} alt="картинка 2" className={styless.projects__gridContainer__img} />
                <img src={imgSecond} alt="картинка 3" className={styless.projects__gridContainer__img} />
                <img src={imgThird} alt="картинка 4" className={styless.projects__gridContainer__img} />
                <img src={imgFourth} alt="картинка 5" className={styless.projects__gridContainer__img} />
                <img src={imgFifth} alt="картинка 6" className={styless.projects__gridContainer__img} />
            </div>
        </div>
    )
}