import ProfilePic from '../images/indian-pfp.jpeg'
import "./styles.css";

export default function AsideBar() {
    return (
        <div className="container-fluid">
            <div className="row">
                <img className="ms-4 mb-4 rounded-circle profile-pic border" src={ProfilePic} alt="Profile Picture" />
            </div>
            <div className='row border-right'>
                <h3>Chat with me on the app</h3>
            </div>
        </div>
    );
}