import React from 'react';
import ReactDOM from 'react-dom';

import initialMarker from '../../js/initialMarker.json';


class GMap extends React.Component {

    state = {
        zoom: 4
    };

    static propTypes() {
    	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
    }

    render() {
        return (
            <div className="GMap">
              <div className='UpdatedText'>
                <p>Current Zoom: { this.state.zoom }</p>
              </div>
              <div className='GMap-canvas' ref="mapCanvas">
              </div>
            </div>
        )
    }

    componentDidMount() {
        // create the map, marker and infoWindow after the component has
        // been rendered because we need to manipulate the DOM for Google =(
        this.map = this.createMap()
        this.marker = this.createMarker()
        this.infoWindow = this.createInfoWindow()

        // have to define google maps event listeners here too
        // because we can't add listeners on the map until its created
        google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())

        // google.maps.event.addListener(this.map, )
    }

    // clean up event listeners when component unmounts
    componentDidUnMount() {
    // google.maps.event.clearListeners(map, 'zoom_changed')
    }

    createMap() {
        let mapOptions = {
            zoom: this.state.zoom,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
            this.props.initialCenter.lat,
            this.props.initialCenter.lng
        )
    }

    createMarker() {
        let self = this;

        let icon = {
            url: '/img/tree-icon.png',
    		scaledSize: new google.maps.Size(24, 36),
    		origin: new google.maps.Point(0, 0),
    		anchor: new google.maps.Point(12, 36)
        }

        initialMarker.data.map(function (a) {
            return new google.maps.Marker({
                position: self.mapMarker(a),
                string: a.key,
                map: self.map,
                icon: icon
            })
        })
    }

    mapMarker(obj) {
        return new google.maps.LatLng(
          obj.position.lat,
          obj.position.lng
        )
    }

    createInfoWindow() {
        let self = this;

        initialMarker.data.map(function (z) {
            return new google.maps.InfoWindow({
                map: self.map,
                anchor: z.marker,
                content: z.string
            })
        })

        // return new google.maps.InfoWindow({
        //     map: this.map,
        //     anchor: this.marker,
        //     content: this.marker.string
        // })
    }

    handleZoomChange() {
        this.setState({
            zoom: this.map.getZoom()
        })
    }
}

var initialCenter = { lng: -96, lat: 37 }

ReactDOM.render(<GMap initialCenter={initialCenter} />, document.getElementById('container'));
