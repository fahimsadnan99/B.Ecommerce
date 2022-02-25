import React, { useEffect, useState } from 'react'

const CheckBox = ({ catagorys, handleFilter }) => {
  let [catagory, setCatagory] = useState([]);

  const handleChange = (id) => () => {
    const findItem = catagory.indexOf(id);
    if (findItem === -1) {
      setCatagory([...catagory, id]);
    } else {
      let newArray = catagory.filter((item) => item !== id);
      setCatagory(newArray);
    }
  };

  useEffect(() => {
    console.log(catagory);
    handleFilter(catagory);
  }, [catagory]);

  return (
    <>
      {catagorys.map((item) => {
        return (
          <li class="form-check">
            <input
              onChange={handleChange(item._id)}
              class="form-check-input"
              type="checkbox"
              value={catagory.includes(item._id)}
              key={item._id}
            />
            <label class="form-check-label">{item.catagory}</label>
          </li>
        );
      })}
    </>
  );
};

export default CheckBox
