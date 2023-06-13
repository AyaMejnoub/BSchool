import { Link } from "react-router-dom";

export default function Congrats() {
    return (
    <section>
        <div className="signup-pages">
            <h1 className="signup-h1">Congrats, learner! </h1>
            <p className="signup-p">Congratulations for passing all the course of this path with such an impressive score! Well done, and keep up the great work.</p>
            <Link to="/watchedcourses">
                <button className="signup-main-buttons">Next</button>
            </Link>
        </div>
    </section>
    )
  }