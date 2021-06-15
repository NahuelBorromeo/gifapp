import React from 'react';
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');
//El jest mock finge cualquier llamada a ese archivo y supone o controla la información que responde

describe('Pruebas en <GifGird />', () => {
    
    const category = 'Saitama'
    
    test('should to do match with the snapshot', () => {
        
        //falseando la data
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category }/> );

        expect( wrapper ).toMatchSnapshot();

    });
    
    test('should show items when images are loaded', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: 'A2C',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow( <GifGrid category={ category }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    


})
