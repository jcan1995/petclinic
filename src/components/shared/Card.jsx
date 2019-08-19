import React from 'react';
import styled from 'styled-components';

import { CARD_TYPES } from '../../resources/constants';
import { DetailWrapper, Attribute } from '../../style/styles';

const CardWrapper = styled.div`
  border: 1px solid #000;
  border-radius: 25px;
  background-color: rgb(70, 160, 236);

`;

function getPetCard(petItem) {
  const { age, assignedVet, name, type } = petItem;

  return (
    <CardWrapper>
      <DetailWrapper>
        <Attribute>{`Name: ${name}`}</Attribute>
        <Attribute>{`Veterinarian: ${assignedVet}`}</Attribute>
        <Attribute>{`Animal: ${type}`}</Attribute>
        <Attribute>{`Age: ${age}`}</Attribute>
      </DetailWrapper>
    </CardWrapper>
  );
}

function getVeterinarianCard(vetItem) {
  const { name, age, specialization, assignedPets } = vetItem;

  return (
    <CardWrapper>
      <DetailWrapper>
        <Attribute>{`Name: ${name}`}</Attribute>
        <Attribute>{`Age: ${age}`}</Attribute>
        <Attribute>{`Specialization: ${specialization}`}</Attribute>
      </DetailWrapper>
    </CardWrapper>
  );
}

const Card = (props) => {
    const { type, item } = props;
    const { PET, VETERINARIAN } = CARD_TYPES;
    let card;

    switch(type) {
      case PET:
        card = getPetCard(item);
        break;
      case VETERINARIAN:
        card = getVeterinarianCard(item);
        break;
      default:
        card = null;
    }

    return card;
};

export default Card;
