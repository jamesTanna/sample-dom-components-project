import { defineComponent } from 'dom-components-package';

const Header = defineComponent({
    title: 'app-header',
    template: '<header><h1><slot /></h1></header>',
    styles: `
    header{
        background: steelblue;
        margin: 0;
        padding: 10px;
        border-bottom: 5px solid white;
    }
    h1{
        color: white;
        margin: 0;
        text-align: center;
    }
    `
});
export default Header;