import { Button, Card, Container, Form } from "react-bootstrap";
import "./form.css";
import { Link } from "react-router-dom";
import { UserRegisterBody, UserRegisterErrorResponse } from "../../../domain/entities/user.entity";
import { ChangeEvent, FormEvent, useState } from "react";
import { register } from "../../../data/api/register.api";
import useSignIn from "react-auth-kit/hooks/useSignIn";

export default function RegisterForm() {
    const signIn = useSignIn();
    const [formData, setFormData] = useState<UserRegisterBody>({ email: "", username: "", password: "", image_url: "default.png" });
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
    const [submitText, setSubmitText] = useState<string>("REGISTER");
    const [processing, setProcessing] = useState<boolean>(false);

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();

        setErrors([]);
        setSubmitDisabled(true);
        setSubmitText("REGISTERING...");
        setProcessing(true);

        register(formData)
            .then((response) => {
                if (response.status === "success") {
                    setSubmitText("SUCCESS!");
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
                setProcessing(false);
                if (error.response.status === 400 && error.response.data.errors) {
                    const response: UserRegisterErrorResponse = error.response.data;
                    const errorMessages = response.errors.map((error) => error.msg);
                    setErrors([...errorMessages]);
                } else if (error.response.data.message) {
                    setErrors([error.response.data.message]);
                } else {
                    setErrors(["An error occurred. Please try again later."]);
                }
                setSubmitDisabled(false);
            });
    }

    const onUsernameChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        // only allow letters and numbers
        if (target.value.match(/[^A-Za-z0-9]/)) {
            e.preventDefault();
            return;
        }

        setFormData({ ...formData, username: target.value });
    }

    return (
        <Container className="container-fluid register-container">
            <Form className="register-form m-3">
                <h1 className="ms-1 register-header">Register</h1>
                <p className="ms-1 mb-3">Create an account for your reflection journal.</p>
                <Form.Group className="mb-3">
                    <Form.Control className="register-input" disabled={processing} id="register-email" onChange={(e)=>setFormData({...formData, email: e.target.value.replace(" ", "")})} type="email" autoComplete="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control className="register-input" disabled={processing} id="register-username" onChange={(e)=>{onUsernameChange(e)}} type="text" autoComplete="username" placeholder="Username" value={formData.username} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control className="register-input" disabled={processing} id="register-password" onChange={(e)=>setFormData({...formData, password: e.target.value})} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    {confirmPassword !== formData.password && confirmPassword.length > 0 &&
                    <Form.Label className="ms-1 invalid-confirm-password-label">Password must be the same.</Form.Label>}
                    <Form.Control className="register-input" disabled={processing} id="register-confirm-password" onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" />
                </Form.Group>
                <ul className="list mb-3">
                    <li>
                        <Link to="/login" className="link ms-1">Already have an account? Login here!</Link>
                    </li>
                </ul>
                <Button
                    disabled={submitDisabled || (confirmPassword !== formData.password) || (formData.password.length === 0) || (formData.email.length === 0) || (formData.username.length === 0)}
                    className="register-btn"
                    type="submit"
                    onClick={(e) => handleRegister(e)}
                >{submitText}</Button>
            </Form>
            {errors && errors.length > 0 &&
                <Card className="invalid-input m-3">
                    <Card.Body>
                        <Card.Title className="invalid-input-title">Error</Card.Title>
                        <Card.Text>
                            <ul>
                                {errors.map((error, index) => {
                                    return <li key={index}>{error}</li>
                                })}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>}
            {

            }
        </Container>
    );
}
