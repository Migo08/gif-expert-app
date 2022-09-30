import { getGifts } from "../../src/helpers/getGifs";

describe('Pruebas en getGifts() ', () => { 
    test('debe retornar un arreglo', async() => { 
        const gifs = await getGifts('One Punch');
        expect( gifs.length ).toBeGreaterThanOrEqual(1);
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });
 });