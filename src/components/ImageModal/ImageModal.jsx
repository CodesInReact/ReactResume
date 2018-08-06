import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import Card from "../Card/Card";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,

        paddingTop: '56.25%', // 16:9
    }
});

class ImageModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, ImageSrc } = this.props;

        return (
            <div>
                <img src={ImageSrc} style={{   width: '100%'}}      onClick={this.handleOpen} />

                    <Modal
                    aria-labelledby={ImageSrc}
                    aria-describedby={ImageSrc}
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <img src={ImageSrc} />

                    </div>
                </Modal>
            </div>
        );
    }
}

ImageModal.propTypes = {
    classes: PropTypes.object.isRequired,
    ImageSrc: PropTypes.string.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const ImageModalWrapped = withStyles(styles)(ImageModal);

export default ImageModalWrapped;
