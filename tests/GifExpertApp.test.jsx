import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => { 
    const inputValue = 'GTA6';
    const inputValue2 = 'GTA5';

    test('Debe llamar onAddCategory al agregar nueva categoria', async() => {

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue2 }} );
        fireEvent.submit( form );
        
        
        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(2); 
        
     });

     test('Debe llamar onAddCategory al agregar nueva categoria', async() => { 

        render( <GifExpertApp /> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: inputValue }} );
        fireEvent.submit( form );
        
        
        expect( screen.getAllByRole('heading', {level: 3}).length ).toBe(1); 
        
     });
   
 })
 