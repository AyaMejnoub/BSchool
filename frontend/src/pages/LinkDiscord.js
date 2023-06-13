import { Link } from "react-router-dom";

export default function LinkDiscord() {
    return(
        <section className="signup-pages">
            <h1 className="signup-h1">Link your Discord</h1>
            <p className="signup-p">As you progress through the courses, finish tracks, 
compete in hackathons, and contribute to LearnWeb3, 
you will get special priveleges on our Discord server. 
To make sure we are able to do this, please Link your Discord 
account to your LearnWeb3 account 
so we can give you special roles!</p>
            <Link to="/joindiscordserver">
                <button className="signup-prev-button">Prev</button>
            </Link>
            <button className="signup-main-buttons">Link Discord</button>
            <Link to="/welcome">
                <button className="signup-next-button">Next</button>
            </Link>
        </section>
    )
}