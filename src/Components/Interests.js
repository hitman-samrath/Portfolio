const Interests = () => {
    return (
        <section className="interests" id="interests">
        <div className="text8">My Interests</div>
        <div className="text5"><span className="extra2">— </span>Things I Love<span className="extra2"> —</span></div>
        <div className="blocks">
            <a href="https://www.hackerrank.com/HITMAN_SAMRATH" target="_blank">
                <div className="block1">
                    <i className="fas fa-code"></i>
                    <div className="text9">Coding</div>
                    <p className="text10">I have a hunch for Problem Solving and hence, in my free time I prefer solving questions on various Competetive Coding platforms.</p>
                </div>
            </a>
            <a href="https://www.espn.in/" target="_blank">
                <div className="block2">
                    <i className="fas fa-futbol"></i>
                    <div className="text9">Sports</div>
                    <p className="text10">Being a National Level Coach, sports are an eternal part of my life and they keep my mind active and my body physically fit.</p>
                </div>
            </a>
            <a href="https://open.spotify.com/" target="_blank">
                <div className="block3">
                    <i className="fas fa-music"></i>
                    <div className="text9">Music</div>
                    <p className="text10">Music plays an important role in my life by providing me peace and keeping my spirits high while soothing my heart and soul too.</p>
                </div>
            </a>
        </div>
    </section>
    )
}

export default Interests
