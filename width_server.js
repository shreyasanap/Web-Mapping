const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Database connection configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: '123',
    port: 5432,
});

// Function to generate vector tiles
async function generateVectorTiles(z, x, y) {
    try {
        const query =
            ` WITH mvtgeom AS (
    SELECT
      ST_AsMVTGeom(
        ST_Transform(geometry, 3857),
        ST_TileEnvelope($1, $2, $3)
      ) AS geom,
     width -- Directly use the width column
    FROM
      delhi
    WHERE
      geometry && ST_Transform(ST_TileEnvelope($1, $2, $3), 4326)
  )
  SELECT ST_AsMVT(mvtgeom.*, 'width') AS mvt 
  FROM mvtgeom;
`;
        ;

        const res = await pool.query(query, [z, x, y]);
        console.log('Query result:', res.rows[0]);

        // The result is a binary MVT (Mapbox Vector Tile)
        return res.rows[0].mvt;
    } catch (err) {
        console.error('Error generating vector tiles:', err);
        throw err; // Rethrow the error to see it in the response
    }
}

// Endpoint to serve vector tiles
app.get('/tiles/:z/:x/:y.mvt', async (req, res) => {
    const z = parseInt(req.params.z);
    const x = parseInt(req.params.x);
    const y = parseInt(req.params.y);

    if (isNaN(z) || isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid z, x, or y parameters.');
    }

    try {
        const mvt = await generateVectorTiles(z, x, y);

        if (mvt) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Content-Type', 'application/vnd.mapbox-vector-tile');
            res.send(mvt);
        } else {
            res.status(404).send('No data found for this tile.');
        }
    } catch (err) {
        res.status(500).send('Error generating tile: ' + err.message);
    }
});

// Handle preflight requests
app.options('/tiles/:z/:x/:y.mvt', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Tile server running at http://localhost:${port}`);
});
