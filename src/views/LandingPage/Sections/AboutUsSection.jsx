import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

 
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class AboutUsSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>We Enjoy this</h2>
                        <h5 className={classes.description}>
                            At React Coder we enjoy solving problems that other coders can't. No obstacle is too
                            big
                            and no task is too small. We have over 28 years of coding experience and have been
                            working professionally within the industry for over 18 years. Having won prestigious
                            coding events as well as worked closely with many satisfied clients, React Coder has
                            established itself as an industry leader when it comes to developing sites in React
                            and
                            its related languages. We believe in finishing every project to the desired
                            specifications and going well beyond expectations. Get in contact with us today and
                            find
                            out how we can help you.  </h5>
                    </GridItem>
                </GridContainer>

            </div>
        );
    }
}

export default withStyles(productStyle)(AboutUsSection);
