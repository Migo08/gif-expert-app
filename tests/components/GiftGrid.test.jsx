import { render, screen } from "@testing-library/react"
import { GiftGrid } from "../../src/components/GiftGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en componente GifGrid', () => { 

    const category = 'GTA';

   test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GiftGrid category={ category } /> );

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));

        screen.debug();

    });

    test('Debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [{
                id: 'dfgfsdgsdfg',
                title: 'Imagen 1',
                url: 'https://imagen1.jpg'
            },
            {
                id: 'dfgfsdgsd2fg',
                title: 'Imagen 2',
                url: 'https://imagen2.jpeg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GiftGrid category={ category } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);
        

     });
 });