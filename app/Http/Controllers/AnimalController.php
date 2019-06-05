<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Animal;
use App\Http\Resources\AnimalCollection;

class AnimalController extends Controller {
	
	public function store(Request $request) {
	  
		$animal = new Animal([
			'name' => $request->get('name'),
			'territory' => $request->get('territory'),
			'birthdate' => $request->get('birthdate'),
			'weight' => $request->get('weight'),
			'cuteness' => $request->get('cuteness')
		]);

		$animal->save();

		return response()->json('success');
	}
	
	public function index() {
	  
		return new AnimalCollection(Animal::all());
	
	}

    public function edit($id) {

		$animal = Animal::find($id);
		
		return response()->json($animal);
		
    }

    public function update($id, Request $request) {
	  
		$animal = Animal::find($id);

		$animal->update($request->all());

		return response()->json('successfully updated');
    }

    public function delete($id) {

		$animal = Animal::find($id);

		$animal->delete();

		return response()->json('successfully deleted');
    }

}
