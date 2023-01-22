<template>
	<default-layout>
		<div class="grid grid-cols-1 lg:grid-cols-11 gap-5 items-start max-w-[1500px] mx-auto">
			<div class="lg:col-span-6 flex flex-col gap-5">
				<customer />
				<trip />
			</div>
			<div class="lg:col-span-5 flex flex-col gap-5">
				<timeline/>
				<map_route />
			</div>
		</div>
	</default-layout>
</template>

<script setup lang="ts">
import customer from '../components/home/customer.vue'
import trip from '../components/home/trip.vue'
import timeline from '../components/home/timeline.vue'
import map_route from '../components/home/map_route.vue'
</script>
