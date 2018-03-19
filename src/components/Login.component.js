import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/dispatcher';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    render() {
        const { classes } = this.props;
        // eslint-disable-next-line
        let { email, password } = this.state; // eslint-disable-next-line
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        return (<div><form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal" /></form></div>)
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