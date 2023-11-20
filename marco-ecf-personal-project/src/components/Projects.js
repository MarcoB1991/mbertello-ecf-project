
import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCard1";
import { ProjectCard2 } from "./ProjectCard2";
import { ProjectCard3 } from "./ProjectCard3";
import news1 from "../images/news1.webp";
import news2 from "../images/news2.webp";
import news3 from "../images/news3.jpg";
import lastGames1 from "../images/lastGames1.png";
import lastGames2 from "../images/lastGames2.png";
import lastGames3 from "../images/lastGames3.png";
import futureGames1 from "../images/futureGames1.png";
import futureGames2 from "../images/futureGames2.png";
import futureGames3 from "../images/futureGames3.png";
import colorSharp2 from "../images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

  export const Projects = () => {

  const [modalShow1, setModalShow1] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [modalShow3, setModalShow3] = useState(false);

  const handleOpenModal1 = () => {
    setModalShow1(true);
  };
  const handleOpenModal2 = () => {
    setModalShow2(true);
  };
  const handleOpenModal3 = () => {
    setModalShow3(true);
  };

  const handleCloseModal1 = () => {
    setModalShow1(false);
  };
  const handleCloseModal2 = () => {
    setModalShow2(false);
  };
  const handleCloseModal3 = () => {
    setModalShow3(false);
  };

  const popupModal1 = (
    <Modal show={modalShow1} onHide={handleCloseModal1} style={{ marginTop: '120px' }}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#6b8e23' }}>Lighting Girl in the Night</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: '#8fbc8f' }}>
        <p>Descriptif: Une seule personne peut découvrir la vérité. Une seule personne possède le pouvoir caché de résoudre l’énigme. Une seule personne peut ramener...la lumière.</p>
        <p>Nom du studio: Gamesoft.</p>
        <p>Support du jeu: Playstation 5.</p>
        <p>Score favoris: 62% des joueurs ayant un compte enregistré.</p>
        <p>Moteur de jeu vidéo: Unity.</p>
        <p>Date estimée de fin de création: Février 2024.</p>
        <p>Budget: Environ 475.000€.</p>
        <p>Statut du jeu: en cours de développement.</p>
        <p>Type de jeu: Survival Horror.</p>
        <p>Nombre de joueur: Players 1 Co-op 1-2.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal1}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const popupModal2 = (
    <Modal show={modalShow2} onHide={handleCloseModal2} style={{ marginTop: '120px' }}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#6b8e23' }}>Yoda's Teaching</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: '#8fbc8f' }}>
        <p>Descriptif: Vivez une aventure inédite dans le rôle du maître le plus aimé et le plus ancien de l’histoire du cinéma. Apprenez à naviguer sur une planète inconnue et entraînez les nouveaux Jedi pour la bataille finale.</p>
        <p>Nom du studio: Gamesoft.</p>
        <p>Support du jeu: Playstation 5.</p>
        <p>Score favoris: 87% des joueurs ayant un compte enregistré.</p>
        <p>Moteur de jeu vidéo: Unity.</p>
        <p>Date estimée de fin de création: Novembre 2024.</p>
        <p>Budget: Environ 1.450.000€</p>
        <p>Statut du jeu: en cours de développement.</p>
        <p>Type de jeu: Aventure.</p>
        <p>Nombre de joueur: Players 1.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal2}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const popupModal3 = (
    <Modal show={modalShow3} onHide={handleCloseModal3} style={{ marginTop: '120px' }}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#6b8e23' }}>Metal Wire Spider</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ color: '#8fbc8f' }}>
        <p>Descriptif: Construisez votre monde, établissez vos propres règles. Vous décidez qui fait partie de la société et qui est rejeté.</p>
        <p>Nom du studio: Gamesoft.</p>
        <p>Support du jeu: Playstation 5</p>
        <p>Score favoris: 69% des joueurs ayant un compte enregistré.</p>
        <p>Moteur de jeu vidéo: Unity.</p>
        <p>Date estimée de fin de création: Juillet 2024.</p>
        <p>Budget: Environ 240.000€.</p>
        <p>Statut du jeu: en cours de développement.</p>
        <p>Type de jeu: Sandbox</p>
        <p>Nombre de joueur: Players-1 Co-op 1-2.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal3}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const project1 = [
    {
      title: "UPDATES CONSOLES NOVEMBRE",
      description: "Une mise à jour serait necessaire pour jouer aux jeux PS4 sur PS5 à partir du...",
      imgUrl: news1
    },
    {
      title: "14.11.2023. NOTES DE PATCH 7.10 DE HOUSE OF GAMER",
      description: "mISES à jour des agents, mises à jour des performances, corrections de bugs...",
      imgUrl: news2
    },
    {
      title: "Derniers articles",
      description: "MARC LEDEV NOMMÉ CHIEF EXECUTIVE OFFICER DE GAMESOFT. Caluire, le 6 novembre 2023 – Gamesoft, leader dans la création et l’édition de jeux, annonce aujourd’hui la nomination de Marc Ledev en tant que Chief Executive Officer...",
      imgUrl: news3
    }
  ];

  const project2 = [
    {
      title: "LIGHTING GIRL IN THE NIGHT",
      description: "Description: Voir détails",
      imgUrl: lastGames1,
    },
    {
      title: "YODA'S TEACHING",
      description: "Description: Voir détails",
      imgUrl: lastGames2,
    },
    {
      title: "METAL WIRE SPIDER",
      description: "Description: Voir détails",
      imgUrl: lastGames3,
    }
  ];

  const project3 = [
    {
      title: "DEAD UNIVERSE",
      description: "Spring 2025...",
      imgUrl: futureGames1,
    },
    {
      title: "ASSASSIN'S PRINCESS",
      description: "Christmas 2025...",
      imgUrl: futureGames2,
    },
    {
      title: "ROBOT WARS LANDSCAPE",
      description: "Coming in 2026...",
      imgUrl: futureGames3,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and News section</h2>
                <p>Dans cette session vous pourrez retrouver toutes les dernières actualités, mais aussi les différents projets en cours. 
                  Jeux vidéo en phase de programmation, de développement ou encore jeux vidéo en phase finale. 
                  Restez informé des différents patchs de nos jeux vidéo et recevez des informations sur les mises à jour obligatoires et non obligatoires. 
                  Dans la dernière rubrique exclusive vous pourrez retrouver nos futures idées de jeux vidéo avec les premiers concepts et la date de sortie prévue.
                  Stay Tuned !!!</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Les Dernières Actualités</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Jeux en cours de Développement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Jeux en cours de Planification</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                      {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard1
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                    {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <span className='button-container'>
                      <Button className='button' onClick={() => handleOpenModal1()}>Détails Jeux: Lighting Girl in the Night</Button>
                      {popupModal1}
                      <Button className='button' onClick={() => handleOpenModal2()}>Détails Jeux: Yoda's Teaching</Button>
                      {popupModal2}
                      <Button className='button' onClick={() => handleOpenModal3()}>Détails Jeux: Metal Wire Spider</Button>
                      {popupModal3}
                      </span>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
            </div>
            }
            </TrackVisibility> 
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}

