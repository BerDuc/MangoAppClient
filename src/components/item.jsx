import React from 'react'; 

export function Item(itemObj, key){
    let item = itemObj.item; 
return <tr key={key}>
        <td>
            {item.titre}
        </td>
        <td>
            {item.description}
        </td>
    </tr>
}
export default Item; 