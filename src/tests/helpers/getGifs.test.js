import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fecth', () => {
    
    test('should to return 7 elements', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 7 );

    });
    
    test('should to return 0 elements without category', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    });

})
