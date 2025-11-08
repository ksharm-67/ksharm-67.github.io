import './App.css'
import MyImage from './assets/cat.jpg'

function App() {
  return (
    <div className="App">
      <h1 className="header">Kavish Sharma</h1>

      <ul className="navi">
        <li><button className="nav-button">My Resume</button></li>
        <li><button className="nav-button" onClick={scrollToExp}>My Experience</button></li>
        <li><button className="nav-button">My Projects</button></li>
        <li><button className="nav-button">Contact Me</button></li>
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
      <h1 className="mini-heading">My Experience</h1>
      <div className="timeline" id="exp">
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
        Started my capstone on protein stability prediction." data-top="2025"></div>
      </div>

      
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  )
}

function scrollToExp(){
    const section = document.getElementById('exp')
    section.scrollIntoView({ behavior: 'smooth' })
}

function Button(text){
    return (
        <button>{text.msg}</button>
    )
}

export default App
