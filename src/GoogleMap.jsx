import React, { Component } from 'react'
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

class GoogleMaps extends Component {
    state = { } 
    render() {
        return ( 
            <div>
                <Map google={this.props.google} zoom={14}>
                    <Marker name={"Current location"} />
                </Map>
            </div>
        );
    }
}

export default  GoogleApiWrapper({
  apiKey: "AIzaSyCLRDO9_qnDkWYJVtkWwWPluXEvuAWhaag",
})(GoogleMaps);