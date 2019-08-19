import React, { Component } from 'react';

class AddPetModal extends Component {

  state = {
    assignedVet: '',
    name: '',
    age: '',
    type: ''
  }

  onVetChange = (e) => {
    const { value } = e.target;
    this.setState({assignedVet: value});
  }

  onNameChange = (e) => {
    const { value } = e.target;
    this.setState({name: value});
  }

  onAgeChange = (e) => {
    const { value } = e.target;
    this.setState({age: value});
  }

  onTypeChange = (e) => {
    const { value } = e.target;
    this.setState({type: value});
  }

  onAddPetClick = () => {
    const { name, assignedVet, age, type } = this.state;
    const { setModal, setPets, pets } = this.props;
    const pet = {
      name, assignedVet, age, type
    };
    pets.push(pet);
    setPets(pets);
    setModal({isOpen: false});

  }

  render() {
    const { vets } = this.props;
    return (
      <div class="row">
        <div class="row">
          <div class="input-field col s6">
            <input onChange={this.onNameChange} placeholder="Name" id="first_name" type="text" class="validate" />
          </div>
          <div class="col s6">
          <select onChange={this.onVetChange} class="browser-default">
            <option value="" disabled selected>Veterinarian</option>
            {
              vets.map((vet, key) => {
                const { name } = vet;
                return (
                    <option value={name}>{name}</option>
                )
              })
            }
          </select>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input onChange={this.onTypeChange} placeholder="Animal Type" id="first_name" type="text" class="validate" />
          </div>
          <div class="input-field col s6">
            <input onChange={this.onAgeChange} placeholder="Age" id="first_name" type="text" class="validate" />
          </div>
        </div>

        <a onClick={this.onAddPetClick} class="waves-effect waves-light btn">Add Pet</a>
      </div>
    );
  }

}

export default AddPetModal;
