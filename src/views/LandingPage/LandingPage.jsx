import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
    render() {
        const {classes, ...rest} = this.props;
        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand="React Coders"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax filter image={require("assets/img/matrix.gif")}>
                    <div className={classes.container}>
                                             <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Split, Merge, and Fix Pcf files.</h1>
                                <h4>
                                    Quickly process all the annoying errors in your pcf file with this multifile tool.
                                </h4>
                                <br/>
                                <Button
                                    color="danger"
                                    size="lg"
                                    href="/tutorial"

                                >
                                    <i className="fas fa-play"/>Let's Get Started
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(LandingPage);
