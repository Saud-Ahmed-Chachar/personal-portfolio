import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/projectImg-4.png";
import projImg5 from "../assets/img/projectImg-5.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Grace E-commerce Website",
      githubLink:'https://github.com/Saud-Ahmed-Chachar/SaudAhmed-FinalExam',
      liveLink:'https://saud-ahmed-final-exam.vercel.app/',
      imgUrl: projImg3,
    },

    {
      title: "TO DO LIST",
      imgUrl: projImg1,
      githubLink:'https://github.com/Saud-Ahmed-Chachar/Todo-list-',
      liveLink:'https://todo-list-bfe2.vercel.app/',
    },
    {
      title: "Task Master",
      githubLink:'https://github.com/EADQuizez/TaskMaster',
      liveLink:'https://taskmasterbysaudahmed.netlify.app/#',
      imgUrl: projImg2,
    },
   
    {
      title: "JokerBot- [mini API project]",
      githubLink:'https://github.com/Saud-Ahmed-Chachar/Html-CSS-JavaScript-and-API-s-Mini-projects/tree/main/Joker%20Bot',
      liveLink:'https://jokerbot.netlify.app/',
      imgUrl: projImg4,
    },
    {
      title: "Leads & Track Extension",
     githubLink:'https://github.com/Saud-Ahmed-Chachar/leads-tracker-extension-/tree/main/Leads%20Tracker',
     liveLink:'N/A',
      imgUrl: projImg5,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to the showcase of my web-based projects! These projects represent my journey as a software engineer, where I've applied my skills to create meaningful and innovative solutions. Each project reflects my passion for coding and my commitment to producing high-quality results. Take a look at some of my noteworthy endeavors</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Will be listed soon!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Will be listed soon!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
