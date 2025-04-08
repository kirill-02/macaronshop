const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const {v4: uuidv4} = require('uuid');

const app = express();
app.use(cors());


const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_IP || '0.0.0.0';

// Папка для загрузки изображений
// const uploadDir = path.join(__dirname, '../public/imagesFirebase/product'); // для локалки
const uploadDir = path.join(__dirname, '../www/imagesFirebase/product'); //для хоста

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, {recursive: true});
}

// Настройка хранения файлов
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

const upload = multer({storage: storage});

app.use(express.static(path.join(__dirname, '../www')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../www/index.html'));
});

app.post('/upload', upload.fields([
    {name: 'image', maxCount: 1},
    {name: 'image2', maxCount: 1},
    {name: 'image3', maxCount: 1}]
), (req, res) => {
    if (!req.files) {
        return res.status(400).json({error: 'No files uploaded'});
    }

    const filePaths = [];
    if (req.files['image']) {
        filePaths.push(req.files['image'][0].filename);
    }
    if (req.files['image2']) {
        filePaths.push(req.files['image2'][0].filename);
    }
    if (req.files['image3']) {
        filePaths.push(req.files['image3'][0].filename);
    }

    res.json({filePaths});
});

// Запуск сервера
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});