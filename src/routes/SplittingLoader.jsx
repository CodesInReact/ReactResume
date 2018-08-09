import React from "react";
import Loader from "react-loader-spinner";

 class SplittingLoaderThreeDots extends React.Component {
     constructor(props){
         super(props);
     }
    //other logic
    render() {
        return (
            <Loader
                type="ThreeDots"
                color="#00BFFF"
                height="100%"
                width="100%"
            />
        );
    }
}
export const  Loader3Dots =SplittingLoaderThreeDots;
