import { Link } from "react-router-dom";

export default function WatchedCourses() {
    return (
    <section>
        <div className="signup-pages">
            <h1 className="signup-h1">You watched all the experts live streams!</h1>
            <p className="signup-p">Congratulations on successfully completing the second stage by following the subject matter experts' live streams .</p>
            <Link to="/schedule">
                <button className="signup-main-buttons">Next</button>
            </Link>
        </div>
    </section>
    )
  }