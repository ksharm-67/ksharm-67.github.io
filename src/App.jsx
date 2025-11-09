import './App.css'
import MyImage from './assets/cat.jpg'
import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <h1 className="header">Kavish Sharma</h1>

      <ul className="navi">
        <li><a href="https://media.licdn.com/dms/image/v2/D562DAQFb6O9Yx93NgQ/profile-treasury-image-shrink_1280_1280/B56ZpmvnRQI0AQ-/0/1762660349562?e=1763265600&v=beta&t=Ut4s6aO6f5DSViwddoXZLpKqd6RFTYmtxYfD-h2R5KM" target="_blank"><button className="nav-button">
        My Resume
        </button></a></li>
        <li><button className="nav-button" onClick={scrollToExp}>My Experience</button></li>
        <li><button className="nav-button" onClick={scrollToProj}>My Projects</button></li>
        <li><button className="nav-button" onClick={scrollToSkills}>My Skills</button></li>
        <li><button className="nav-button" onClick={scrollToContact}>Contact Me</button></li>
      </ul>

      <div className="container">
        <div className="about">
          <h1 className="mini-heading">About Me<span className="blinker">|</span></h1>
          <p className="intro">
            I'm a fourth year student from New Delhi studying Computer Science with a minor in English at 
            Arizona State University. I've been a Teaching Assistant for the Math Department at ASU since 2023, 
            working with MAT 114 (College Math), MAT 210 (Brief Calculus), and MAT 265 (Calculus for Engineers). 

            <br></br><br></br>
            I'm also a Grader for first-year English classes (ENG 101 and 102) at the Learning Enterprise. 
            Last summer I interned at CerbrumX in a Data Engineering capacity.
            
            <br></br><br></br>            
            My classes have covered cryptography, data science, and human-computer interaction.
            I'm interested in how cryptography and data science get used in healthcare and finance.
            Both industries handle sensitive information at scale, and the technical challenges around security 
            and analysis seem worth paying attention to.

            <br></br><br></br>
            I'm still early in my career, but I'm trying to learn as much as I can and figure out where I can contribute something useful. 
            <br></br><br></br>
          </p>
         </div>
       <img src={MyImage} className="side-img"/>
      </div>

      <br></br><br></br>
      <h1 className="mini-heading" id="exp">My Experience</h1>
      <div className="timeline">
        <div className="circle" data-bottom="Started at ASU as a CS major. Took intro CSE and MAT courses while adapting to college life."
        data-top="2022"></div>
        <div className="line"></div>
        <div className="circle" data-bottom="Started as a TA for ASU's Math Department while adjusting to upper-level CSE coursework" 
        data-top="2023"></div>
        <div className="line"></div>
        <div className="circle" data-bottom="Started grading for English classes. Focused on coursework 
        in HCI and systems design." 
        data-top="2024"></div>
        <div className="line"></div>
        <div className="circle" data-bottom="Interned at CerebrumX building vehicle data pipelines.
        Started capstone on protein stability prediction." data-top="2025"></div>
      </div>

      <div className="exp-cards">
        <div className="rectangle card1"><p className="job-title">Data Engineering Intern<br /><br />CerebrumX
        <br /><br />(2025 - Present)</p><p>
        <br />
        <ul>
            <li>Built Kafka-based data pipeline with Docker to process 50K+ daily vehicle telemetry events.</li>
            <li>Integrated MongoDB and ClickHouse for analytics, achieving 8x faster queries</li>
            <li>Implemented geospatial indexing & anomaly detection, reducing false positives by 40% & enabling real-time threat identification</li>
        </ul>
        </p></div>
        <div className="rectangle card2"><p className="job-title">AI Powered Prediction<br />of Protein Thermal Stability<br /><br />Capstone Project
        <br />(2025 - Present)</p><p>
        <br />
        <ul>
            <li>Engineered features from protein sequence and structure data (FASTA, PDB), supporting ML workflows.</li>
            <li>Built & trained regression models in Python (Random Forest, Neural Networks) to predict thermal stability.</li>
            <li>Developed pipelines for large biological datasets, implemented eval. metrics (RMSE, MAE, R&sup2;).</li>
        </ul>
        </p></div>
        <div className="rectangle card3"><p className="job-title">Math Instructional Aide<br /><br />School of Mathematics, ASU
        <br /><br />(2023 - Present)</p><p>
        <br />
        <ul>
            <li>Graded 50+ assignments weekly for Calculus and College Math using structured rubrics</li>
            <li>Assisted the instructor in explaining concepts and led bi-weekly group discussions of 6-10 students</li>
            <li>Developed supplementary learning materials that improved comprehension for 130+ struggling students.</li>
        </ul>
        </p></div>
      </div>

      <br /><br /><br /><br />
      <h1 className="mini-heading" id="projects">My Projects</h1>
      <div className="proj-cards">
        <div className="proj p1"><p className="job-title">SecureVault Password Manager<br /><br /></p>
        <p>A command line based password manager that 
        securely stores a user's account info using AES encryption and PBKDF2 for key derivation, with password protected access.<br />
        <br />
        <a href="https://github.com/ksharm-67/SecureVault" target="_blank">GitHub</a>
        </p></div>

        <div className="proj p2"><p className="job-title">Vehicle Telemetry<br />Pipeline<br /><br /></p>
        <p>A secure data pipeline that uses Kafka to ingest vehicle data, and use geofence lookups to 
        detect anomalies like geofence breaches, GPS spoofing and unauthorized stops.<br />
        <br />
        <a href="https://github.com/ksharm-67/CerebrumX-Internship" target="_blank">GitHub</a>
        </p></div>

        <div className="proj p3"><p className="job-title">Diffie-Hellman Key Encryption<br /><br /></p>
        <p>Uses existing libraries to perform key exchange and encryption using a 256-bit key, then
        uses a symmetric encryption scheme (AES) to encrypt and decrypt any given data.<br />
        <br />
        <a href="https://github.com/ksharm-67/Diffie-Hellman-Key-Encryption" target="_blank">GitHub</a>
        </p></div>

        <div className="proj p4"><p className="job-title">RSA Encryption<br /><br /></p><br />
        <p>Uses existing libraries to perform the extended Euclidean algorithm, and encrypt a plaintext using RSA. 
        Uses the Extended Euclidean Algorithm, to generate the private key. <br /><br />
        <a href="https://github.com/ksharm-67/RSA-Encryption" target="_blank">GitHub</a>
        </p></div>

       </div>

      <br /><br /><br /><br />
      <h1 className="mini-heading" id="skill">My Skills</h1>
      <div className="skill-section">
        <div className="skill-heading"><h2>Programming</h2><br />
          <div className="skill">C++</div>
          <div className="skill">Python</div>
          <div className="skill">Java</div>
          <div className="skill">Javascript</div>
          <div className="skill">SQL</div>
          <div className="skill">HTM/css</div>
          <div className="skill">MATLAB</div>
          <div className="skill">R</div>
        </div>
      </div>
      <br /><br />
      <div className="skill-section two">
        <div className="skill-heading"><h2>Frameworks/Libraries</h2><br />
          <div className="skill2">Firebase</div>
          <div className="skill2">React.js</div>
          <div className="skill2">Flask</div>
          <div className="skill2">Pandas</div>
          <div className="skill2">numpy</div>
          <div className="skill2">PyTorch</div>
          <div className="skill2">Kafka</div>
        </div>
      </div>
      <br /><br />
      <div className="skill-section three">
        <div className="skill-heading"><h2>Database</h2><br />
          <div className="skill3">MongoDB</div>
          <div className="skill3">ClickHouse</div>
          <div className="skill3">PostgreSQL</div>
        </div>
      </div>
      <br /><br />
      <div className="skill-section four">
        <div className="skill-heading"><h2>Tools/Platforms</h2><br />
          <div className="skill4">Git</div>
          <div className="skill4">Github</div>
          <div className="skill4">Docker</div>
          <div className="skill4">Jira</div>
          <div className="skill4">Linux</div>
          <div className="skill4">Visual Studio</div>
        </div>
      </div>
      <br /><br />
      <div className="skill-section five">
        <div className="skill-heading"><h2>Technologies/Concepts</h2><br />
          <div className="skill5">OAuth2</div>
          <div className="skill5">JSON</div>
          <div className="skill5">Postman</div>
          <div className="skill5">OOP</div>
          <div className="skill5">Functional Programming</div>
          <div className="skill5">Multithreading</div>
          <div className="skill5">Unit Testing</div>
          <br /><br />
          <div className="skill5">Agile</div>
          <div className="skill5">Cryptographic Protocols</div>
          <div className="skill5">Big O</div>
          <div className="skill5">Optimization</div>
          <div className="skill5">CRUD Operations</div>
        </div>
      </div>

      <br /><br /><br /><br /><br /><br />
      <h1 className="mini-heading" id="contact">Contact Me</h1>
      <div className="contact">
        <MyForm />
      </div>
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

function MyForm() {
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      tyoe: "",
      subject: "",
      message: ""
  });

  function handleChange(e) {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <form>
      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>Type:
        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="none"></option>
          <option value="feedback">Feedback</option>
          <option value="complaint">Complaint</option>
          <option value="question">Question</option>
        </select>
      </label>

      <label>Subject:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      </label>

      <label>Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </label>

      <br />
      <input type="submit" value="Submit" id="submitb"/>
    </form>
  )
}


function scrollToExp(){
    const section = document.getElementById('exp')
    section.scrollIntoView({ behavior: 'smooth' })
}

function scrollToProj(){
    const section = document.getElementById('projects')
    section.scrollIntoView({ behavior: 'smooth' })
}

function scrollToSkills(){
    const section = document.getElementById('skill')
    section.scrollIntoView({ behavior: 'smooth' })
}

function scrollToContact(){
    const section = document.getElementById('contact')
    section.scrollIntoView({ behavior: 'smooth' })
}

function Button(text){
    return (
        <button>{text.msg}</button>
    )
}

export default App
