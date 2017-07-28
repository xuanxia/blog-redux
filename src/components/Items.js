import React from 'react';
import Item from '../containers/Item';
const Items = ({items}) => (
  <ul>
      {
          items.map((item,index)=> <li style={{height:'30px'}} key={index}>
              <Item detail={item} index={index} />
              </li> )
      }
  </ul>
);
export default Items