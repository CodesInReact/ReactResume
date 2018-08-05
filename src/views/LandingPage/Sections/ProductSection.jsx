import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Let's talk product</h2>
                        <h5 className={classes.description}>
                            ReactJs have largely become to preferred tool of developers worldwide. At React Coders, we
                            will not only create a website for you according to your design goals, but surpass them
                            effortlessly. Whether it’s starting a project from scratch or rescuing a project abandoned
                            midway by inferior developers, we’re confident we can handle and any assignment.
                        </h5>
                    </GridItem>
                </GridContainer>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <InfoArea
                                title="Slack Connectivity"
                                description="Chat with us about your project at any time for constant updates and reviews."
                                icon={Chat}
                                iconColor="info"
                                vertical
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <InfoArea
                                title="React"
                                description="We’re confident that our expertise and skills in React can surpass the challenges or any project. There’s no task too great or too small."
                                icon={VerifiedUser}
                                iconColor="success"
                                vertical
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <InfoArea
                                title="Fingerprint"
                                description="With over 28 years of coding experience, it goes without saying that we’ve left our mark on the web. Check out our past projects for more information."
                                icon={Fingerprint}
                                iconColor="danger"
                                vertical
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(productStyle)(ProductSection);
