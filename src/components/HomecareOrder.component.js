import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

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

class HomecareOrderComponent extends Component {

    componentDidMount() {
        
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List>
                    <ListItem button>
                        <ListItemText primary="HomecareOrder" />
                    </ListItem>
                </List>
            </div>
        );
    }
}


export default withStyles(styles)(HomecareOrderComponent);