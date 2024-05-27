import { useState, useEffect } from "react";
import './banner.css'
import headerImg from "../../assets/mf-avatar.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './banner.css';
import CV from '../../assets/cv.pdf'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Md Salman Khan", "Frontend Developer", "Web Developer", "UI/UX Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <div className="container-max banner__container">
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <h1>Hi, I'm</h1>
                            <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Md Salman Khan", "Frontend Developer", "Web Developer", "UI/UX Developer" ]'><span className="wrap">{text}</span></span></h1>
                            <p>
                            I'm a dedicated Frontend Developer, passionate about crafting elegant, user-friendly code. <br /> Let's create something beautiful together.
                            </p>
                            <div className='btns-div'>
                                <a href={CV} download className='thm-btn light'>Download CV</a>
                            </div>
                        </div>}
                </TrackVisibility>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <div className="banner_img_cont">
                                <div className="img">
                                    <img
                                        src={headerImg}
                                        alt="image"
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>}
                </TrackVisibility>
            </div>
        </section>
    )
}
