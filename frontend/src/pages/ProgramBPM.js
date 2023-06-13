import { Link } from "react-router-dom";

export default function ProgramBPM() {
    return (
        <div className="aboutbpm">
            <section className="bpm_start">
                <h1 className="bpm_title">Blockchain Project Manager(BPM)</h1>
                <p className="bpm_p">Fast track your web3 career through courses, live streams and projects. Totally free.</p>
                <img className="the_bpm"src="./images/bpm-image.png" alt=""/>
                <button className="bpm_other_button">Resume Course</button>
            </section>
            <section className="bpm_section">
                <h1 className="overview_bpm">The Program</h1>
            </section>
            <section className="bpm_section">
                <button className="path_buttons">1 - Intro to Programming (5-10 minutes)</button>
                <button className="path_buttons">2 - What is a Blockchain? (10-15 minutes)</button>
                <button className="path_buttons">3 - What does Web3 mean? (10-15 minutes)</button>
                <button className="path_buttons">4 - What is ETH? (10-15 minutes)</button>
                <button className="path_buttons">5 - Setting up a crypto wallet (10-15 minutes)</button>
                <button className="path_buttons">6 - Setting up the Remix IDE (10-15 minutes)</button>
                <button className="path_buttons">7 - Intro to Solidity (15-20 minutes)</button>
                <button className="path_buttons">8 - Build your first dApp (15-20 minutes)</button>
                <button className="path_buttons">9 - Build your own cryptocurrency (15-20 minutes)</button>
                <button className="path_buttons">10 - Build your own simple NFT (15-20 minutes)</button>
                <Link to="/congrats">
                    <button className="path_buttons" id="graduate">Graduate</button>
                </Link>
            </section>
            <section className="bpm_section">
                <h1 className="overview_bpm">graduation certificate</h1>
            </section>
        </div>
    )
  }