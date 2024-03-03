import { Button, Card, Container, Form } from "react-bootstrap";
import "./form.css";
import { Link } from "react-router-dom";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { UserLoginBody, UserLoginErrorResponse } from "../../../domain/entities/user.entity";
import { FormEvent, useState } from "react";
import { login } from "../../../data/api/login.api";

export default function LoginForm() {
    const signIn = useSignIn();
    const [formData, setFormData] = useState<UserLoginBody>({email: "", password: ""});
    const [errors, setErrors] = useState<string[]>([]);
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
    const [submitText, setSubmitText] = useState<string>("LOGIN");

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        setErrors([]);
        setSubmitDisabled(true);

        login(formData)
            .then((response) => {
                if (response.status === "success") {
                    setSubmitText("LOGGING IN...");
                    signIn({
                        auth: {
                            token: response.token,
                            type: "Bearer"
                        }
                    });
                    window.location.href = "/home";
                }
                
                
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    const response: UserLoginErrorResponse = error.response.data;
                    const errorMessages = response.errors.map((error) => error.msg);
                    setErrors([...errorMessages]);
                } else if (error.response.status === 403) {
                    setErrors([error.response.data.message]);
                }
                setSubmitDisabled(false);
            });
    }

    return (
            <Container className="container-fluid login-container">
                <Form className="login-form m-3">
                    <h1 className=" ms-1 login-header">Login</h1>
                    <p className="ms-1 mb-3">Embrace self-discovery, log in to your reflection journal.</p>
                    <Form.Group className="mb-3">
                        <Form.Control className="login-input" type="email" placeholder="Email" onChange={(e)=>setFormData({...formData, email: e.target.value})} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control className="login-input" type="password" placeholder="Password" onChange={(e)=>setFormData({...formData, password: e.target.value})} />
                    </Form.Group>
                    <ul className="list mb-3">
                        <li>
                            <Link to="/forgot-password" className="link ms-1">Forgot password?</Link>
                        </li>
                        <li>
                            <Link to="/register" className="link ms-1">Don't have an account? Register here!</Link>
                        </li>
                    </ul>
                    <Button disabled={submitDisabled} className="login-btn" type="submit" onClick={(e) => handleLogin(e)}>{submitText}</Button>
                </Form>
                {errors && errors.length > 0 &&
                <Card className="invalid-input m-3">
                    <Card.Body>
                        <Card.Title className="invalid-input-title">An Error Occured</Card.Title>
                        <Card.Text className="">
                            <ul>
                                {errors.map((error, index) => {
                                    return <li key={index}>{error}</li>
                                })}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>}
            </Container>
    );
}

