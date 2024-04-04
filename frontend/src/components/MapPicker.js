/* global google */
import React, { Component } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import socketIOClient from 'socket.io-client'; 

class MapPicker extends Component {
    state = {
        currentLocation: null,
        userId: null,
        socket: null 
    };

    map = null;
    marker = null;
    mapCanvas = React.createRef();

    componentDidMount() {
        if (typeof google !== "undefined") {
            this.fetchUserData().then(() => {
                this.requestUserLocation();
            });
        } else {
            console.error("Google Maps API hasn't loaded yet.");
        }

  
        const socket = socketIOClient('http://localhost:5001');
        this.setState({ socket });

    
        socket.on('locationUpdate', (locationData) => {
            console.log('Real-time Location Update:', locationData);
   
        });
    }

    componentWillUnmount() {

        if (this.state.socket) {
            this.state.socket.disconnect();
        }
    }

    fetchUserData = () => {
        return fetch("http://localhost:5001/api/current_user", { credentials: 'include' })
            .then(response => response.ok ? response.json() : Promise.reject('Failed to fetch user'))
            .then(data => {
                if (data && data._id) {
                    this.setState({ userId: data._id });
                } else {
                    return Promise.reject('User ID not found');
                }
            })
            .catch(error => {
                console.error('Error fetching user:', error);
                throw error;
            });
    };

    requestUserLocation = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.initializeMap(location);
            },
            () => {
                this.initializeMap({ lat: 47.916657865578784, lng: 106.86491479486024 });
            }
        );
    };

    initializeMap = (initialPosition) => {
        this.map = new google.maps.Map(this.mapCanvas.current, {
            center: initialPosition,
            zoom: 15
        });

        this.marker = new google.maps.Marker({
            position: initialPosition,
            map: this.map,
            draggable: true
        });

        this.setState({ currentLocation: initialPosition });

        google.maps.event.addListener(this.marker, 'dragend', this.handleLocationChange);
        google.maps.event.addListener(this.map, 'click', (event) => {
            this.marker.setPosition(event.latLng);
            this.handleLocationChange(event);
        });
    };

    handleLocationChange = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        this.setState({ currentLocation: { lat, lng } });
    };

    saveLocationToDatabase = () => {
        const { currentLocation, userId } = this.state;
    
        if (!currentLocation || !userId) {
            console.error("No location or user ID to save.");
            return;
        }
    
        fetch('http://localhost:5001/update-location', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ 
                userId, 
                coordinates: [currentLocation.lng, currentLocation.lat] 
            })
        })

        .then(response => response.ok ? response.json() : Promise.reject('Failed to save location'))
        .then(data => {
            console.log("Location saved successfully:", data);
      
        })
        .catch(error => {
            console.error('Error saving location:', error);
        });
    }

    render() {
        const isLocationSelected = Boolean(this.state.currentLocation);

        return (
            <div>
              
                <MDBBtn onClick={this.saveLocationToDatabase} disabled={!isLocationSelected}>
                    Захиалга өгөх
                </MDBBtn>
                <div ref={this.mapCanvas} style={{ width: '400px', height: '400px' }}></div>
            </div>
        );
    }
}

export default MapPicker;
