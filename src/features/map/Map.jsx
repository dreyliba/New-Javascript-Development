import React, { Component } from 'react'
import { Map as GoogleMap, GoogleApiWrapper, Marker, Circle, InfoWindow } from 'google-maps-react';

import './map.scss';

class Map extends Component {
    state = {
        selectedPlace: {},
        activeMarker: {},
    };
    onMarkerClick(props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,
        });
    }

    render() {
        const { distance, stores } = this.props;
        const distanceInKm = parseFloat(distance) * 1000;
        return (
            <div className='map-component'>
                {
                    this.props.currentPosition && (
                    <GoogleMap  
                        google={this.props.google} 
                        onGoogleApi initialCenter={this.props.currentPosition}>
                        <Marker 
                            position={this.props.currentPosition}
                        />
                       
                        <Circle 
                            center={this.props.currentPosition}
                            radius={distanceInKm}
                            strokeColor='#017ac7'
                            strokOpacity={0.3}
                            srokeWeight={1}
                            fillColor='#017ac7'
                            fillOpacity={0.1}
                        />
                         {
                            stores &&
                            stores.map((store) => (
                                <Marker 
                                    key={store.id}
                                    title={store.name}
                                    name={store.name}
                                    position={{ lat: store.latitude, lng: store.longitude }}
                                    onClick={(props, marker, e) => 
                                        this.onMarkerClick(props, marker, e)
                                    }
                                />
                            ))
                        }
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                        >    
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </GoogleMap>
                    )
                }
                
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCLRDO9_qnDkWYJVtkWwWPluXEvuAWhaag'
})(Map);