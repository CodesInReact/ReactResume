import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ContactSubmitButton from "../Pieces/ContactSubmitButton"
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class ContactSection extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        Name:'',
        Email:'',
        Project:''
    }
  }


  render() {

    const { classes } = this.props;

    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Divide details about your project work into parts. Write
              a few lines about each one and the priority of each one.
              Please don't send any passwords or logins.
                Visit our <a href={"https://join.slack.com/t/reactcoders/shared_invite/enQtNDA2ODI4Njc4NDM0LTczZWNmNWFmNTEyZGEzMmMzN2U0OGIzOWIyMjJmNThlNzUyZTdiOGY3NWY4M2YyZDg0MDU3MzU0ZTNlNGEzNmQ"}>slack</a>
            </h4>
            <form method={"post"} action={"form.php"}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    name={"Name"}
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={this.state.Name}
                    onChange={(evt)=>{
                        alert("hi");
                        this.setState({Name:evt.target.value})
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    name={"Email"}
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    value={this.state.Email}
                    OnChange={(Email)=>{
                        debugger;
                         this.setState({Email:Email})
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="The Project Details"
                  name={"Message"}
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                  value={this.state.Project}
                  onChange={(Project)=>{
                    alert("hi");
                    this.setState({Project:Project})
                  }}
                />
                <GridContainer >
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                    style={{justify:"center"}}
                  >
                    <ContactSubmitButton FormState={{
                        Name: this.state.Name,
                        Email: this.state.Email,
                        Project: this.state.Project
                    }} />
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(workStyle)(ContactSection);

