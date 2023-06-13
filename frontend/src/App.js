import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './pages/About';
import AboutBPM from './pages/AboutBPM';
import Congrats from './pages/Congrats';
import ConnectWallet from './pages/ConnectWallet';
import CoursEdit from './pages/CoursEditPage';
import Home from './pages/Home';
import JoinDiscordServer from './pages/JoinDisordServer';
import LinkDiscord from './pages/LinkDiscord';
import Login from './pages/Login';
import Mainpage from './pages/Mainpage';
import ProgramBPM from './pages/ProgramBPM';
import Schedule from './pages/Schedule';
import Signup from './pages/Signup';
import UserEdit from './pages/UserEdit';
import WatchedCourses from './pages/WatchedCourses';
import Welcome from './pages/Welcome';
import Youtube from './pages/Youtube';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/joindiscordserver" element={<JoinDiscordServer />} />
          <Route path="/linkdiscord" element={<LinkDiscord />} />
          <Route path="/connectwallet" element={<ConnectWallet />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutbpm" element={<AboutBPM />} />
          <Route path="/programbpm" element={<ProgramBPM />} />
          <Route path="/congrats" element={<Congrats />} />
          <Route path="/watchedcourses" element={<WatchedCourses />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route exact path="/UserEditPage" element={<UserEdit/>}/>
          <Route exact path='/adduser' element={<AddUser/>}/>
          <Route exact path='/edit_user/:id' element={<EditUser/>}/>
          <Route exact path='/view-user/:id' element={<ViewUser/>}/>
          <Route exact path='/CoursEditPage' element={<CoursEdit/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
