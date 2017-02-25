import React from 'react';
import ReactDOM from 'react-dom';


class GMap extends React.Component {

    state = {
        zoom: 4,
        markers: [
            {
                position: {
                    lat: 38.29275579999999,
                    lng: -78.6795836
                },
                key: 'Shenandoah National Park'
            }
        ]
    };

    static propTypes() {
    	initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
    }

    render() {
    return <div className="GMap">
      <div className='UpdatedText'>
        <p>Current Zoom: { this.state.zoom }</p>
      </div>
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
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

    mapMarker() {
        return new google.maps.LatLng(
          this.props.initialMarker.position.lat,
          this.props.initialMarker.position.lng
        )
    }

    createMarker() {
        return new google.maps.Marker({
            position: this.mapMarker(),
            string: this.props.initialMarker.key,
            map: this.map
        })
    }

    createInfoWindow() {
        return new google.maps.InfoWindow({
            map: this.map,
            anchor: this.marker,
            content: this.marker.string
        })
    }

    handleZoomChange() {
        this.setState({
            zoom: this.map.getZoom()
        })
    }
}

let initialMarker = {
    position: {
        lng: -78.6795836,
        lat: 38.29275579999999
    },
    key: 'Shenandoah National Park'
}

var initialCenter = { lng: -96, lat: 37 }

ReactDOM.render(<GMap initialCenter={initialCenter} initialMarker={initialMarker} />, document.getElementById('container'));
