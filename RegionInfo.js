import React from 'react';
import { Card } from 'antd';

const RegionInfo = ({ currencySymbol, speedUnit, distanceUnit, volumeUnit, timezone }) => {
  return (
    <Card
      title="Region Information"
      style={{
        marginBottom: 24,
        borderRadius: 8,
        boxShadow: '0 2px 4px rgba(37, 23, 84, 0.1)',
        background: '#1bba5e',
        padding: 16,
      }}
    >
       <div className="info-item">
        <strong>Currency Symbol:</strong> {currencySymbol}
      </div>
      <div className="info-item">
        <strong>Speed Unit:</strong> {speedUnit}
      </div>
      <div className="info-item">
        <strong>Distance Unit:</strong> {distanceUnit}
      </div>
      <div className="info-item">
        <strong>Volume Unit:</strong> {volumeUnit}
      </div>
      <div className="info-item">
        <strong>Timezone:</strong> {timezone}
      </div>
    </Card>
  );
};

export default RegionInfo;
