import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";

import GridItem from "components/Grid/GridItem.jsx";
import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import ImageModal from "../../../components/ImageModal/ImageModal";

class TutorialStep extends React.Component {
    render() {
        const {classes,ImgSrc} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <img src={ImgSrc} style={{   width: '100%'}}        />
                        <h2 className={classes.title}>{this.props.Header}</h2>
                        <h5 className={classes.description}>
                            {this.props.children}
                        </h5>
                    </GridItem>
                </GridContainer>
                <div>

                </div>
            </div>
        );
    }
}

export default withStyles(productStyle)(TutorialStep);
