require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const rateLimiter = require('./config/rateLimit');
const corsConfig = require('./config/cors');
const securityHeaders = require('./config/securityHeaders');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(securityHeaders);
app.use(corsConfig);
app.use(rateLimiter);

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Cyber Security Internship Project Running Securely');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});