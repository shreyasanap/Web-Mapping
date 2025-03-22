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



Steps:
1. Convert Shapefile to GeoJSON – The road network shapefile was converted to GeoJSON for data simplification.

2. Load Data into PostgreSQL – The GeoJSON data was imported into PostgreSQL, retaining key attributes such as width, highway type, and geometry.

3. Render Data on the Frontend – The road network data was loaded into the frontend using MVT (Map Vector Tile) SQL queries.

4. Using a Dropdown users were able to analyze roads based on width and highway type.


Purpose:
1. Assists ubrban planners in identifying narrow or congested roads that may require expansion or improvement.
2. Can be used for Traffic Management & Optimization
3. Helps emergency services identify faster routes by differentiating between highway types

