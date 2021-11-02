const express = require('express');
const cookieParser = require('cookie-parser');
const { checkUser, requireAuth } = require('./middleware/auth.middleware');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const stockRoutes = require('./routes/stock.routes');

require('dotenv').config({ path: './config/.env' })
require('./config/db');

// Swagger
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MERN_Reta API",
            version: "1.0.0",
            description: "A application to follow your stock"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ]
    },
    apis: ['./routes/swagger/*.js']
};

const specs = swaggerJsDoc(options);

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/stock/', stockRoutes);

// server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})