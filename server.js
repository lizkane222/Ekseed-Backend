/* External Modules*/
const express = require('express');
const routes = require('./routes');
const cors = require("cors");

/* Internal Modules */


/* Instanced Modules */
const app = express();

/* Configuration */
const PORT = process.env.PORT || 3001

/* Middleware */
app.use(express.json());
app.use(cors());

/* Routes */
app.use('/api/v1/userConnection', routes.userConnection );
app.use('/api/v1/auth', routes.auth );

/* Server Listener */
app.listen(PORT, () => console.log(`Server is live and listening at on PORT  http://localhost:${PORT}`));