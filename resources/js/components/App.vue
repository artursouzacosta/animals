// App.vue

<template>
    <div class="container">
		<nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-center">
			<ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/" class="nav-link">
						<img class="logo" src="https://static.wixstatic.com/media/3afb23_300e4fc81dfe44a0b23801a030cfddfa~mv2_d_8945_2320_s_2.png/v1/fill/w_189,h_48,al_c,q_80,usm_0.66_1.00_0.01/3afb23_300e4fc81dfe44a0b23801a030cfddfa~mv2_d_8945_2320_s_2.webp">
					</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/" class="nav-link">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/animals" class="nav-link">Animals</router-link>
				</li>
			</ul>
		</nav><br />
        <div>
            <!-- <transition name="fade"> -->
                <router-view></router-view>
            <!-- </transition> -->
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>

    export default{
    }
</script>