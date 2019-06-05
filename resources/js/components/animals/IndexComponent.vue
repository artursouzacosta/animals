<template>
    <div>
        <div class="row">
			<div class="col-md-2">
				<h3>Animals</h3>
			</div>
			<div class="col-md-8"></div>
			<div class="col-md-2">
				<router-link :to="{ name: 'create' }" class="btn btn-outline-primary">Create Animal</router-link>
			</div>
        </div><br />

        <table class="table table-hover table-bordered">
            <thead class="thead-light">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Territory</th>
                <th colspan="2">Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="animal in animals" :key="animal.id">
                    <td>{{ animal.id }}</td>
                    <td>{{ animal.name }}</td>
                    <td>{{ animal.territory }}</td>
                    <td><router-link :to="{name: 'edit', params: { id: animal.id }}" class="btn btn-outline-primary">Edit</router-link></td>
                    <td><button class="btn btn-outline-danger" @click.prevent="deleteAnimal(animal.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  	</div>
</template>

<script>
    export default {
		data() {
			return {
				animals: []
			}
      	},
        mounted() {
            let uri = 'http://localhost:8000/api/animals';
			this.axios.get(uri).then(response => {
				this.animals = response.data.data;
			});
		},
		methods: {
			deleteAnimal(id) {
				
				let uri = `http://localhost:8000/api/animals/delete/${id}`;
				
				this.axios.delete(uri).then(response => {
					this.animals.splice(this.animals.indexOf(id), 1);
				});

			}
		}
    }
</script>
