<script setup lang="ts">
	import { Account, Key } from 'mdue';
	import axios, { AxiosError } from 'axios';
	import { ref } from 'vue';
import { getErrMsg } from '../utils/axios';

	let account = 'admin';
	let password = 'admin';
	let errMsg = ref('');
	async function doLogin() {
		try {
			await axios.post('/api/auth/login', { account, password})
			errMsg.value = '';
			location.href = '/';
		} catch (e: any) {
			errMsg.value = getErrMsg(e);
		}
	}
</script>

<template>
	<main>
		<h1>thor-web demo</h1>
		<div class="panel">
			<h2>Welcome</h2>
			<div class="input">
				<div class="line">
					<Account class="icon"/>
					<input spellcheck="false" placeholder="account" v-model="account">
				</div>
				<div class="line" style="border-top: 1px solid #ddd;">
					<Key class="icon"/>
					<input spellcheck="false" type="password" placeholder="password" v-model="password">
				</div>
			</div>
			<button @click="doLogin">Login</button>
			<div class="error">{{errMsg}}</div>
		</div>
	</main>
</template>

<style>
html,body {
	margin: 0;
	padding: 0;
	height: 100%;
	font-size: 16px;
}
h1 {
	color: #ccc;
}
svg.icon {
	font-size: 1.2rem;
	padding: 10px;
	color: #888;
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
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #f0f0f0;
}
div.panel {
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 60px 30px;
	border-radius: 15px;
	width: 300px;
	box-shadow: 1px 1px 15px #0004;
	margin-bottom: 60px;
}
input {
	border: none;
	font-family: 'Courier New', Courier, monospace;
	font-size: 1.2rem;
}
div.input {
	border-radius: 5px;
	background-color: #f5f5f5;
	box-shadow: inset 1px 1px 5px #0004;
	padding: 10px;
}
div.line {
	display: flex;
	height: 40px;
	align-items: center;
}
div.line>span {
	text-align: left;
	vertical-align: middle;
	padding: 0 20px
}
div.line>input {
	flex: 2;
	height: 30px;
	background-color: transparent;
	outline: none;
}
button {
	background-color: #5080f0;
	color: white;
	margin: 20px 0;
	border: none;
	font-size: 1.2rem;
	padding: 7px;
	border-radius: 5px;
	cursor: pointer;
}
button:hover {
	background-color: #4070f0;
}
button:active {
	background-color: #3060f0;
}
div.error {
	color: red;
}
</style>
