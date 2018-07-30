import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
// @material-ui/core components
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import StarIcon from '@material-ui/icons/Star';
import blue from '@material-ui/core/colors/blue';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";


import profile from "assets/img/profile.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const emails = ['username@gmail.com', 'user02@gmail.com'];
const Wrappedstyles = {
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
};


class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                selectedValue: ""
            }
    }

    handleClickOpen = (index) => {
        return () => {
            let tmp = "open" + index;
            let tmpobj = {};
            tmpobj[tmp] = true;

            this.setState(tmpobj);
        }
    };

    handleClose = index => {
        return () => {
            let tmp = "open" + index;
            let tmpobj = {};
            tmpobj[tmp] = false;

            this.setState(tmpobj);
        }
    };

    render() {
        const {classes, ...rest} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
                <Parallax small filter image={require("assets/img/profile-bg.jpg")}/>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div>
                        <div className={classes.container}>
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className={classes.profile}>
                                        <div>
                                            <img src={profile} alt="..." className={imageClasses}/>
                                        </div>
                                        <div className={classes.name}>
                                            <h3 className={classes.title}>React Coder</h3>
                                            <h6>React Engineer</h6>
                                            <Button justIcon link className={classes.margin5}
                                                    href={"https://twitter.com/CoderReact"} target={"_new"}>
                                                <i className={"fab fa-twitter"}/>
                                            </Button>
                                            <Button justIcon link className={classes.margin5}>
                                                <i className={"fab fa-instagram"}/>
                                            </Button>
                                            <Button justIcon link className={classes.margin5}>
                                                <i className={"fab fa-facebook"}/>
                                            </Button>
                                        </div>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <div className={classes.description}>
                                <p>
                                    Over 18 years experience in web development, including react since it's inception,
                                    our shop can develop any dream into fabric reality..{" "}
                                </p>
                            </div>

                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                    <NavPills
                                        alignCenter
                                        color="primary"
                                        tabs={[
                                            {
                                                tabButton: "Studio",
                                                tabIcon: Camera,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={studio1}
                                                                className={navImageClasses}
                                                                onClick={this.handleClickOpen(1)}
                                                            />

                                                            {this.CreateDialog1()}

                                                            <img
                                                                alt="..."

                                                                src={studio2}
                                                                className={navImageClasses}
                                                            />

                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                onClick={this.handleClickOpen(2)}
                                                                alt="..."
                                                                src={studio5}
                                                                className={navImageClasses}
                                                            />
                                                            {this.CreateDialog2()}
                                                            <img
                                                                alt="..."
                                                                src={studio4}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            },
                                            {
                                                tabButton: "Work",
                                                tabIcon: Palette,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={work1}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={work2}
                                                                className={navImageClasses}
                                                            />

                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={4}>

                                                            <img
                                                                alt="..."
                                                                src={work5}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={work4}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            },
                                            {
                                                tabButton: "Examples",
                                                tabIcon: Favorite,
                                                tabContent: (
                                                    <GridContainer justify="center">
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={work4}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={studio3}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                        <GridItem xs={12} sm={12} md={4}>
                                                            <img
                                                                alt="..."
                                                                src={work2}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={work1}
                                                                className={navImageClasses}
                                                            />
                                                            <img
                                                                alt="..."
                                                                src={studio1}
                                                                className={navImageClasses}
                                                            />
                                                        </GridItem>
                                                    </GridContainer>
                                                )
                                            }
                                        ]}
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
    CreateDialog2() {
        return <SimpleDialogWrapped
            selectedValue={this.state.selectedValue}
            open={this.state.open2}
            onClose={this.handleClose(2)}
            ImageUrl={studio1}
            Title={"Project Recovery"}
            Comment={(
                <div>Too many times an overseas developer has considered getting the work done as quickly as possible
                    to capitalize the most of their time charging sub-industry rates. We don't believe in this. We charge
                    industry rates so the time to create a quality product comes out.

                </div>)}
        />
    }
    CreateDialog1() {
        return <SimpleDialogWrapped
            selectedValue={this.state.selectedValue}
            open={this.state.open1}
            onClose={this.handleClose(1)}
            ImageUrl={studio1}
            Title={"React"}
            Comment={(
                <div>We chose to develop with react because of its
                    extensibility but moreover so because our many
                    years of coding experience
                    allowed us to dive right in and become experts
                    quickly.
                    <br/>Pros:
                    <List component="nav">
                        <ListItem>
                            <ListItemIcon>
                                <StarIcon/>
                            </ListItemIcon>
                            <ListItemText inset
                                          primary="Total separation of data and presentation"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <StarIcon/>
                            </ListItemIcon>
                            <ListItemText inset
                                          primary="DOM binding isn't our concern"/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <StarIcon/>
                            </ListItemIcon>
                            <ListItemText inset
                                          primary="React is extremely efficient"/>
                        </ListItem>
                    </List>
                </div>)}
        />
    }
}

const SimpleMediaCardstyles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

};

function SimpleMediaCard(props) {
    const {classes, ImageUrl, Title, Comment} = props;
    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={ImageUrl}
                    title={Title}
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {Title}
                    </Typography>
                    <Typography>
                        {Comment}
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>

                    <Button size="sm" color="primary" onClick={() => {
                        props.onClose()
                        }
                    }  >
                        ok
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const HoverCard = withStyles(SimpleMediaCardstyles)(SimpleMediaCard);

class SimpleDialog extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {
        const {classes, onClose, selectedValue, ImageUrl, Comment, ...other} = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="Info for you" {...other}
                    TransitionComponent={Transition}

            >
                <DialogTitle id="Info for you">Learn</DialogTitle>
                <HoverCard onClose={onClose} classes={classes} ImageUrl={ImageUrl} Comment={Comment}/>
            </Dialog>
        );
    }
}

const SimpleDialogWrapped = withStyles(Wrappedstyles)(SimpleDialog);
SimpleDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    onClose: PropTypes.func,
    selectedValue: PropTypes.string,
};


export default withStyles(profilePageStyle)(ProfilePage);
