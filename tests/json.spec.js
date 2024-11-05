import { mount } from '@vue/test-utils';
import JsonComments from '@/views/JsonComments.vue'; // Ajusta el camí al teu component

describe('JsonComments.vue', () => {
    let wrapper;

    beforeEach(() => {
        // Monta el component
        wrapper = mount(JsonComments);

        // Mock de la funció fetch
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve([]), // Retorna un array buit inicialment
            })
        );
    });

    it('should fetch comments and display them', async () => {
        // Simula l'API amb Jest
        const mockComments = [
            {
                name: 'John Doe',
                body: 'This is a comment.',
                email: 'john.doe@example.com',
            },
            {
                name: 'Jane Smith',
                body: 'Another comment.',
                email: 'jane.smith@example.com',
            },
        ];

        // Actualitza la funció fetch per retornar comentaris simulats
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockComments),
            })
        );

        // Espera que el component es renderit correctament
        await wrapper.vm.$nextTick(); // Espera que el component estigui montat
        await wrapper.vm.$nextTick(); // Espera que el DOM estigui actualitzat

        // Comprova que els comentaris s'han afegit al DOM
        const commentElements = wrapper.findAll('li.comment-container');
        expect(commentElements.length).toBe(mockComments.length);

        // Comprova que el contingut dels comentaris és correcte
        expect(commentElements[0].find('h3').text()).toBe(mockComments[0].name);
        expect(commentElements[0].find('p').text()).toBe(mockComments[0].body);
        expect(commentElements[0].find('u').text()).toBe(mockComments[0].email);

        expect(commentElements[1].find('h3').text()).toBe(mockComments[1].name);
        expect(commentElements[1].find('p').text()).toBe(mockComments[1].body);
        expect(commentElements[1].find('u').text()).toBe(mockComments[1].email);
    });

    afterEach(() => {
        // Restaura la funció original de fetch
        jest.restoreAllMocks();
    });
});
