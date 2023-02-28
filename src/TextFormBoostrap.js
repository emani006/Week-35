import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export default class TextFormBootstrap extends React.Component{
    constructor () {
        super();
        this.state = {
            email : '',
            password : '',
            emailValid: false,
            passwordValid: false,
            formValid: false,
            text : '',
            welcomeBlock : false,
            validated : false
            }
        }

        handleInput = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({[name]: value});

            if (this.state.email !== '' && this.state.password.length >= 5){
                this.setState({formValid : true});
                console.log(this.state.validated);
            }
        }
        

        handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
                this.setState({validated : true});
        }

        getWelcomed = () => {
            this.setState({welcomeBlock : true});
            this.setState({text : 'Welcome!'});
            console.log(this.state.formValid);
        }

    render(){
        return(
            <>
            <Form className='signinForm' noValidate validated={this.validated} onClick={this.handleSubmit}>
                    <h2>Log-in form (Bootstrap components)</h2> 
                    {this.state.formValid && this.state.welcomeBlock ? (<div className='alert alert-success' role='alert'>
                        {this.state.text}
                    </div>) : ''}
                <Form.Group as={Col} md="14" className='form-group'>
                        <Form.Label className='form-label' htmlFor='email'>E-mail: </Form.Label>
                        <Form.Control className='form-control' type="email" value={this.state.email} onChange={this.handleInput} name="email" required placeholder='exampla@example.com'/>
                        <Form.Control.Feedback type="invalid"> Please enter e-mail </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="14" className='form-group'>
                        <Form.Label className='form-label' htmlFor='password'>Password: </Form.Label>
                        <Form.Control className='form-control' type="password" value={this.state.password} name="password" onChange={this.handleInput} required placeholder='min 6 symbols'/>
                        <Form.Control.Feedback type="invalid"> Please enter password </Form.Control.Feedback>
                </Form.Group>
                <Button className='btn btn-success validButton' disabled={!this.state.formValid} type="button" onClick={this.getWelcomed}> LOG IN </Button>
            </Form>
        </>  
        )
    }
}