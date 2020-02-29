import React, { Component } from 'react';
import { Polyline } from 'react-google-maps';

class MapViewPolyline extends Component {
    render() {
        const { coordinates, strokeColor,strokeWidth, ...rest } = this.props;
        return <Polyline {...rest }
        path = {coordinates}
        options = {{
                strokeColor: strokeColor,
                strokeWeight: strokeWidth,
            }}
        />;
    }
}

export default MapViewPolyline;
