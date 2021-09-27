import Mentor from "./Mentor";
import './styles.css';

const MentorList = (props) => {
    return (
        <div className="mentor_list">
            {Array.from(props.mentors).map((mentor, index) => (
                <Mentor 
                    key={index}
                    firstName={mentor.firstName} 
                    lastName={mentor.lastName} 
                    description={mentor.description} 
                    imgURL={mentor.profile} 
                />
            ))}
        </div>
    )
}

export default MentorList
