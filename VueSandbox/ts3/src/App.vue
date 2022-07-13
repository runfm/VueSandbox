<template>
	<div id="app">
		<img src="./assets/logo.png" />
		<div style="display:flex; gap:12px; flex-direction:column">
			<div>
				<el-button plain icon="el-icon-s-promotion">el-button defaul</el-button>
				<el-button plain icon="el-icon-s-promotion" size="large">el-button large</el-button>
				<el-button icon="el-icon-s-promotion" size="medium">el-button medium</el-button>
				<el-button icon="el-icon-s-promotion" size="small">el-button small</el-button>
				<el-button icon="el-icon-s-promotion" size="mini">el-button mini</el-button>
			</div>

			<div>
				<el-button plain type="primary" icon="el-icon-s-promotion">el-button defaul</el-button>
				<el-button plain type="success" icon="el-icon-s-promotion" size="large">el-button large</el-button>
				<el-button plain type="info" icon="el-icon-s-promotion" size="medium">el-button medium</el-button>
				<el-button plain type="warning" icon="el-icon-s-promotion" size="small">el-button small</el-button>
				<el-button plain type="danger" icon="el-icon-s-promotion" size="mini">el-button mini</el-button>
			</div>

			<div>
				<el-button type="primary" icon="el-icon-s-promotion">el-button defaul</el-button>
				<el-button type="success" icon="el-icon-s-promotion" size="large">el-button large</el-button>
				<el-button type="info" icon="el-icon-s-promotion" size="medium">el-button medium</el-button>
				<el-button type="warning" icon="el-icon-s-promotion" size="small">el-button small</el-button>
				<el-button type="danger" icon="el-icon-s-promotion" size="mini">el-button mini</el-button>
			</div>

			<div>
				<el-button plain type="primary" icon="el-icon-s-promotion"></el-button>
				<el-button plain type="success" icon="el-icon-s-promotion" size="large"></el-button>
				<el-button plain type="info" icon="el-icon-s-promotion" size="medium"></el-button>
				<el-button plain type="warning" icon="el-icon-s-promotion" size="small"></el-button>
				<el-button plain type="danger" icon="el-icon-s-promotion" size="mini"></el-button>
			</div>
		</div>

		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
	name: 'app',
	components: {
		HelloWorld
	}
}
</script>

<style lang="scss">
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
