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
import RegularButton from "../../components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import TutorialImage1 from "../../assets/img/Application1.png";
import TutorialImage2 from "../../assets/img/Application0.png";
import TutorialImage3 from "../../assets/img/Application2.png";
import TutorialImage4 from "../../assets/img/Application3.png";
import TutorialImage5 from "../../assets/img/Application4.png";
import TutorialImage6 from "../../assets/img/Application7.png";
import TutorialStep from './Sections/TutorialStep';
const dashboardRoutes = [];

class TutorialPage extends React.Component {
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
                                <h1 className={classes.title}>A Brief tutorial.</h1>
                                <h4>
                                    Let's Get Started.
                                </h4>
                                <br/>

                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <TutorialStep Header={"Loading A File"}
                                      ImgSrc={TutorialImage1} >
                            Loading a file can be accomplished by dragging a single file or several pcf
                            files onto the display. Be sure to select your options first.

                        </TutorialStep>
                        <TutorialStep Header={"Settings"}
                                      ImgSrc={TutorialImage6} >
                            Under the file menu, the settings will allow you to set the load settings for the
                            files you import.


                        </TutorialStep>
                        <TutorialStep Header={"If you don't want the data rounded check this box"}
                                      ImgSrc={TutorialImage2 } >


                        </TutorialStep>
                        <TutorialStep Header={"Check this to ignore PIPELINE-REFERENCE as a subline"}
                                      ImgSrc={TutorialImage3 } >
                            Example: <br />
                            <img src={TutorialImage5} />

                        </TutorialStep>
                        <TutorialStep Header={"Select the Geometry types you want processed for disconnects"}
                                      ImgSrc={TutorialImage4 } >


                        </TutorialStep>

                        <h2 className={classes.subtitle}>Once you select some files you can go on to part 2</h2>
                        <RegularButton color={"facebook"} fullWidth={true}  href={"/tutorial-2"}> Page 2 </RegularButton>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(TutorialPage);
