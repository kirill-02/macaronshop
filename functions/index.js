const functions = require('firebase-functions');
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());

// Настройка хранения файлов
const uploadDir = '/tmp'; // Временная директория для хранения загруженных файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

// Инициализация multer
const upload = multer({ storage: storage });

// Корневой маршрут
app.get('/', (req, res) => {
    res.send('Welcome to the image upload server!');
});

// Маршрут для загрузки файла
app.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image2', maxCount: 1 }, { name: 'image3', maxCount: 1 }]), (req, res) => {
    if (!req.files) {
        return res.status(400).json({ error: 'No files uploaded' });
    }

    const filePaths = [];
    if (req.files['image']) {
        filePaths.push(`${req.files['image'][0].filename}`);
    }
    if (req.files['image2']) {
        filePaths.push(`${req.files['image2'][0].filename}`);
    }
    if (req.files['image3']) {
        filePaths.push(`${req.files['image3'][0].filename}`);
    }

    res.json({ filePaths });
});

// Экспорт функции
exports.api = functions.https.onRequest(app);
