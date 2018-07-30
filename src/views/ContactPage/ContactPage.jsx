import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import ContactSection from "./Sections/ContactSection";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";

import Card from "components/Card/Card";


import loginPageStyle from "assets/jss/material-kit-react/views/loginPage";

import image from "assets/img/bg7.jpg";
import Check from "@material-ui/icons/Check";
import {injector} from 'react-services-injector';

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
        const {RegisterService} = this.services;

        const {classes,  ...rest} = this.props;

        let Content = <ContactSection/>
        if (RegisterService.Submitted) {
            Content = <SnackbarContent
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
                            {Content}
                        </Card>
                    </div>
                    <Footer whiteFont/>
                </div>
            </div>
        );
    }
}
let StyledPage = withStyles(loginPageStyle)(ContactPage);
export default injector.connect(StyledPage, {
    toRender: ['RegisterService'] //we only need Storage in the component
});

