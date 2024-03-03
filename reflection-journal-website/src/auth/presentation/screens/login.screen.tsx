import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/form/login.component";

export default function LoginScreen() {
    return (
        <Container className="container-fluid vh-100">
            <Row className="h-100 align-items-center">
                <Col>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    );
}
