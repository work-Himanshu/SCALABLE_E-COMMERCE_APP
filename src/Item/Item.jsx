import React from 'react';
import { useParams } from 'react-router-dom';
function item() {
  const { item } = useParams();
  return <div className="pt-17">item</div>;
}

export default item;
