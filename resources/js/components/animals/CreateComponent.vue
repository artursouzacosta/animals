<template>

    <div>
        
		<form @submit.prevent="addAnimal">

			<div class="row justify-content-center">
				<div class="col-md-6">
					<div class="form-group">
						<label>Animal Name:</label>
						<input type="text" class="form-control" v-model="animal.name">
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-md-6">
					<div class="form-group">
					<label>Animal Weight:</label>
					<input type="number" class="form-control" v-model="animal.weight">
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-md-6">
					<div class="form-group">
					<label>Animal Cuteness:</label>
					<input type="number" class="form-control" v-model="animal.cuteness">
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
				<div class="col-md-6">
					<div class="form-group">
					<label>Animal Territory:</label>
					<input type="text" class="form-control" v-model="animal.territory">
					</div>
				</div>
			</div>

			<div class="row justify-content-center">
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
		mounted() {
			console.log("Component mounted");
		},
        data(){
			return {
				animal: {}
			}
        },
		methods: {
			addAnimal(){
				
				let uri = 'http://localhost:8000/api/animals/create';
				
				this.axios.post(uri, this.animal).then((response) => {
				
					this.$router.push({name: 'animals'});
				
				});
			}
		}
    }
</script>
