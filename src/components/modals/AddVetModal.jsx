import React, { Component } from 'react';

class AddVetModal extends Component {

  state = {
    name: '',
    age: '',
    specialization: '',
    assignedPets: []
  }

  onPetAdded = (e) => {
    const { value } = e.target;
    this.setState({assignedPets: [...this.state.assignedPets, value]});
  }

  onPetRemoved = (e) => {
    const pet = e.currentTarget.getAttribute("value");
    const pIndex = this.state.assignedPets.indexOf(pet);
    const pets = this.state.assignedPets;

    pets.splice(pIndex, 1);
    this.setState({assignedPets: [...pets]});
  }

  onNameChange = (e) => {
    const { value } = e.target;
    this.setState({name: value});
  }

  onAgeChange = (e) => {
    const { value } = e.target;
    this.setState({age: value});
  }

  onSpecializationChange = (e) => {
    const { value } = e.target;
    this.setState({specialization: value});
  }

  onAddVetClick = () => {
    const { name, specialization, assignedPets, age } = this.state;
    const { setModal, setVets, vets } = this.props;
    const vet = { name, specialization, age, assignedPets };

    vets.push(vet);
    setVets(vets);
    setModal({isOpen: false});
  }

  render() {
    const { pets } = this.props;

    return (
      <div class="row">
        <div class="row">
          <div class="input-field col s6">
            <input onChange={this.onNameChange} placeholder="Name" id="first_name" type="text" class="validate" />
          </div>
          <div class="col s6">
            <div class="row">

              <div class="col s5">
                <select onChange={this.onPetAdded} class="browser-default">
                  <option value="" selected>Assign Pets</option>
                  {
                    pets.map((vet, key) => {
                      const { name } = vet;
                      return (
                          <option value={name}>{name}</option>
                      )
                    })
                  }
                </select>
              </div>

              <div class="col s7">
                {
                  this.state.assignedPets.map((pet, key) => {
                    return (
                      <div className="row">
                        <div class="col s3">
                          <p value={pet}>{pet}</p>
                        </div>
                        <div class="col s3">
                          <a style={{cursor: 'pointer'}} value={pet} onClick={this.onPetRemoved}>&times;</a>
                        </div>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input onChange={this.onSpecializationChange} placeholder="Specialization" type="text" class="validate" />
          </div>
          <div class="input-field col s6">
            <input onChange={this.onAgeChange} placeholder="Age" type="text" class="validate" />
          </div>
        </div>

        <a onClick={this.onAddVetClick} class="waves-effect waves-light btn">Add Vet</a>
      </div>
    );
  }

}

export default AddVetModal;
