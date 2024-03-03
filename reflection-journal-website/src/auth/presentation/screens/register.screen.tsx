import { Col, Container, Row } from "react-bootstrap";
import RegisterForm from "../components/form/register.component";

export default function RegisterScreen() {
    return (
        <Container className="container-fluid vh-100">
            <Row className="h-100 align-items-center">
                <Col>
                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    );
}
