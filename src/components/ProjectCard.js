import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,githubLink,liveLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
          GitHub: <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>{githubLink}</a>
          </span>
          <hr></hr>
          <span>
            Live Demo: <a href={liveLink} target="_blank" rel="noopener noreferrer" style={{ color: 'red' }}>{liveLink}</a>
          </span> 
        </div>
      </div>
    </Col>
  )
}
