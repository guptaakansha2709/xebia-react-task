import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import LoginPage from './login/login-page.smart';
import { connect } from "react-redux";
import { withRouter } from 'react-router'
import UtilService from '../services/util.service';

class RouteComponent extends Component {

    constructor(props) {
        super(props);
        this.props.history.listen((location, action) => {
            if (location.pathname === '/login') {
                // this.props.handleLogout()
            }
        });
    }

    componentDidMount() {
        let { location } = this.props
        if (location.pathname !== "/login" && location.pathname !== "/") {
            // checkAuthToken()
        }


    }

    componentWillMount() {
        // if (UtilService.isPlatformWindows()) {
        //     var link = document.createElement('link');
        //     link.id = 'id2';
        //     link.rel = 'stylesheet';
        //     link.href = `${process.env.PUBLIC_URL}/assets/css/windows.css`
        //     document.head.appendChild(link);
        // }
    }


    getPath = () => {
        let { userAuthorized, location } = this.props;
        let path = location.pathname

        if (location.pathname === "/login") {
            return "/login"
        }
        return path
    }


    render() {

        let { location } = this.props;
        let pathNew = this.getPath()
        return (
            <Switch>
                {pathNew !== location.pathname && <Redirect to={pathNew}></Redirect>}
                <Route exact path='/login' component={LoginPage}></Route>
                <Route exact path='/home' component={App}></Route>
                {location.pathname !== '/login' && location.pathname !== '/home' && <Redirect to='/login' />}
            </Switch>
        )
    }
}


const mapStateToProps = state => {
    return {
        userAuthorized: state.userAuthorized
    };
};

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteComponent));

