import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-sm-end" style={{ marginTop: '20px' }}>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/softwareengineersaudahmed/"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://www.facebook.com/profile.php?id=100011626000855"><img src={navIcon2} alt="Icon" /></a>
            <a href="https://www.instagram.com/s_a_u_d_a_h_m_e_d_/"><img src={navIcon3} alt="Icon" /></a>
          </div>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60px' }}>
            <p>Copyright 2024. All Rights Reserved by Saud Ahmed</p>
          </div>
</Col>

        </Row>
      </Container>
    </footer>
  )
}
