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

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import HistorySection from './Sections/HistorySection'
import AboutUsSection from './Sections/AboutUsSection';
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
                                <h1 className={classes.title}>Your Project Starts With Us.</h1>
                                <h4>
                                    First impressions count. A page’s construction and layout can make or break a
                                    customer’s first impression and potential sales. Let us design or redesign your site
                                    using cutting-edge technology to ensure a professional finish and incredible user
                                    experience.
                                </h4>
                                <br/>
                                <Button
                                    color="danger"
                                    size="lg"
                                    href="https://join.slack.com/t/reactcoders/shared_invite/enQtNDA2ODI4Njc4NDM0LTczZWNmNWFmNTEyZGEzMmMzN2U0OGIzOWIyMjJmNThlNzUyZTdiOGY3NWY4M2YyZDg0MDU3MzU0ZTNlNGEzNmQ"

                                >
                                    <i className="fas fa-play"/>Let's Get Started
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <HistorySection/>
                        <AboutUsSection/>
                        <ProductSection/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(LandingPage);
