import React from "react";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import BlogEntry from '../BlogEntry/BlogEntry'
import Data from './Data';


class ArticleContent extends React.Component {

    render(){
        let {TeaserText,Paragraphs,Conclusion} = this.props;
        let Content = Paragraphs.map(G=>(  <Typography paragraph>
                {G}
            </Typography>
        ))
      return (  <div>

            <Typography paragraph variant="body2">
                {TeaserText}
            </Typography>
          {Content}
          {Conclusion}
        </div>)
    }
}

ArticleContent.propTypes = {
    TeaserText: PropTypes.object.isRequired,
    Paragraphs: PropTypes.object.isRequired,
    Conclusion: PropTypes.object.isRequired
};






export const AugustArticles = Data.map(Dt=><BlogEntry Content={<ArticleContent TeaserText={Dt.TeaserText} Conclusion={Dt.Conclusion} Paragraphs={Dt.Paragraphs}/>} TitleText={Dt.TitleText}  /> ) ;
