import React from 'react';
import './Home.css';
import stephie from '../images/stephie.jpg'
function Home() {
  return (
    <div className='home-div'>
      <h1>Stephanie Israilov</h1>
      <div className='intro-div'>
        <img alt='stephie' src={stephie} />
        <p className="intro">
          I'm <span className="highlight">Stephanie Israilov</span>.
        </p>
        <div className="section">
          <h2>My Journey in Education</h2>
          <p>I graduated from the University at Albany, State University of New York, in May 2019 with a double major in Criminal Justice and Communications, along with a minor in Sociology. Those years were packed with learning, growth, and a whole lot of coffee!</p>
        </div>
        <div className="section">
          <h2>My Professional Adventures</h2>
          <p>Currently, I'm diving into the world of law at Slater Slater Schulman LLP as an Adult and Child Sex Abuse Litigation Paralegal. From being the go-to person for clients to assisting attorneys with legal paperwork, I'm knee-deep in it all, and loving every minute.</p>
          <p>Before that, I was part of the fantastic team at Hovsepyan Law Group, P.C., where I honed my skills as a Litigation Paralegal. Managing clients, supporting attorneys, and ensuring smooth operations were all part of the gig.</p>
        </div>
        <div className="section">
          <h2>Exploring the World of Research</h2>
          <p>During my time at the Commissioner of Deeds, City Of New York No 5-7539, I delved into fascinating research on how peer influences impact adolescent decisions. It was a thought-provoking journey, filled with coding, meetings, and deep discussions.</p>
          <p>I also had the opportunity to work with "It Could Happen to You," an organization passionate about ending prosecutorial misconduct. Research projects, event planning, and community outreach were just some of the tasks on my plate.</p>
        </div>
        <div className="section">
          <h2>Making a Difference Beyond Work</h2>
          <p>When I'm not busy with legal documents or research projects, you can find me getting my hands dirty in community service. As the Youth Group President of Staten Island Reality Check, I'm on a mission to create a tobacco-free generation. Weekly meetings, progress updates, and inspiring conversations keep me motivated.</p>
        </div>
        <p className="extra">A Little Extra</p>
        <p>In case you're wondering, I'm certified in CPR and AED by the American Red Cross. Safety first, right?</p>
        <p>Thanks for stopping by and getting to know a bit about me. Feel free to reach out—I'm always up for a chat or collaboration!</p>
        <p>Warm regards,<br />Stephanie</p>
      </div>
    </div>
  );
}

export default Home;
