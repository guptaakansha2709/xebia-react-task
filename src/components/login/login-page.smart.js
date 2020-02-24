import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './login.style.css';
import '../../index.css';
import { connect } from 'react-redux';
import { Snackbar, Button } from "@material-ui/core";
import LoginForm from './login-form.smart';
import styles from './login.style';
import { closeSnackbarRequest } from '../../actions/snackbar.action';

class LoginPage extends Component {
    render() {
        const { classes } = this.props;
        // const loginStatus = this.props.loginStatus;
        return (
            <div className="Loginpage">
                <Grid container className="margin-0 width-100" spacing={24}>

                    <Grid item sm={6} className="nopadding">
                        <div className="vert-mid form-padding">
                            <Paper className={classes.paper}>
                                <Typography variant="h5" gutterBottom><strong> LOGIN </strong> </Typography>
                                <LoginForm />
                            </Paper>
                        </div>

                    </Grid>
                </Grid>
                <Snackbar
                    open={this.props.snackbar.open}
                    message={this.props.snackbar.message}
                    autoHideDuration={this.props.snackbar.autoHideDuration}
                    onClose={this.props.closeSnackbarRequest}
                    action={[
                        <Button
                            key="undo"
                            color="secondary"
                            size="small"
                            onClick={this.props.closeSnackbarRequest}
                        >Close </Button>
                    ]}
                />

            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        closeSnackbarRequest: () => dispatch(closeSnackbarRequest())
    };
}
const mapStateToProps = state => {
    return {
        snackbar: state.snackbar
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withStyles(styles)(LoginPage));