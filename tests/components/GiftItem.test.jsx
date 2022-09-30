import { render, screen } from "@testing-library/react";
import { GiftItem } from "../../src/components/GiftItem";



const title = 'Prueba';
const url   = 'https://media1.giphy.com/media/gIIIX3GbqJmkzxn9Mk/giphy.gif?cid=3285e6afm7o8ywcrpqe3md5oumk3amjk2b14f5qa7sfp77iq&rid=giphy.gif&ct=g';

describe('Pruebas en <GiftItem />', () => { 
    test('Debe hacer match con el snapshop', () => { 
        const { container } = render(<GiftItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar imagen con url y alt indicado', () => { 
        render( <GiftItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url);
        expect( alt ).toBe( title );
     });

     test('Debe de mostrar el título en el componente ', () => { 
        render( <GiftItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
     });
});