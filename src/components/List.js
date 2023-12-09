import { defineComponent, defineEvent } from 'dom-components-package';

const List = defineComponent({
    title: 'app-list',
    template: '<div><p style="color: white;">Click a list item to delete.</p><ul></ul></div>',
    props: ['data-list'],
    attributeChange: ({ component,  newValue}) => {
        let innerHTML = '';
        const parsedValue = JSON.parse(newValue);
        parsedValue.forEach(li => {
            innerHTML += '<li>'+ li +'</li>';
        });
        component.querySelector('ul').innerHTML = innerHTML;
        const liList = component.querySelectorAll('li');
        if (liList.length > 0){
            liList.forEach(li => {
                li.addEventListener("click",() => {
                    const deleteLi = defineEvent('delete-li', li.innerText);
                    component.dispatchEvent(deleteLi);
                });
            });
        } else {
            component.querySelector('ul').innerHTML = '<p style="color: white;">No items to show</p>';
            component.querySelector('p').style.display = 'none';
        }
    
    },
    styles: `
    div{
        background: #666;
        margin: 0;
        padding: 10px;
    }
    li{
        color: #fff;
        list-style: none;
        margin: 5px 10px;
    }
    `
});
export default List;