import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { save, create } from 'react-icons/ion-icon';

const List = props => {
  const { data, edit, del } = props;
  const [radio, setRadio] = useState(false);

  const handleRadioChange = () => {
    setRadio(prevVal => {
      return !prevVal;
    });
  };

  return (
    <div className="mt-5">
      <ul style={{ textDecoration: radio === true ? "line-through" : "none" }}>
        {data.map(item => (
          <li key={item.id}>
            <input value={radio} type="checkbox" onChange={handleRadioChange} />
            {item.input} <ion-icon name="create" onClick={edit} />
            <ion-icon
              name="trash"
              onClick={() => {
                del(item.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
