import { defineComponent } from 'dom-components-package';

const App = defineComponent({
    title: 'app-root',
    template: `<app-header>Listing App</app-header> <app-form>Add LI</app-form> <app-list></app-list>`,
    defaultStateValue: ['Hello', 'Hi'],
    functionality: ({ component, state }) => {
        const appList = component.querySelector('app-list');
        appList.setAttribute('data-list', JSON.stringify(state));
        appList.addEventListener('delete-li', e => {
            const oldState = [...state];
            state = oldState.filter(li => li !== e.detail);
            appList.setAttribute('data-list', JSON.stringify(state));
        });
        
        const appForm = component.querySelector('app-form');
        appForm.addEventListener("add-li", e => {
            state.push(e.detail);
            appList.setAttribute('data-list', JSON.stringify(state));
        });
    },
});

export default App;