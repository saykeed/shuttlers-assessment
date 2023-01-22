<template>
	<div class="bg-white rounded-lg flex flex-col">
		<div class="px-5 py-6 flex items-center justify-between border-b">
			<p class="text-base text-black1 font-medium ">Customer Information</p>
			<button class="text-black3 font-bold text-xs flex items-center gap-2">
				<img src="../../assets/img/icons/download.svg" alt="">
				Export
			</button>
		</div>
		<div class="body px-5 pb-2">
			<div class="flex items-center justify-between py-6 border-b border-gray9">
				<p class="text-sm text-gray5 font-medium">CUSTOMER DETAILS</p>
				<div class="flex items-center gap-2">
					<p class="text-blue font-medium underline">09709248893</p>
					<img src="../../assets/img/icons/copy.svg" alt="">
				</div>
			</div>
			<div class="flex items-center justify-between py-6 border-b border-gray9">
				<p class="text-sm text-gray5 font-medium">VEHICLE CATEGORY</p>
				<p class="text-sm text-black1 font-medium">Toyota Hiace</p>
			</div>
			<div class="flex items-center justify-between py-6 border-b border-gray9">
				<p class="text-sm text-gray5 font-medium">QUANTITY</p>
				<p class="text-sm text-black1 font-medium">2</p>
			</div>
			<div class="flex items-center justify-between py-6 ">
				<p class="text-sm text-gray5 font-medium">TRIP TYPE</p>
				<p class="text-sm text-black1 font-medium">Wedding</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'


</script>