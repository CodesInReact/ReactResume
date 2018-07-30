import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons


import UtImage from '../../../assets/img/studio-5.jpg';
import PPaImage from '../../../assets/img/ppa.png'
import MightyImage from '../../../assets/img/mighty.png'
import MediaCard from "../../../components/MediaCard/MediaCard"
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class HistorySection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Let's talk recent history</h2>
                        <h5 className={classes.description}>
                            In recent time it seems hiring cheaply only leads to one thing. A developer that has ghosts
                            and a project that is incomplete. Here are some people we helped out of that hole
                            showing them what industry standard rates will get you.
                        </h5>
                    </GridItem>
                </GridContainer>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard Date={"July 28,2018"} classes={classes} Title="Ut Post" SubTitle="Product Recovery" Image={UtImage} SmallCircleText={"UT"}
                                   Link="http://utpost.co"
                                   Description="UTpost had it's developer leave in the middle of MVP development. We swooped in and took over the project for max satisfaction."
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard Date={"July 15,2018 -"} classes={classes} Title="Performing Artists Agency" SubTitle="Site Fix" SmallCircleText={"PPA"}
                                   Image={PPaImage}
                                   Link="http://performingartistsagency.com/"
                                   Description="Another site that had lost connection with it's developer for some time. The React Coder came in set them up. On going project as portions of the site were deleted."
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard Date={"March 1,2017 - January 15th, 2018"} classes={classes} SmallCircleText={"W"}
                                   Title="WATM" SubTitle="Longer Term Project, site overhaul, google bounce rate reduction, page speed increase, loadtime increase, mobile compliance, assist in selling to investors."
                                   Image={MightyImage}
                                   Link="http://wearethemighty.com/"
                                   Description="When we came to we are the mighty they had over a 80% bounce rate. We redesigned their site using React's good brother, preact. That, and some other industry secrets only we know got them
                                   down to an acceptable bounce rate and sold."
                        />
                    </GridItem>
                </GridContainer>


            </div>
        );
    }
}

export default withStyles(productStyle)(HistorySection);
