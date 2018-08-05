import React from "react";
import ContactSection from "../Sections/ContactSection";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Check from "@material-ui/icons/Check";


class EmailFormWithThankYou extends React.Component {
    render() {
        const {RegisterService} = this.services;
        let Content = "";
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
        }else {
            Content = <ContactSection/>; // to avoid creating it unneeded
        }
        return Content;
    }
}
export default EmailFormWithThankYou;
