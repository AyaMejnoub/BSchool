import { Link } from "react-router-dom";

export default function JoinDiscordServer() {
    return (
    <section>
        <div className="signup-pages">
            <h1 className="signup-h1">Meet new friends</h1>
            <p className="signup-p">The BlockSchool community is the place to meet new friends 
who are on the same journey as you. It is also the place 
to ask any questions, resolve doubts, participate in events, 
find teams for hackathons, sharing memes, 
and everything else under the Web3 space!</p>
            <Link to="/welcome">
                <button className="signup-prev-button">Prev</button>
            </Link>
            <button className="signup-main-buttons">JoinDiscord</button>
            <Link to="/connectwallet">
                <button className="signup-next-button">Next</button>
            </Link>
        </div>
    </section>
    )
  }