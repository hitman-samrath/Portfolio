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
                    <p className="text10">This project is a Wikipedia of Breaking Bad, one of the most popular TV Series. It has been prepared using HTML, CSS, JavaScript and React JS under Corporate Experience Program of TwoWaits, supervised by Mr. Sanidhya Panwar.<br/><br/><span className="visit">Click To Learn More</span></p>
                </div>
            </a>
            <a href="https://hitman-samrath.github.io/Portfolio-Website1/new.html" target="_blank">
                <div className="block2">
                    <img className= "proj2" src={instaclone}/>
                    <div className="text9">Instagram Clone</div>
                    <p className="text10">This project is a clone web application of social media application Instagram. It has been prepared using HTML, CSS, JavaScript, React JS, Mongo DB and APIs under Corporate Experience Program of TwoWaits, supervised by Mr. Sanidhya Panwar.<br/><br/><span className="visit">Click To Learn More</span></p>
                </div>
            </a>
            <a href="https://hitman-samrath.github.io/Portfolio-Website1/new.html" target="_blank">
                <div className="block3">
                    <img className="proj3" src={internshipnow}/>
                    <div className="text9">Internship Now</div>
                    <p className="text10">This project is a professional platform for connecting recruiters with potential candidates. It has been prepared using HTML, CSS, MERN Stack and APIs under Corporate Experience Program of TwoWaits, supervised by Mr. Sanidhya Panwar.<br/><br/><span className="visit">Click To Learn More</span></p>
                </div>
            </a>
        </div>
    </section>
    )
}

export default Projects
