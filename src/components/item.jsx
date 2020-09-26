import React from 'react'; 

export function Item(itemObj, key){
    let item = itemObj.item; 
return <tr key={key}>
        <td>
            {item.getTitre}
        </td>
        <td>
            {item.getDescription}
        </td>
    </tr>
}
export default Item; 