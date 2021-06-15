import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Tests in the hook useFetchGifs', () => {
    
    test('should to return the initial state', async() => {
        
        // const { data, loading } = useFetchGifs( 'One punch' );

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
        const { data, loading } = result.current;

        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe( true );

    });
    

    test('should  to return a array of imgs and the loading to be false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ));
        await waitForNextUpdate();
        
        const { data, loading } = result.current;

        expect( data.length ).toBe( 7 );
        expect( loading ).toBe( false );

    })
    


})
