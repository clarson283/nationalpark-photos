import React from 'react';
import ReactDOM from 'react-dom';


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

        self.props.initialMarker.map(function (a) {
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

        this.props.initialMarker.map(function (z) {
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

let initialMarker = [
    {
        position: {
            lng: -78.6795836,
            lat: 38.29275579999999
        },
        key: 'Shenandoah National Park'
    },
    {
        position: {
            lng: -83.54965659999999,
            lat: 35.61193129999999
        },
        key: 'Great Smoky Mountains National Park'
    },
    {
        position: {
            lng: -112.1129972,
            lat: 36.1069652
        },
        key: 'Grand Canyon National Park'
    },
    {
        position: {
            lng: -119.5383294,
            lat: 37.8651011
        },
        key: 'Yosemite National Park'
    },
    {
        position: {
            lng: -121.7269094,
            lat: 46.8799663
        },
        key: 'Mount Rainier National Park'
    },
    {
        position: {
            lng: -109.59251389999997,
            lat: 38.733081
        },
        key: 'Arches National Park'
    },
    {
        position: {
            lng: -113.0457164,
            lat: 37.322817
        },
        key: 'Zion National Park'
    },
    {
        position: {
            lng: -110.64244109999998,
            lat: 44.4620852
        },
        key: 'Yellowstone National Park'
    },
    {
        position: {
            lng: -116.86906640000001,
            lat: 36.4643308
        },
        key: 'Death Valley National Park'
    },
    {
        position: {
            lng: -113.78702250000003,
            lat: 48.7596128
        },
        key: 'Glacier National Park'
    },
    {
        position: {
            lng: -124.004631,
            lat: 41.213181
        },
        key: 'Redwood National Park'
    },
    {
        position: {
            lng: -93.04722,
            lat: 34.516271
        },
        key: 'Hot Springs National Park'
    },
    {
        position: {
            lng: -102.369298,
            lat: 43.783431
        },
        key: 'Badlands National Park'
    },
    {
        position: {
            lng: -108.461834,
            lat: 37.230873
        },
        key: 'Mesa Verde National Park'
    },
    {
        position: {
            lng: -104.4439,
            lat: 32.1753
        },
        key: 'Carlsbad Caverns National Park'
    },
    {
        position: {
            lng: -115.8982,
            lat: 33.7884
        },
        key: 'Joshua Tree National Park'
    },
    {
        position: {
            lng: -122.1481,
            lat: 42.9118
        },
        key: 'Crater Lake National Park'
    },
    {
        position: {
            lng: -105.7089,
            lat: 40.3333
        },
        key: 'Rocky Mountain National Park'
    },
    {
        position: {
            lng: -119.4167,
            lat: 34.0083
        },
        key: 'Channel Islands National Park'
    },
    {
        position: {
            lng: -103.2500,
            lat: 29.2500
        },
        key: 'Big Bend National Park'
    },
    {
        position: {
            lng: -80.9333,
            lat: 25.3167
        },
        key: 'Everglades National Park'
    },
    {
        position: {
            lng: -68.2167,
            lat: 44.3500
        },
        key: 'Acadia National Park'
    },
    {
        position: {
            lng: -123.4986,
            lat: 47.9694
        },
        key: 'Olympic National Park'
    },
    {
        position: {
            lng: -118.7734,
            lat: 36.5647
        },
        key: 'Sequoia National Park'
    }
]

var initialCenter = { lng: -96, lat: 37 }

ReactDOM.render(<GMap initialCenter={initialCenter} initialMarker={initialMarker} />, document.getElementById('container'));
