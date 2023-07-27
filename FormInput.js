// FormInput.js
import React from 'react';
import { Select, Button } from 'antd';

const FormInput = ({ regions, selectedRegion, handleRegionChange, handleLoadButtonClick }) => {
  return (
    <div style={{ marginBottom: 24 }}>
      <Select
        value={selectedRegion}
        onChange={handleRegionChange}
        style={{ width: 180, marginRight: 16 }}
        placeholder="Select a region"
      >
        {regions.map(region => (
          <Select.Option key={region} value={region}>
            {region}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleLoadButtonClick}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
