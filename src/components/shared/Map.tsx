import React, {useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import tw from 'twrnc';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import Config from 'react-native-config';
import {colors} from '../../theme/colors';

const Map = () => {
  const {origin, destination} = useSelector((state: any) => state.user);
  const mapRef: any = useRef(null);

  useEffect(() => {
    let fitMap: any;
    if (origin && destination) {
      fitMap = setInterval(() => {
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
          edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        });
      }, 500);
    }
    return () => clearInterval(fitMap);
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.latitude,
        longitude: origin?.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}>
      {destination && (
        <MapViewDirections
          origin={{
            latitude: origin?.latitude,
            longitude: origin?.longitude,
          }}
          destination={{
            latitude: destination?.latitude,
            longitude: destination?.longitude,
          }}
          apikey={Config.GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor={colors.primaryBase}
          mode="DRIVING"
          precision="high"
        />
      )}

      {origin && (
        <Marker
          coordinate={{
            latitude: origin?.latitude,
            longitude: origin?.longitude,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
        />
      )}

      {destination && (
        <Marker
          coordinate={{
            latitude: destination?.latitude,
            longitude: destination?.longitude,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
