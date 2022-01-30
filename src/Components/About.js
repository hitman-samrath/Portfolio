import profile from './Assets/samrath cropped.jpg'

const About = () => {
    return (
        <section id="about" className="about">
        <div className="text4">About me</div>
        <div className="text5"><span className="extra1">– </span>Know me better<span className="extra1"> –</span></div>
        <div className="aboutdiv1">
            <img className="profileimg" src={profile} alt="Profile Image"/>
            <div className="aboutdiv2">
                <div className="text6">I'm Samrath and I am a Learner</div>
                <p className="text7">I am a Microsoft Learn Student Ambassador (Alpha) | Full Stack Web Development Intern @TwoWaits | DSA Scholar Intern @TwoWaits | Public Speaker and Content Writer @Ojaswi-LPU | B.Tech CSE 24' @Lovely Professional University | Coder | Learner | Achiever<br/><br/><span className="visit">Know more from my CV below.</span></p>
                <a href="https://www.goodcv.com/cv/d985d5475e6db0fbbd8e8520ee936711" target="_blank"><button className="button1">Open CV</button></a>
            </div>
        </div>
    </section>
    )
}

export default About
