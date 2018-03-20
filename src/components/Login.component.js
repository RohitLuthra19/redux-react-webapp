import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/dispatcher';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';
import { LockIcon } from 'material-ui-icons';
//import LockIcon from 'material-ui/svg-icons/action/lock-outline';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 300,
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
    },
    button: {
        margin: theme.spacing.unit,
        width: '100%',
    },
    avatar: {
        backgroundColor: red[500],
      },
});

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleEmailChange = email => event => {
        this.setState({
            [email]: event.target.value,
        });
    };

    handlePassowordChange = password => event => {
        this.setState({
            [password]: event.target.value,
        });
    };
    handleLoginClick = data => event => {
        console.log(data);
    };

    render() {
        const { classes } = this.props;
        // eslint-disable-next-line
        let { email, password } = this.state; // eslint-disable-next-line
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        return (
            <div className={classes.main}>
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>A</Avatar>
                        }
                        title="Admin"
                        subheader="Please fill the form"
                    />
                    <CardContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="email"
                                label="Email-Id"
                                className={classes.textField}
                                value={this.state.email}
                                onChange={this.handleEmailChange('email')}
                                margin="normal" />
                            <TextField
                                id="password"
                                label="Password"
                                className={classes.textField}
                                value={this.state.password}
                                onChange={this.handlePassowordChange('password')}
                                margin="normal" />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button variant="raised" color="primary" className={classes.button} onClick={this.handleLoginClick(this.state)}>Login</Button>
                    </CardActions>
                </Card>
            </div>)
    }

    onSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state; // eslint-disable-next-line
        this.props.login(email, password);
        this.setState({
            email: '',
            password: ''
        });
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginComponent));