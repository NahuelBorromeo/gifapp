import GifExpertApp from "../GifExpertApp";
import React from 'react';
import { shallow } from 'enzyme';

describe('Pruebas en <GifExpertApp />', () => {
    
    test('should to do match with the snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp />);

        expect( wrapper ).toMatchSnapshot();

    });

    test('should to show a categories list', () => {
        
        const categories = ['One punch', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    


})
