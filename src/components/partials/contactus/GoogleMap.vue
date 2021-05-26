<template>
    <div class="google-map-wrapper w-100">
      <!-- please navigate to main.js to put your API key -->
        <GmapMap
            :center="{lat:40.416774, lng:-3.703788}"
            :zoom="16"
            :options="{styles: style}"
            >
            <GmapMarker ref="myMarker" :position="google && new google.maps.LatLng(40.416774, -3.703788)" />
        </GmapMap>
    </div>
</template>
<script>
import {gmapApi} from 'vue2-google-maps'
export default {
    name: 'GoogleMap',
    data(){
      return {
        style: [
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#4694ec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": "3"
                    },
                    {
                        "color": "#2353c4"
                    }
                ]
            }
        ]
      }
    },
    computed: {
        google: gmapApi
    },

}
</script>
