import { Link } from "react-router-dom";

export default function Home() {
    return (
    <section>
        <section className="section-home">
            <h1 className="home-title">Join the web3 revolution and earn your degree!</h1>
            <img className="home-images" src="./images/login-image.png" alt=""/>
            <p className="home-text">Fast track your web3 career through courses, live streams and projects. Totally free.</p>
            <Link to="/login">
                <button className="up-button">start learning</button>
            </Link>
            <Link to="/signup">
                <button className="down-button">join the community</button>
            </Link>
        </section>
        <section className="section-home">
            <h1 className="home-title">Blockchain Project Manager (BPM)</h1>
            <img className="home-images" src="./images/login-image.png" alt=""/>
            <p className="home-text">Develop the skills to lead and manage successful blockchain projects from inception to completion.</p>
            <Link to="/aboutbpm">
                <button className="up-button">KNOW MORE</button>
            </Link>
            <Link to="/programbpm">
                <button className="down-button">START NOW</button>
            </Link>
        </section>
        <section className="section-home">
            <h1 className="home-title">Blockchain Developer (BD)</h1>
            <img className="home-images" src="./images/login-image.png" alt=""/>
            <p className="home-text">Acquire the technical knowledge and hands-on experience to design, develop, and deploy secure and scalable blockchain applications.</p>
            <Link to="/login">
                <button className="up-button">KNOW MORE</button>
            </Link>
            <Link to="/signup">
                <button className="down-button">START NOW</button>
            </Link>
        </section>
        <section className="section-home">
            <h1 className="home-title">Blockchain Solution Architect (BSA)</h1>
            <img className="home-images" src="./images/login-image.png" alt=""/>
            <p className="home-text">Learn how to design and implement effective blockchain solutions that meet the specific needs and challenges of organizations.</p>
            <Link to="/login">
                <button className="up-button">KNOW MORE</button>
            </Link>
            <Link to="/signup">
                <button className="down-button">START NOW</button>
            </Link>
        </section>
        <section className="section-home">
            <h1 className="home-title">Blockchain Security Professional (BSP)</h1>
            <img className="home-images" src="./images/login-image.png" alt=""/>
            <p className="home-text">Master the techniques and tools to secure blockchain networks, platforms, and applications against cyber threats and attacks.</p>
            <Link to="/login">
                <button className="up-button">KNOW MORE</button>
            </Link>
            <Link to="/signup">
                <button className="down-button">START NOW</button>
            </Link>
        </section>
    </section>
    )
  }