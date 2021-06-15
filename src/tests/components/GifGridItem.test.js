import { shallow } from "enzyme";
import React from "react";
import { GifGridItem } from "../../components/GifGridItem"

describe('testing en el componente GifGridItem', () => {
    
    const title = 'Gif de prueba';
    const url = 'https://localhost/algo.jpg';    
    const wrapper = shallow(
        <GifGridItem 
            title={title}
            url={url}
        />
        );

    test('should to show <GifGridItem /> correctly', () => {
                
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should to have a <p> with the title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });
    
    test('should to have a img src and alt equal from props', () => {
        
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        
    });

    test('should to have the classname animate__zoomIn', () => {
        
        const div = wrapper.find('div');

        const className = div.prop('className');

        expect( className.includes('animate__zoomIn') ).toBe(true);
        
    })
    


})
