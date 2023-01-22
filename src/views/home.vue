<template>
	<default-layout>
		<div class="grid grid-cols-11 gap-5 items-start max-w-[1500px] mx-auto">
			<div class="col-span-6 flex flex-col gap-5">
				<customer />
				<trip />
			</div>
			<div class="col-span-5 ">
				<timeline/>
			</div>
		</div>
	</default-layout>
</template>

<script setup lang="ts">
import customer from '../components/home/customer.vue'
import trip from '../components/home/trip.vue'
import timeline from '../components/home/timeline.vue'
</script>
