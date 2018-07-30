import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import WorkSection from "./Sections/WorkSection.jsx";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/bg7.jpg";
import Check from "@material-ui/icons/Check";

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }

    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function () {
                this.setState({cardAnimaton: ""});
            }.bind(this),
            700
        );
    }

    render() {

        const {classes, location, ...rest} = this.props;
        let Notification = "";
        if(location.search ==="?thank=1")
        {
Notification =      <SnackbarContent
    message={
        <span>
              <b>SUCCESS :</b> We'll be in contact shortly
            </span>
    }
    close
    color="success"
    icon={Check}
/>
        }
        return (
            <div>
                <Header
                    color="transparent"
                    brand="React Coders -- Different"
                    rightLinks={<HeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>

                        <Card className={classes[this.state.cardAnimaton]}>
                            {Notification}
                                <WorkSection/>
                        </Card>
                    </div>
                    <Footer whiteFont/>
                </div>
            </div>
        );
    }
}

export default withStyles(loginPageStyle)(ContactPage);
