<template>
	<div class="w-full bg-white pt-[30px] pb-[15px] px-10 flex flex-col gap-[30px] relative">
		<div class="flex items-center justify-between">
			<div class="flex flex-col gap-[6px]">
				<p class="text-gray6 text-xs">OVERVIEW</p>
				<h3 class="font-medium text-xl text-black1">Charter Request Detail</h3>
			</div>
			<button class="flex items-center gap-2 text-sm bg-black3 text-white px-[20px] h-[44px] rounded-md" @click="show_drop = true">
				Action
				<img src="../assets/img/icons/arrow_down.svg" alt="">
			</button>
		</div>
		<div class="flex items-center gap-3 font-medium">
			<p class="text-gray6 text-sm cursor-pointer">Event Charter</p>
			<img src="../assets/img/icons/arrow_right.svg" alt="">
			<p class="text-black2 text-sm cursor-pointer">Charter requests</p>
		</div>

		<div class="absolute top-24 right-12 w-[167px] shadow-lg bg-white rounded-xl p-5" ref="target" v-if="show_drop">
			<button class="drop_down">Accept</button>
			<button class="drop_down">Reject</button>
			<button class="drop_down">Assign Driver</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
const target = ref(null)
const show_drop = ref(false)

onClickOutside(target, () => {
	show_drop.value = false
})
</script>

<style>
.drop_down{
	@apply py-[9px] px-[12px] text-black1 hover:bg-black1 hover:text-white text-left text-base w-full rounded-lg
}
</style>