
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../images/header-img1.jpg';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(500 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "European Futuristic Videogames Company" ];
  const period = 1800;

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
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to GAMESOFT</span>
                <h2>{`Hello ! You are in Gamesoft : `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "European Futuristic Videogames Company" ]'><span className="wrap">{text}</span></span></h2>
                  <p>Gamesoft est un studio de jeu vidéo français, développant des jeux vidéo. L'entreprise a été fondée en 1965, et proposent des jeux vidéo principalement de type Aventure, RPG ou Survival Horror.</p>
                  <p>Ces jeux vidéo sont à destination principalement de la console Playstation, mais parfois, ils font des versions destinées aux ordinateurs: ces versions ne sont pas automatiques, elles sont effectuées en fonction des prévisions de vente. Si le jeu possède un score élevé (jeu étant très attendu par les joueurs), alors Gamesoft effectue une version ordinateur.</p>
                  <p>Gamesoft possède ses propres franchises comme Aphist, Ancien Combos, Dungeon Planet, ou encore Darkness and Chaos. Gamesoft développe également de nombreux jeux via des accords de partenariat noués avec de grands détenteurs de droits. Gamesoft travaille notamment avec Disney/Pixar, Hasbro, Fox et Sega, lui permettant d’associer certains de ses jeux aux plus grandes marques internationales du secteur.</p>
                  <p></p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}