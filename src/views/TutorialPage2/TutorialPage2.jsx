import React from "react";

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import RegularButton from "../../components/CustomButtons/Button";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

import TutorialImage8 from "../../assets/img/Application8.png";
import TutorialImage9 from "../../assets/img/Application9.png";

import TutorialStep from '../TutorialPage/Sections/TutorialStep';
const dashboardRoutes = [];

class TutorialPage2 extends React.Component {
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
                                      ImgSrc={TutorialImage8} >
                            Select a file to load have the Pipeline-Reference List show the
                            Pipeline-references in that file.
                            This will load the file in the editor and signal disconnected geometry in red.



                        </TutorialStep>
                        <TutorialStep Header={"Loading A File"}
                                      ImgSrc={TutorialImage9} >
                            You may enter a value into this text field and his Check Filtered to
                            narrow down the file list

                        </TutorialStep>

                        <h2 className={classes.subtitle}>Once you select some files you can go on to part 3</h2>
                        <RegularButton color={"facebook"} fullWidth={true}  href={"/tutorial-3"}> Page 3 </RegularButton>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(TutorialPage2);
