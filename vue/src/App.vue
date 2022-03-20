<script setup lang="ts">
	import { Home } from 'mdue';
	import axios from 'axios';
	import { onMounted, ref } from 'vue';
	import { getErrMsg } from './utils/axios';

	const errMsg = ref('');
	const detail = ref(null);

	async function echo() {
		try {
			const resp = await axios.get('/api/echo');
			detail.value = resp.data;
		} catch(e: any) {
			detail.value = null;
			errMsg.value = getErrMsg(e);
		}
		setTimeout(() => {
			echo();
		}, 1000);
	}

	async function logout() {
		try {
			const resp = await axios.get('/api/auth/logout');
			location.reload();
		} catch(e: any) {
			errMsg.value = getErrMsg(e);
		}
	}

	onMounted(() => {
		echo();
	})

</script>

<template>
  <main>
		<div class="banner">
			<Home style="margin:0 20px" /> Welcome
		</div>
		<h1>Show some server environment variables!</h1>
		<div class="panel">
			<table v-if="detail">
				<tr>
					<th>Key</th>
					<th>Value</th>
				</tr>
				<tr v-for="key in Object.keys(detail)">
					<td>{{key}}</td>
					<td>{{detail[key]}}</td>
				</tr>
			</table>
			<div v-else class="error">
				{{errMsg}}
			</div>
		</div>
		<button name="logout" v-on:click="logout">Logout</button>
	</main>
</template>

<style>
html, body {
	margin: 0;
	padding: 0;
	height: 100%;
	font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	height: 100%;
	display: flex;
	flex-direction: column;
}
main {
	display: flex;
	flex-direction: column;
	background-color: #f0f0f0;
	flex:1;
}
h1 {
	padding: 0;
	margin: 0;
	margin-top: 60px;
	color: #888;
}
div.banner {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #5080f0;
	color: white;
	font-size: 2rem;
	padding: 20px;
}
div.panel {
	padding: 60px;
	margin: 60px;
	background-color: white;
	box-shadow: 1px 1px 15px #0004;
	border-radius: 15px;
}
table {
	width: 100%;
	font-size: 1.2rem;
}
td, th {
	padding: 20px;
	border-bottom: 1px solid #ddd;
	text-align: left;
}
button[name=logout] {
	align-self: center;
	background-color: #f05080;
	color: white;
	margin: 20px 0;
	border: none;
	font-size: 1.2rem;
	padding: 7px;
	border-radius: 5px;
	cursor: pointer;
	width: 200px;
}
button:hover {
	background-color: #f04070;
}
button:active {
	background-color: #f03060;
}
div.error {
	color: red;
}
</style>
