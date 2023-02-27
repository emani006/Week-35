import React from 'react'

export default class TextForm extends React.Component{
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

    // второй аргумент метода setState - функция обратного вызова (в данном случае, функция проверки)
        handleInput = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({[name]: value}, () => { this.validField(name, value) });
        }

        validField = (fieldName, value) => {
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;
            switch(fieldName) {
                case 'email':
                    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    break;
                case 'password':
                    passwordValid = value.length >= 6;
                    break;
                default:
                    break;
            }
            this.setState({
                    emailValid: emailValid,
                    passwordValid: passwordValid
                }, this.validateForm);
        }
    
        validateForm() {
            this.setState({formValid: this.state.emailValid &&
                                this.state.passwordValid});
            }
        
    // вывод приветственного текста после успешной валидации
        submitLoginResult = () => {
            this.setState({welcomeBlock : true});
            this.setState({text : 'Welcome!'});
        }
        
    render(){
        return(
            <>
            <form className='signinForm'>
                <h2>Log in with your credentials:</h2>
                {this.state.formValid && this.state.welcomeBlock ? (<div className='alert alert-success' role='alert'>
                    {this.state.text}
                </div>) : ''}

                <div className='mb-3'>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='email'>E-mail: </label>
                        <input className='form-control' type="email" value={this.state.email} name="email" onChange={this.handleInput} required placeholder='enter your e-mail'/>
                    </div>
                    <div className='form-group'>
                        <label className='form-label' htmlFor='password'>Password: </label>
                        <input className='form-control' type="password" value={this.state.password} name="password" onChange={this.handleInput} required placeholder='enter your password (min 6 symbols)'/>
                    </div>
                </div>
                <button className='btn btn-primary validButton' disabled={!this.state.formValid} type="button" onClick={this.submitLoginResult}> LOG IN </button>
            </form>
        </>  
        )
    }
}