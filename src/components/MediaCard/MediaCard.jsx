import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class MediaCard extends React.Component {
    state = {expanded: false};


    render() {

        const {classes, Title, SubTitle, Image, Description, Link, Date, SmallCircleText} = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <a href={Link} target={"_blank"}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    {SmallCircleText}
                                </Avatar>
                            }

                            title={Title}
                            subheader={Date}
                        />
                    </a>
                    <a href={Link} target={"_blank"}>
                        <CardMedia
                            className={classes.media}
                            image={Image}
                            title={SubTitle}
                        />
                    </a>
                    <CardContent>
                        <Typography component="p">
                            {Description}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <a target="_blank"
                           href='https://twitter.com/intent/tweet?url=https://react-coder.com&text=I found a cool react developer!'>
                            <IconButton aria-label="Share">
                                <ShareIcon/>
                            </IconButton>
                        </a>
                    </CardActions>

                </Card>
            </div>
        );
    }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
