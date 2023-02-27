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
            welcomeBlock : false
            }
        }

        handleInput = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({[name]: value});
        }
        

        handleSubmit = (event) => {
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            } 
                this.setState({formValid : true});
                this.setState({welcomeBlock : true});
                this.setState({text : 'Welcome!'});
                console.log(this.formValid);
        }


    render(){
        return(
            <>
            <Form className='signinForm' noValidate validated={this.validated} onSubmit={this.handleSubmit}>
                    <h2>Log-in form (Bootstrap components)</h2> 
                    {this.state.formValid && this.state.welcomeBlock ? (<div className='alert alert-success' role='alert'>
                        {this.state.text}
                    </div>) : ''}
                <Form.Group as={Col} md="14" className='form-group'>
                        <Form.Label className='form-label' htmlFor='email'>E-mail: </Form.Label>
                        <Form.Control className='form-control' type="email" value={this.state.email} onChange={this.handleInput} name="email" required placeholder='enter your e-mail'/>
                        <Form.Control.Feedback type="invalid"> Please enter e-mail </Form.Control.Feedback>
                        
                        <Form.Label className='form-label' htmlFor='password'>Password: </Form.Label>
                        <Form.Control className='form-control' type="password" value={this.state.password} name="password" onChange={this.handleInput} required placeholder='enter your password (min 6 symbols)'/>
                        <Form.Control.Feedback type="invalid"> Please enter password </Form.Control.Feedback>
                </Form.Group>
                <Button className='btn btn-primary validButton' disabled={!this.state.formValid} type="submit"> LOG IN </Button>
            </Form>
        </>  
        )
    }
}