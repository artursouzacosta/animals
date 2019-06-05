/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import VueAxios from 'vue-axios';

import axios from 'axios';

Vue.use(VueAxios, axios);

import App from './components/App.vue';

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/animals/CreateComponent.vue';
import IndexComponent from './components/animals/IndexComponent.vue';
import EditComponent from './components/animals/EditComponent.vue';

const routes = [
	{
		name: 'home',
		path: '/',
		component: HomeComponent
	},
	{
		name: 'animals',
		path: '/animals',
		component: IndexComponent
	},
	{
		name: 'create',
		path: '/animals/create',
		component: CreateComponent
	},
	{
		name: 'edit',
		path: '/animals/edit/:id',
		component: EditComponent
	}
  ];

const router = new VueRouter({ mode: 'history', routes: routes});

const app = new Vue(Vue.util.extend({ router }, App)).$mount('#app');