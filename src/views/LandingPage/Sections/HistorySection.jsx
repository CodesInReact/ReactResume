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
                            The adage, “you get what you pay for” has never been more true. The internet is full of
                            developer-cowboys who work for sub-par industry rates and leave projects unfinished,
                            unsolved and potentially with more problems than when they started. Not at React Coder. We
                            believe in work conscientiously to consistently high standards regardless of the nature of
                            the project. Below are a few examples of clients we have helped out after having been
                            deserted midway through development.
                        </h5>
                    </GridItem>
                </GridContainer>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard Date={"July 28,2018"} classes={classes} Title="Ut Post" SubTitle="Product Recovery"
                                   Image={UtImage} SmallCircleText={"UT"}
                                   Link="http://utpost.co"
                                   Description="UtPost’s developer left right in the middle of MVP development. We were hired to pick up where the others had left off, and made sure that the project was completed to the desired specifications."
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard Date={"July 15,2018 -"} classes={classes} Title="Performing Artists Agency"
                                   SubTitle="Site Fix" SmallCircleText={"PPA"}
                                   Image={PPaImage}
                                   Link="http://performingartistsagency.com/"
                                   Description="This is an ongoing project in which contact was lost with the developer during the website’s construction. By remaining in constant contact with the owners’ and applying our expertise we are able to keep the site updated and functioning at peak performance."
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <MediaCard Date={"March 1,2017 - January 15th, 2018"} classes={classes} SmallCircleText={"W"}
                                   Title="WATM"
                                   SubTitle="Longer Term Project, site overhaul, google bounce rate reduction, page speed increase, loadtime increase, mobile compliance, assist in selling to investors."
                                   Image={MightyImage}
                                   Link="http://wearethemighty.com/"
                                   Description="When we were approached to attend to WATM, the bounce rate to the site was over 80%. By redesigning the site using preact as well as our tried-and-tested industry methods, we were able to lower the bounce rate significantly and improve the site ratings."
                        />
                    </GridItem>
                </GridContainer>


            </div>
        );
    }
}

export default withStyles(productStyle)(HistorySection);
