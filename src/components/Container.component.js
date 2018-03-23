import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    }
});

class ContainerComponent extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                Hello {this.props.item}
            </div>
        );
    }
}


export default withStyles(styles)(ContainerComponent);