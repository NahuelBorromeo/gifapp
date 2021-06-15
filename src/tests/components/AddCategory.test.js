import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    //jest.nf() es lo mismo que poner una función simple, solo que nos permite saber cuando y cuantas veces fue llamada.
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } />);
    });

    test('should to show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should to change the input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
    });
    
    test('should not to post the information on submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('should to call the func setCategories and clear the textbox', () => {
        
        const value = 'Hola Mundo';
        
        wrapper.find('input').simulate('change', { target: { value }});

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
        
        expect( wrapper.find('input').prop('value') ).toBe('');
    })
    
    

})
