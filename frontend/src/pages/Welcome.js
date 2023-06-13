import { Link } from "react-router-dom";

export default function Welcome() {
    return (
    <section>
        <div className="signup-pages">
            <h1 className="signup-h1">Welcome, learner!
We are beyond excited to have you with us 🚀</h1>
            <p className="signup-p">Let's get a few things set up to get you going as soon as possible 
and on your way to becoming a Web3 developer.</p>
            <Link to="/joindiscordserver">
                <button className="signup-main-buttons">Next</button>
            </Link>
        </div>
    </section>
    )
  }