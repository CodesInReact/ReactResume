import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {Redirect} from 'react-router'

import {

    AddChangeEventWithObject,

    CodeSplitComponent
} from "../../BooBoo/BooBoo";


import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

const dashboardRoutes = [];
let Header = CodeSplitComponent( import("components/Header/Header.jsx"));
let Footer = CodeSplitComponent( import( "components/Footer/Footer.jsx"));
let GridContainer=  CodeSplitComponent( import( "components/Grid/GridContainer.jsx"));
let GridItem = CodeSplitComponent( import( "components/Grid/GridItem.jsx"));
let HeaderLinks = CodeSplitComponent( import( "components/Header/HeaderLinks.jsx"));
let Parallax = CodeSplitComponent( import( "components/Parallax/Parallax.jsx"));
let SectionLogin = CodeSplitComponent( import( "./Sections/SectionLogin"));
let SectionCarousel = CodeSplitComponent( import( "./Sections/SectionCarousel"));
class LandingPage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            Image2Seen:false
        }
        AddChangeEventWithObject({Image2Seen: (Data)=>
            {
                debugger;
                this.setState(Data);
            }
        });
    }
    render() {
        const {classes, ...rest} = this.props;
        if(this.state.Image2Seen){
            return ( <Redirect push to="/2" />)
        }
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
                <Parallax filter image={require("assets/img/bg8bit.gif")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Some title.</h1>
                                <h4>
                                    A header about the tests
                                </h4>


                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>

                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                               <SectionCarousel />
                                <SectionLogin />
                            </GridItem>
                        </GridContainer>


                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(LandingPage);
