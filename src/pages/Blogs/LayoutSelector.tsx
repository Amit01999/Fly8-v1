import React from 'react';

const LayoutSelector = ({ value, onChange }) => (
  <select
    value={value}
    onChange={e => onChange(e.target.value)}
    className="w-full p-3 border rounded"
  >
    <option value="layout1">Layout 1 (Standard)</option>
    <option value="layout2">Layout 2 (Card)</option>
    <option value="layout3">Layout 3 (Full Width)</option>
  </select>
);

export default LayoutSelector;
