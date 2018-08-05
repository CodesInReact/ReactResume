import React from "react";

import Button from "components/CustomButtons/Button.jsx";


class ContactSubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    Submit() {
        const {RegisterService} = this.services;
        const {FormState} = this.props;
        RegisterService.Submit({
            Name: FormState.Name,
            Email: FormState.Email,
            Project: FormState.Project
        })

    }

    render() {
        return <Button onClick={() => {
            this.Submit();
        }} color="primary">Send Message</Button>
    }
}
export default ContactSubmitButton
