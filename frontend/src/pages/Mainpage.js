import { Link } from "react-router-dom";

export default function Mainpage() {
  return (
    <div className="main-page">
      <section className="main-div">
          <h1 className="h1">Get started today and join the web3 revolution!</h1>
          <h2 className="h2">Welcome to your fast track to a career in web3.</h2>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-button">Signup</button>
          </Link>
          <img className="pic-girl" src="./images/pic_girl.png" alt=""/>
          <img className="pic-guy" src="./images/pic_guy.png" alt=""/>
      </section>
      <section class="cards">
        <h2 class="title">PATHS</h2>
        <div class="content">
            <div class="card">
              <h3>Blockchain Project Manager (BPM)</h3>
              <img className="bpm-image" src="./images/bpm-image.png" alt=""/>
              <p>Develop the skills to lead and manage successful blockchain projects from inception to completion.</p>
            </div>
            <div class="card">
              <h3>Blockchain Developer (BD) </h3>
              <img className="bd-image" src="./images/bd-image.png" alt=""/>
              <p>Acquire the technical knowledge and hands-on experience to design, develop, and deploy secure and scalable blockchain applications.</p>
            </div>
            <div class="card">
              <h3>Blockchain Solution Architect (BSA) </h3>
              <img className="bsa-image" src="./images/bsa-image.png" alt=""/>
              <p>Learn how to design and implement effective blockchain solutions that meet the specific needs and challenges of organizations.</p>
            </div>
            <div class="card">
              <h3>Blockchain Security Professional (BSP)</h3>
              <img className="bsp-image" src="./images/bsp-image.png" alt=""/>
              <p>Master the techniques and tools to secure blockchain networks, platforms, and applications against cyber threats and attacks.</p>
            </div>
        </div>
    </section>
    </div>
  )
}