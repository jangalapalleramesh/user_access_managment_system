const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { DataSource } = require('typeorm');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: ["./entities/*.js"]
});

AppDataSource.initialize()
  .then(() => {
    console.log("DB Connected");

    // Injecting data source into each request
    app.use((req, res, next) => {
      req.dataSource = AppDataSource;
      next();
    });

    app.use('/api/auth', require('./routes/authRoutes'));
    app.use('/api/software', require('./routes/softwareRoutes'));
    app.use('/api/requests', require('./routes/requestRoutes'));

    app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));
  })
  .catch((error) => console.error("DB Connection Error:", error));
