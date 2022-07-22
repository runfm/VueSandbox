<template>
	<div class="home">
		<SandboxComponent msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SandboxComponent from '@/components/Sandbox/index.vue'; // @ is an alias to /src

@Component({
	components: {
		SandboxComponent,
	},
})
export default class HomeView extends Vue { }
</script>
