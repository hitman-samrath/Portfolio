import breakingbad from './Assets/BreakingBad.png'
import instaclone from './Assets/instagramclone.png'
import internshipnow from './Assets/internshipnow.jpg'

const Projects = () => {
    return (
        <section className="project" id="project">
        <div className="text8">My Projects</div>
        <div className="text5"><span className="extra2">— </span>My Work<span className="extra2"> —</span></div>
        <div className="blocks">
            <a href="https://hitman-samrath.github.io/BreakingBadWiki/" target="_blank">
                <div className="block1">
                    <img className="proj1" src={breakingbad}/>
                    <div className="text9">Breaking Bad Wiki</div>
                    <p className="text10">A fully responsive, frontend-based web application of the popular American TV series Breaking Bad. Implements React APIs to fetch pictorial and descriptive data of all the characters and provides detailed insights to the user<br/><br/><span className="visit">Click To Learn More</span></p>
                </div>
            </a>
            <a href="https://hitman-samrath.github.io/NotesApp" target="_blank">
                <div className="block2">
                    <img className= "proj2" src="https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?b=1&k=20&m=1285308242&s=170667a&w=0&h=K-UO77yYEQAKjRNLhgXADlyRIqrPkB8sC-4mKcyMgC4="/>
                    <div className="text9">Samrath Notes App</div>
                    <p className="text10">A fully responsive, frontend-based notes making application, with UI similar to Google Keep. Create notes with the title and body and dispense them in real time using components of ReactJs. Alerts are generated upon adding empty notes.<br/><br/><span className="visit">Click To Learn More</span></p>
                </div>
            </a>
            <a href="https://hitman-samrath.github.io/Portfolio-Website1/new.html" target="_blank">
                <div className="block3">
                    <img className="proj3" src={internshipnow}/>
                    <div className="text9">Internship Now</div>
                    <p className="text10">This project is a professional platform for connecting recruiters with potential candidates, and helping them through the process. It has been prepared using MERN Stack and APIs under the management of Mr. Sanidhya Panwar.<br/><br/><span className="visit">Click To Learn More</span></p>
                </div>
            </a>
        </div>
    </section>
    )
}

export default Projects
