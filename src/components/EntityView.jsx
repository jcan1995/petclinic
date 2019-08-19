import React, { Component } from 'react';

import { MODAL_TYPES, CARD_TYPES } from '../resources/constants';

import Card from './shared/Card';


const { PET, VETERINARIAN } = CARD_TYPES;

class EntityView extends Component {

  renderEntity = () => {
    const { pets, vets, path } = this.props;
    let items;

    switch(path) {
      case '/pets':
        items = pets.map((item, key) => {
          return (
            <div onClick={this.handleOnCardClicked.bind(this, key, PET)} style= {{marginTop: '8px'}}>
              <Card type={PET} item={item} />
            </div>
          )
        });
        return items;
      case '/veterinarians':
        items = vets.map((item, key) => {
          return (
            <div onClick={this.handleOnCardClicked.bind(this, key, VETERINARIAN)} style= {{marginTop: '8px'}}>
              <Card type={VETERINARIAN} item={item} />
            </div>
          )
        });
        return items;
      default:
        return ('404');
    }

  }

  handleOnCardClicked = (key, type) => {
    const { setModal } = this.props;

    switch (type) {
      case PET:
        const pet = this.props.pets[key];
        setModal({isOpen: true, type: MODAL_TYPES.VIEW_ENTITY_PET, items: pet});
        break;
      case VETERINARIAN:
        const vet = this.props.vets[key];
        setModal({isOpen: true, type: MODAL_TYPES.VIEW_ENTITY_VET, items: vet});
        break;
      default:
        break;

    }
  }

  render() {
    const { pets, vets } = this.props;
    const items = (pets && vets);

    return (
      <div style= {{marginTop: '8px'}}>
        <div className="row">
          <div className="col s4">
          </div>
          <div style={{cursor: 'pointer'}} className="col s4">
            {items && this.renderEntity()}
          </div>
          <div className="col s4">
          </div>
        </div>

      </div>
    );
  }

}

export default EntityView;
