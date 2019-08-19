import React, { Component } from 'react';
import { MODAL_TYPES } from '../../resources/constants';
import { Attribute, DetailWrapper } from '../../style/styles';

class EntityModalView extends Component {

  getPetContent = () => {
    const { item: { name, assignedVet, type, age } } = this.props;

    return (
      <DetailWrapper>
        <Attribute>{`Name: ${name}`}</Attribute>
        <Attribute>{`Veterinarian: ${assignedVet}`}</Attribute>
        <Attribute>{`Animal: ${type}`}</Attribute>
        <Attribute>{`Age: ${age}`}</Attribute>
      </DetailWrapper>
    );
  }

  getVetContent = () => {
    const { item: { name, age, specialization } } = this.props;

    return (
      <DetailWrapper>
        <Attribute>{`Name: ${name}`}</Attribute>
        <Attribute>{`Age: ${age}`}</Attribute>
        <Attribute>{`Specialization: ${specialization}`}</Attribute>
      </DetailWrapper>
    );
  }

  getEventContent = () => {
    const { item: { event: { start, end, title } } } = this.props

    return (
      <DetailWrapper>
        <Attribute>{`Appointment: ${title}`}</Attribute>
        <Attribute>{`Start: ${start}`}</Attribute>
        <Attribute>{`End: ${end}`}</Attribute>
      </DetailWrapper>
    );
  }

  getContentByType = () => {
    const { type } = this.props;

    switch (type) {
      case MODAL_TYPES.VIEW_ENTITY_PET:
        return this.getPetContent();
      case MODAL_TYPES.VIEW_ENTITY_VET:
        return this.getVetContent();
      case MODAL_TYPES.VIEW_ENTITY_EVENT:
        return this.getEventContent();
      default:
        return <div>default modal</div>
    }
  }

  handleOnDeleteClicked = () => {
    const { type } = this.props;

    switch (type) {
      case MODAL_TYPES.VIEW_ENTITY_PET:
        this.deletePet();
        break;
      case MODAL_TYPES.VIEW_ENTITY_VET:
        this.deleteVet();
        break;
      case MODAL_TYPES.VIEW_ENTITY_EVENT:
        return this.deleteEvent();
      default:
        return;
    }
  }

  deleteVet = () => {
    const { setModal, setVets, vets, item } = this.props;
    const index = vets.indexOf(item);

    vets.splice(index, 1);
    setVets(vets);
    setModal({isOpen: false});
  }

  deletePet = () => {
    const { setModal, setVets, pets, item } = this.props;
    const index = pets.indexOf(item);

    pets.splice(index, 1);
    setVets(pets);
    setModal({isOpen: false});
  }

  deleteEvent = () => {
    const { setModal, setAppointments, appointments, item } = this.props;
    const index = appointments.indexOf(item);

    appointments.splice(index, 1);
    setAppointments(appointments);
    setModal({isOpen: false});
  }

  render() {
    const content = this.getContentByType();

    return (
      <div>
        {content}
        <a onClick={this.handleOnDeleteClicked} class="waves-effect waves-light btn red">Delete</a>
      </div>
    );
  }

}

export default EntityModalView;
