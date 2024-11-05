import { mount } from '@vue/test-utils';
import calculadora from '@/views/CalculadoraView.vue';
import { describe, expect, beforeEach, it} from "vitest";

describe('Calculator.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(calculadora);
    });

    it('should display 0 as the initial value', () => {
        expect(wrapper.find('input.display').element.value).toBe('0');
    });

    it('should display the first number entered', async () => {
        const button = wrapper.find('button[value="5"]'); // Ajusta el selector per al botó del número
        await button.trigger('click');
        expect(wrapper.find('.display').element.value).toBe('5');
    });

    it('should replace 0 with the first number entered', async () => {
        const button = wrapper.find('button[value="5"]'); // Ajusta el selector
        await button.trigger('click');
        expect(wrapper.find('.display').element.value).toBe('5');

        const anotherButton = wrapper.find('button[value="3"]'); // Ajusta el selector
        await anotherButton.trigger('click');
        expect(wrapper.find('.display').element.value).toBe('53'); // Verifica que el número s'afegeix correctament
    });

    it('should calculate the result correctly', async () => {
        await wrapper.find('button[value="5"]').trigger('click');
        await wrapper.find('button[value="+"]').trigger('click');
        await wrapper.find('button[value="3"]').trigger('click');
        await wrapper.find('button[value="="]').trigger('click'); // Ajusta el selector per al botó d'igual
        expect(wrapper.find('.display').element.value).toBe('8'); // Comprova que el resultat sigui correcte
    });

    it('should clear the display', async () => {
        await wrapper.find('button[value="5"]').trigger('click');
        await wrapper.find('button[value="C"]').trigger('click'); // Ajusta el selector per al botó de neteja
        expect(wrapper.find('.display').element.value).toBe('0');
    });
});
