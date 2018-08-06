/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import {Link} from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {  VerifiedUser,BugReport} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
    const {classes} = props;
    return <List />
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    href="/client-login"
                    color="transparent"

                    className={classes.navLink}
                >
                    <VerifiedUser className={classes.icons}/> Client Login
                </Button>

            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    href="https://join.slack.com/t/reactcoders/shared_invite/enQtNDA2ODI4Njc4NDM0LTczZWNmNWFmNTEyZGEzMmMzN2U0OGIzOWIyMjJmNThlNzUyZTdiOGY3NWY4M2YyZDg0MDU3MzU0ZTNlNGEzNmQ"
                    color="transparent"

                    className={classes.navLink}
                ><BugReport className={classes.icons}/> Start A Project</Button>

            </ListItem>

            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="Follow us on twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        href="https://twitter.com/CoderReact"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-twitter"}/>
                    </Button>
                </Tooltip>
            </ListItem>

        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
