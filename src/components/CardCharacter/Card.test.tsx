import {fireEvent, render, screen} from '@testing-library/react';
import CardCharacter from "./index";
import useCharactersStore from '../../store/store'

// Мок Zustand хранилища
jest.mock('../../store/store', () => {
    const zustand = jest.requireActual('zustand');

    const mockStoreCharacters = {
        setModalOpen: jest.fn(),
        setSelectCharacter: jest.fn()
    };

    return { __esModule: true, default: zustand.create(() => mockStoreCharacters) };
});

//  Тестовые данные (первая карточка)
let testDataCharacter = {
    birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited:"2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/"],
    gender:"male",
    hair_color:"blond",
    height:"172",
    homeworld:"https://swapi.dev/api/planets/1/",
    mass:"77",
    name:"Luke Skywalker",
    skin_color:"fair",
    species:[],
    starships:["https://swapi.dev/api/starships/12/", "https://swapi.dev/api/starships/22/"],
    url:"https://swapi.dev/api/people/1/",
    vehicles: ["https://swapi.dev/api/vehicles/14/", "https://swapi.dev/api/vehicles/30/"]
}

describe('CharacterCard', () => {

    test('корректно отображает данные', () => {
        render(<CardCharacter dataCharacter={testDataCharacter} />);

        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
        expect(screen.getByText(/172/i)).toBeInTheDocument();
        expect(screen.getByText(/77/i)).toBeInTheDocument();
        expect(screen.getByText(/male/i)).toBeInTheDocument();
        expect(screen.getByText(/19BBY/i)).toBeInTheDocument();
    });

    test('вызывает setCharacterAndModal при клике на карточку', () => {
        render(<CardCharacter dataCharacter={testDataCharacter} />);

        const element = screen.getByText('Luke Skywalker');
        fireEvent.click(element);

        expect(useCharactersStore.getState().setModalOpen).toHaveBeenCalledWith(true);
        expect(useCharactersStore.getState().setSelectCharacter).toHaveBeenCalledWith(testDataCharacter);
    });
});