// App.js
import React, { useState } from 'react';
import { Layout, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion } from './redux/regionsSlice';
import OSMMap from './components/OSMMap';
import FormInput from './components/FormInput';
import RegionInfo from './components/RegionInfo';
import 'leaflet/dist/leaflet.css';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;

const App = () => {
  const [nightMode, setNightMode] = useState(false);
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.regions.selectedRegion);

  const handleRegionChange = (region) => {
    dispatch(setRegion(region));
  };

  const handleLoadButtonClick = () => {
    // You can load the selected region data here and update the OSMMap accordingly
    // For simplicity, let's assume you have the required data for each region beforehand
    // Replace the below placeholder data with actual region-specific data
    if (selectedRegion === 'United States') {
      setRegionInfo({
        currencySymbol: '$',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'gallons',
        timezone: 'GMT-4 to GMT-12',
      });
      setMapCoordinates(37.0902, -95.7129, 5); // Coordinates for the United States
    } else if (selectedRegion === 'India') {
      setRegionInfo({
        currencySymbol: '₹',
        speedUnit: 'km/h',
        distanceUnit: 'kilometers',
        volumeUnit: 'liters',
        timezone: 'GMT+5.5',
      });
      setMapCoordinates(20.5937, 78.9629, 5); // Coordinates for India
    } else if (selectedRegion === 'United Kingdom') {
      setRegionInfo({
        currencySymbol: '£',
        speedUnit: 'mph',
        distanceUnit: 'miles',
        volumeUnit: 'liters',
        timezone: 'GMT+0',
      });
      setMapCoordinates(55.3781, -3.4360, 6); // Coordinates for the United Kingdom
    }
  };

  // State to store the selected map coordinates
  const [mapCoordinates, setMapCoordinates] = useState({ lat: 0, lon: 0, zoom: 2 });

  // State to store the region info
  const [regionInfo, setRegionInfo] = useState({
    currencySymbol: '',
    speedUnit: '',
    distanceUnit: '',
    volumeUnit: '',
    timezone: '',
  });

  return (
    <Layout className={nightMode ? 'night-mode' : 'day-mode'}>
      <Sider trigger={null} collapsible collapsed={false} theme={nightMode ? 'dark' : 'light'}>
        <div className="logo">React-app with a Map UI</div>
        <FormInput
          regions={['United States', 'India', 'United Kingdom']}
          selectedRegion={selectedRegion}
          handleRegionChange={handleRegionChange}
          handleLoadButtonClick={handleLoadButtonClick}
        />
        <Switch onChange={() => setNightMode((prevMode) => !prevMode)} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {/* Your header content here */}
        </Header>
        <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24 }}>
          <OSMMap lat={mapCoordinates.lat} lon={mapCoordinates.lon} zoom={mapCoordinates.zoom} />
          {selectedRegion && <RegionInfo {...regionInfo} />}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Plain text footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
