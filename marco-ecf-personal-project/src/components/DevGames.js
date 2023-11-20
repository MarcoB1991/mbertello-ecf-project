
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../images/meter1.svg";
import meter2 from "../images/meter2.svg";
import meter3 from "../images/meter3.svg";
import colorSharp from "../images/color-sharp.png";

export const DevGames = () => {
  const responsive = {
    ExtraLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="devgames" id="devgames">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="devgames-bx wow zoomIn">
                        <h2>Videogames development Stage</h2>
                        <p>Bienvenue en Gamesoft!! Ici vous pouvez voir l'état de développement des derniers jeux en production et sur le point de sortir.<br></br>
                        En détail, nous voyons le titre à venir et son pourcentage de développement.<br></br> 
                        Nous sommes très heureux de pouvoir vous annoncer ces titres, nous nous soucions beaucoup de la sortie et de la présentation. Restez informé pour recevoir des informations plus détaillées mais surtout ne manquez pas les bonus liés aux préventes de jeux !.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme devgames-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>Lighting Girl in the Night</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>Yoda's Teaching</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image3" />
                                <h5>Metal Wire Spider</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="ImageSharp" />
    </section>
  )
}
