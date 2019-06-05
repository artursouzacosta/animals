<template>
    
	<div class="container">
    	<div class="row justify-content-md-center">
			<h3>Edit Animal</h3>
		</div>
		<form @submit.prevent="updateAnimal">

			<div class="row justify-content-md-center">
				<div class="col-md-6">
					<div class="form-group">
						<label>Animal Name:</label>
						<input type="text" class="form-control" v-model="animal.name">
					</div>
				</div>
			</div>

			<div class="row justify-content-md-center">
				<div class="col-md-6">
					<div class="form-group">
					<label>Animal Weight:</label>
					<input type="number" class="form-control" v-model="animal.weight">
					</div>
				</div>
			</div>

			<div class="row justify-content-md-center">
				<div class="col-md-6">
					<div class="form-group">
					<label>Animal Cuteness:</label>
					<input type="number" class="form-control" v-model="animal.cuteness">
					</div>
				</div>
			</div>

			<div class="row justify-content-md-center">
				<div class="col-md-6">
					<div class="form-group">
					<label>Animal Territory:</label>
					<input type="text" class="form-control" v-model="animal.territory">
					</div>
				</div>
			</div>

			<div class="row justify-content-md-center">
				<div class="col-md-6">
					<div class="form-group">
					<label>Animal Birthdate:</label>
					<input type="date" class="form-control" v-model="animal.birthdate">
					</div>
				</div>
			</div>

			<br />
			<div class="row justify-content-center">
				<div class="col-md-6">
					<button class="btn btn-outline-primary">Create</button>
				</div>
			</div>

		</form>
	</div>
</template>

<script>
    export default {
		data() {
			return {
				animal: {}
			}
		},
        created() {
			let uri = `http://localhost:8000/api/animals/edit/${this.$route.params.id}`;
			this.axios.get(uri).then((response) => {
				this.animal = response.data;
			});
		},
		methods: {
			updateAnimal() {
			let uri = `http://localhost:8000/api/animals/update/${this.$route.params.id}`;
			this.axios.post(uri, this.animal).then((response) => {
				this.$router.push({name: 'animals'});
			});
			}
		}
    }
</script>
