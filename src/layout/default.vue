
import Sidebar from '../components/sidebar.vue';

<template>
	<div class="flex h-full w-full">
		<sidebar/>
		<div class="flex flex-col w-full">
			<topbar />
			<div class="py-[50px] px-[40px] h-full overflow-auto">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import sidebar from '../components/sidebar.vue'
	import topbar from '../components/topbar.vue'
</script>