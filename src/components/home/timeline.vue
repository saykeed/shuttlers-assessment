<template>
	<div class="bg-white rounded-lg flex flex-col">
		<div class="px-5 py-6 flex items-center justify-between border-b">
			<p class="text-base text-black1 font-medium ">Charter Timeline</p>
			
		</div>
		<div class="body p-5 py-2 flex flex-col pb-2 ">
			<div class="flex items-center gap-3 h-[60px] my-2">
				<div class="stepper relative h-full w-[24px]">
					<!-- <div class="w-[22px] h-[22px] border-2 border-[#DFE0DF] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20"></div> -->
					<img src="../../assets/img/icons/stepper_check.svg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" alt="">
					<div class="h-full border-r-2 absolute top-[60%] left-1/2 -translate-x-1/2"></div>
				</div>
				<div class="h-[60px] bg-[#F4F5F4] rounded flex items-center justify-between w-full py-3 px-4">
					<div class="flex flex-col ">
						<p class="text-sm font-medium text-black3">Charter request</p>
						<p class="text-xs text-[#737876]">10:29 AM</p>
					</div>
					<p class="text-xs font-medium bg-yellow text-white py-1 p-2 rounded-full">Pending review</p>
				</div>
			</div>

			<div v-for="item, index in items" :key="index" class="my-2 h-[60px] flex items-center gap-3">
				<div class="stepper relative h-full w-[24px]">
					<div class="w-[22px] h-[22px] border-2 border-[#DFE0DF] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-20"></div>
					<div v-if="index+1 != items.length" class="h-full border-r-2 absolute top-[60%] left-1/2 -translate-x-1/2"></div>
				</div>
				<div class="h-[60px] bg-[#F4F5F4] rounded flex items-center justify-between w-full py-3 px-4">
					<p class="text-sm font-medium text-black3">{{ item }}</p>
				</div>
			</div>
			
			
			
			
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const items = ref(['Payment', 'Assign Driver', 'Driver has started the trip', 'Drop off', 'Driver has ended the trip'])

</script>