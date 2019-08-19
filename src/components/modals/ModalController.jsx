import React from 'react';
import AddEventModal from './AddEventModal';
import AddPetModal from './AddPetModal';
import AddVetModal from './AddVetModal';
import EntityModalView from './EntityModalView';

import { MODAL_TYPES } from '../../resources/constants';

const getModalByType = (props) => {
  const  { setAppointments, setModal, modal: { type, items }, setPets, setVets, veterinarians, pets, appointments } = props;
  const { VIEW_ENTITY_EVENT, VIEW_ENTITY_PET, VIEW_ENTITY_VET, ADD_PET, ADD_VET, ADD_EVENT } = MODAL_TYPES;

  switch(type) {
    case VIEW_ENTITY_EVENT:
      return <EntityModalView type={type} item={items} appointments={appointments} setModal={setModal} setAppointments={setAppointments}/>
    case VIEW_ENTITY_PET:
      return <EntityModalView type={type} setModal={setModal} setPets={setPets} setVets={setVets} item={items} pets={pets} />
    case VIEW_ENTITY_VET:
      return <EntityModalView type={type} setModal={setModal} setPets={setPets} setVets={setVets} item={items} vets={veterinarians} />
    case ADD_PET:
      return <AddPetModal setModal={setModal} vets={veterinarians} pets={pets} setPets={setPets} />
    case ADD_VET:
      return <AddVetModal setModal={setModal} vets={veterinarians} pets={pets} setVets={setVets} />
    case ADD_EVENT:
      return <AddEventModal setModal={setModal} appointments={appointments} setAppointments={setAppointments} pets={pets} vets={veterinarians}  />
    default:
      return <div>default modal</div>
    }
  }

export default getModalByType;
