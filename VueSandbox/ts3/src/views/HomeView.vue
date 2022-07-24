<template>
	<div class="home">
		<div v-if="ext">{{ext}}</div>
		<SandboxComponent msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import SandboxComponent from '@/components/Sandbox/index.vue'; // @ is an alias to /src

@Component({
	components: {
		SandboxComponent,
	},
})
export default class HomeView extends Vue {
	@Prop() ext:string
 }
</script>
