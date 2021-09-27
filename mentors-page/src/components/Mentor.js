import './styles.css';
import COOKIE from '../assets/cookie.png'


const Mentor = ({ firstName, lastName, description, imgURL }) => {
    return (
        <div className="mentor">
            <div className="profile_picture">
                <img
                src={imgURL}
                alt=""
                className="mentor_image"
                />
                <img
                src={COOKIE}
                alt=""
                className="cookie"
                />
            </div>
            <div className="mentor_text">
                <div className="mentor_name">
                    {firstName} {lastName}      &#129473;
                </div>
                <div className="mentor_description">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default Mentor