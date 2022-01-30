
const Skills = () => {
    return (
        <section className="skills" id="skills">
        <div className="text4">My Skills</div>
        <div className="text5"><span className="extra1">— </span>My Learnings<span className="extra1"> —</span></div>
        <div className="skills-content">
            <div className="leftcon">
                <div className="text66">My Skills and Self Learnings</div>
                <p className="text77">I have impressive content writing skills and I can write content following SEO practices. I can write content for blogs, emails, social media posts, magazine articles etc. I have completed a couple of internships in this domain as well.
                    <br/><br/>I possess exceptional leadership abilities and I know how to help my team members while completing and getting destined amount of work completed on time, without spoiling personal relations with the them. 
                    <br/><br/>I am a web development enthusiast and I aim to achieve a feat by learning and implementing full stack web development by the end of 2nd year of college. This would enable me to grab good internship opportunities early on.
                </p>
                <a href="https://linkedin.com/in/samrath-singh-kalra/" target="_blank"><button className="button2">Go to my LinkedIn</button></a>
            </div>
            <div className="rightcon">
                <div>
                    <p className="text11">Content Writing</p><br/>
                    <progress id="pro1" value="80" max="100"></progress>
                    <p className="text12">80%</p>
                </div><br/>
                <div>
                    <p className="text11">Competitive Coding</p><br/>
                    <progress id="pro2" value="50" max="100"></progress>
                    <p className="text12">50%</p>
                </div><br/>
                <div>
                    <p className="text11">Leadership</p><br/>
                    <progress id="pro3" value="80" max="100"></progress>
                    <p className="text12">80%</p>
                </div><br/>
                <div>
                    <p className="text11">Web Development</p><br/>
                    <progress id="pro4" value="50" max="100"></progress>
                    <p className="text12">50%</p>
                </div><br/>
                <div>
                    <p className="text11">Java Language</p><br/>
                    <progress id="pro5" value="50" max="100"></progress>
                    <p className="text12">50%</p>
                </div><br/>
                <div>
                    <p className="text11">MS Powerpoint</p><br/>
                    <progress id="pro6" value="80" max="100"></progress>
                    <p className="text12">80%</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Skills
