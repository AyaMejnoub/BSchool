import { Link } from "react-router-dom";

export default function Schedule() {
    return (
    <section>
        <div className="signup-pages">
            <h1 className="signup-h1">Ready to have your NFT certificate!</h1>
            <p className="signup-p">To obtain the competency certificate, you still need to present a group project on the blockchain in front of a jury</p>
            <Link to="/">
                <button className="signup-main-buttons">Schedule your appointment</button>
            </Link>
        </div>
    </section>
    )
  }