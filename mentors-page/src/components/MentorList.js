import Mentor from "./Mentor";
import './styles.css';

const MentorList = ({ mentors }) => {
    return (
        <div className="mentor_list">
            {Array.from(mentors).map((mentor, index) => (
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