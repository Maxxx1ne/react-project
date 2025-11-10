import styless from './style/index.module.css'
import icon from '../../assets/icon.png'
import { moreReviews } from './moreReviews'

export const Reviews = ({ reviews = moreReviews }) => {
    return (
        <div className={styless.reviews}>
            {/* Reviews title */}
            <h5>Отзывы</h5>
            {/* Reviews section */}
            <div className={styless.reviews__section}>
                {reviews.map((review, index) => (
                // Section function
                <div key={index} className={styless.review__card}>
                    <img src={icon} alt="кавычки" className={styless.review__card__img} />
                    {/* Reviews card */}
                    <div className={styless.review__card__name}>{review.name}</div>
                    <div className={styless.review__card__text}>{review.review}</div>
                </div>
                ))
            }
            </div>
        </div>
    )
}