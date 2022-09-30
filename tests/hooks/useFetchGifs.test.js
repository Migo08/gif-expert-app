import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('Pruebas en hook useFetchGifs', () => { 
    test('Debe regrersar estado inicial images array vacio, isLoading true', () => { 
        
        const { result } = renderHook( () => useFetchGifs('GTA') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        
     });
     test('Debe regrersar images array, isLoading false', async() => { 
        
        const { result } = renderHook( () => useFetchGifs('GTA') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
        
     });
     
 });