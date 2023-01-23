/
<template>
	<div class="bg-white rounded-lg flex flex-col">
		<div class="px-5 py-6 flex items-center justify-between border-b">
			<p class="text-base text-black1 font-medium ">Route Map</p>
			
		</div>
		<div class="body px-1 py-2">
			<div id="map" class="w-full h-[400px]">

			</div>
		</div>
	</div>
</template>


<script setup lang="ts">
import { onMounted} from 'vue'

let map:any, dir:any;
// @ts-ignore
declare let L: any;
// @ts-ignore
declare let MQ: any;

onMounted(() => {

map = L.map('map', {
  layers: MQ.mapLayer(),
  center: [ 5.895345, -43.030101 ],
  zoom: 15
});

dir = MQ.routing.directions();

dir.route({
  locations: [
  	{ latLng: { lat: 6.620890084459009, lng: 3.510515081315033 } },
	{ latLng: { lat: 6.648512988076881, lng: 3.305894721126463 } },
	{ latLng: { lat: 6.609976906068317, lng: 3.4198778747885523 } },
	{ latLng: { lat: 6.6921608292662205, lng: 3.235856879719637 } },
  ]
});

let CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    createStartMarker: function (location:any, stopNumber:any) {
        var custom_icon;
        var marker;

        custom_icon = L.icon({
            iconUrl: 'https://www.mapquestapi.com/staticmap/geticon?uri=poi-red_1.png',
            iconSize: [20, 29],
            iconAnchor: [10, 29],
            popupAnchor: [0, -29]
        });

        marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

        return marker;
    },

    createEndMarker: function (location:any, stopNumber:any) {
        var custom_icon;
        var marker;

        custom_icon = L.icon({
            iconUrl: 'https://www.mapquestapi.com/staticmap/geticon?uri=poi-blue_1.png',
            iconSize: [20, 29],
            iconAnchor: [10, 29],
            popupAnchor: [0, -29]
        });

        marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

        return marker;
    }
});

map.addLayer(new CustomRouteLayer({
  directions: dir,
  fitBounds: true
}));
})

</script>