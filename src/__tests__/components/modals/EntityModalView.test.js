import React from 'react';
import { shallow, mount } from 'enzyme';
import { MODAL_TYPES } from '../../../resources/constants';

import EntityModalView from '../../../components/modals/EntityModalView';

describe('EntityModalView', () => {

  let props;
  let component;
  let instance;
  it('should display view pet modal', () => {

    props = {
        type: MODAL_TYPES.VIEW_ENTITY_PET,
        item: {
          name: 'neo',
          assignedVet: 'jake',
          type: 'dog',
          age: '3w'
        }
    };

    component = shallow(<EntityModalView {...props}/>);
    instance = component.instance();
    instance.getPetContent = jest.fn();
    instance.getContentByType();
    expect(instance.getPetContent).toHaveBeenCalledTimes(1);
  });

  it('should display view vet modal', () => {

    props = {
        type: MODAL_TYPES.VIEW_ENTITY_VET,
        item: {
          name: 'neo',
          specialization: 'dog',
          age: '3w'
        }
    };

    component = shallow(<EntityModalView {...props}/>);
    instance = component.instance();
    instance.getVetContent = jest.fn();
    instance.getContentByType();
    expect(instance.getVetContent).toHaveBeenCalledTimes(1);
  });

  it('should display view event modal', () => {

    props = {
        type: MODAL_TYPES.VIEW_ENTITY_EVENT,
        item: {
          event: {
            start: new Date(),
            end: new Date(),
            title: 'jake and neo'
          }
        }
    };

    component = shallow(<EntityModalView {...props}/>);
    instance = component.instance();
    instance.getEventContent = jest.fn();
    instance.getContentByType();
    expect(instance.getEventContent).toHaveBeenCalledTimes(1);
  });

});
