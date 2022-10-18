import { mount } from "@vue/test-utils";
import Results from '@/components/Results'

describe('Results.vue', ()=> {
    test('renders the score', () => {
        const wrapper = mount(Results)
        const result = wrapper.get('[data-testid="result"]')
    })
})