<table>
  <tr>
    <td><b>Highway Road Network Web Map</b></td>
    <td><b>Width Road Network Web Map</b></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/004e5f8e-3460-405d-b1d1-b36c10118930" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/79fee6b5-3924-46c7-a37f-8ca5d769f218" width="400"></td>
  </tr>
</table>

### Steps:
1. Convert Shapefile to GeoJSON – The road network shapefile was converted to GeoJSON for data simplification.

2. Load Data into PostgreSQL – The GeoJSON data was imported into PostgreSQL, retaining key attributes such as width, highway type, and geometry.

3. Render Data on the Frontend – The road network data was loaded into the frontend using MVT (Map Vector Tile) SQL queries.

4. Using a Dropdown, users were able to analyze roads based on width and highway type.


### Purpose:
1. Assists ubrban planners in identifying narrow or congested roads that may require expansion or improvement.
2. Can be used for Traffic Management & Optimization
3. Helps emergency services identify faster routes by differentiating between highway types
### Classification along with color code

<table>
  <tr>
    <th>Highway Type</th>
    <th>Color</th>
    <th>Width Range</th>
    <th>Color</th>
  </tr>
  <tr>
    <td>added</td>
    <td>Orange Red</td>
    <td>0</td>
    <td>Orange Red</td>
  </tr>
  <tr>
    <td>bridleway</td>
    <td>Saddle Brown</td>
    <td>0-1</td>
    <td>Saddle Brown</td>
  </tr>
  <tr>
    <td>construction</td>
    <td>Orange</td>
    <td>1</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>corridor</td>
    <td>Goldenrod</td>
    <td>2</td>
    <td>Goldenrod</td>
  </tr>
  <tr>
    <td>cycleway</td>
    <td>Lime Green</td>
    <td>3</td>
    <td>Lime Green</td>
  </tr>
  <tr>
    <td>footway</td>
    <td>Gold</td>
    <td>4</td>
    <td>Gold</td>
  </tr>
  <tr>
    <td>living_street</td>
    <td>Light Blue</td>
    <td>Unmatched</td>
    <td>Default Grey</td>
  </tr>
  <tr>
    <td>motorway</td>
    <td>Red</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>motorway_link</td>
    <td>Firebrick</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>path</td>
    <td>Forest Green</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>pedestrian</td>
    <td>Pale Goldenrod</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>primary</td>
    <td>Green</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>primary_link</td>
    <td>Dark Green</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>residential</td>
    <td>Hot Pink</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>rest_area</td>
    <td>Medium Purple</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>road</td>
    <td>Chocolate</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>secondary</td>
    <td>Blue</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>secondary_link</td>
    <td>Dark Blue</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>service</td>
    <td>Light Grey</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>servicel</td>
    <td>Dark Grey</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>steps</td>
    <td>Dim Grey</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>tertiary</td>
    <td>Yellow</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>tertiary_link</td>
    <td>Dark Yellow</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>track</td>
    <td>Dark Red</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>trunk</td>
    <td>Dark Violet</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>trunk_link</td>
    <td>Purple</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>unclassified</td>
    <td>Grey</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Unmatched</td>
    <td>Default Grey</td>
    <td></td>
    <td></td>
  </tr>
</table>




