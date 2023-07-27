Map UI App - README

The Map UI App is a React web application that provides an interactive mapping interface using OpenStreetMap (OSM). The app allows users to select a region from a dropdown menu and load the map with the chosen country. Additionally, it displays region-specific information, including the currency symbol, units of speed, distance, volume, and timezone.

Features:

Interactive Map: Users can select a region from the dropdown menu, and the map will load and display the selected country's location on the map.

Region Information: After loading a region, a card UI will show relevant information, such as the currency symbol, speed unit, distance unit, volume unit, and timezone of the selected country.

Night Mode: The app offers a night mode option that can be toggled on and off in the sidebar using the Redux state management library.

Folder Structure:
The project has the following folder structure:

css
Copy code
/src
  /components
    FormInput.js - Component for the region selection form.
    RegionInfo.js - Component to display region-specific information.
    OSMMap.js - Component for displaying the OpenStreetMap with selected coordinates.
  /redux
    store.js - Redux store configuration.
    regionsSlice.js - Redux slice for managing selectedRegion state.
  App.js - Main component for the app layout and logic.
  index.js - Entry point of the app.
App.css - Stylesheet for custom app styles.
Dependencies:
The app uses the following external dependencies:

antd: For the UI components, including Select and Switch.
react-leaflet and leaflet: To render the interactive OpenStreetMap.
redux and react-redux: For state management.
Getting Started:

Clone the repository to your local machine.

Navigate to the project directory in the terminal.

Install the required dependencies using npm install.

Start the development server using npm start. The app will open automatically in your default web browser at http://localhost:3000/.

Usage:

On the left sidebar, you will find a dropdown menu with three regions: United States, India, and the United Kingdom.

Select a region from the dropdown menu.

Click the "Load" button to load the map with the selected country's location.

The map will appear in the content area, and the region-specific information will be displayed in a card below the map.

You can also toggle the night mode using the switch in the sidebar.

Notes:

The app uses placeholder data for the region-specific information. To display accurate data, you can implement API calls or fetch data from a database for each region.

The app has a basic layout and design, and you can customize the UI, colors, and styles as per your preferences.

License:
This project is licensed under the MIT License.

Author:
Your Name (Your Email Address)

Feel free to reach out if you have any questions or suggestions. Enjoy exploring the Map UI App!