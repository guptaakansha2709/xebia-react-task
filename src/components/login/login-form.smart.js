import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './login.style.css';
import { fetchLoginData } from '../../actions/login.action';
import { withRouter } from 'react-router'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.onLoginHandler = this.onLoginHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);

    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    onLoginHandler = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        let loginObj = {
            username,
            password
        }
        this.redirectToHome();
        this.props.fetchLoginData(loginObj)
    }
    redirectToHome = () => {
        debugger
        return (
            < Redirect exact from='/login' to="/home" ></Redirect >
        )


    }

    render() {
        const { password, username } = this.state;
        const isEnabled = username && password ? true : false;
        // check for login status 

        return (
            <div>

                <form onSubmit={this.onLoginHandler}>
                    <FormControl fullWidth>
                        <TextField
                            label="Username"
                            placeholder="Enter username"
                            margin="normal"
                            type="text"
                            value={username}
                            onChange={this.handleChange('username')}
                        />
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={this.handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl className="pull-right loginButton">
                        <Button type="submit" value="Submit" disabled={!isEnabled} variant="contained" size="large" color="primary" onClick={this.onLoginHandler}>LOGIN</Button>
                    </FormControl>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    fetchLoginData: data => dispatch(fetchLoginData(data)),
});
const mapStateToProps = state => {
    return {
        loginStatus: state.loginInfo.loginStatus,
        loginApiResponse: state.loginInfo.loginApiResponse
    };
}

export default withRouter(connect(
    mapStateToProps, mapDispatchToProps
)(LoginForm));