import { mount } from "@vue/test-utils";
import Block from "@/components/Block";


describe('Block.vue', () => {
    test('render a click me div', () => {
       const wrapper = mount(Block, {
            data(){
                return{
                    showBlock: true
                }
            }
        })
       
        const div = wrapper.get('[data-testid="come"]')
    
        expect(div.text()).toBe('Click me')
    
    })
    
    test('Do not render a click me div', () => {
       const wrapper = mount(Block, {
            data(){
                return {
                    showBlock: false
                }
            }
        })
    
        const dive = wrapper.find('[data-testid="come"]')
    
        expect(dive.exists()).toBe(false)
    })
    
    test('renders a reaction time', ()=> {
      const  wrapper = mount(Block, {
            data(){
                return{
                    reactionTime: 0
                }
            }
        })
        expect(wrapper.exists())
    })

})

