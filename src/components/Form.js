import { defineComponent, defineEvent } from 'dom-components-package';

const Form = defineComponent({
    title: 'app-form',
    template: `
    <form>
        <div>
            <label for="add-li"><slot /></label>
            <input name="add-li" placeholder="Add List Item" type="text" id="add-li" />
        </div>
        <input type="submit" value="Add Task"  id="submit"/>
    </form>
    `,
    styles: `
    form{
        display: flex;
        justify-content: space-evenly;
        padding: 15px;
        background: coral;
        align-items: center;
    }
    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 50px;
    }
    #add-li{
        border: none;
        height: 30px;
        border-radius: 10px;
        padding: 0 10px;
    }
    #submit{
        height: 40px;
        background: black;
        color: white;
        border: none;
        border-radius: 5px;
        width: 80px;
    }
    label{
        color: white;
        text-align: center;
    }
    `,
    functionality: ({ component }) => {
        component.querySelector('form').addEventListener("submit", (e) => {
            e.preventDefault();
            if (component.querySelector('#add-li').value != '') {
                const addLi = defineEvent('add-li', component.querySelector('#add-li').value);
                component.dispatchEvent(addLi);
                component.querySelector('#add-li').value = '';
            } else {
                alert('Please add an item.')
            }
            
        });
    }
});
export default Form;