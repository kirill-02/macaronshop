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

// === Настройка хранилища с выбором папки по имени поля ===
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let targetDir;

        // Определяем путь в зависимости от имени поля
        if (file.fieldname === 'sealImage') {
            targetDir = path.join(__dirname, '../public/imagesFirebase/completed'); // Для локалки
            // const targetDir = path.join(__dirname, '../www/imagesFirebase/completed'); // для хоста
        } else if (file.fieldname === 'image' || file.fieldname === 'image2' || file.fieldname === 'image3') {
            targetDir = path.join(__dirname, '../public/imagesFirebase/product'); // Для локалки
            // const targetDir = path.join(__dirname, '../www/imagesFirebase/product'); // для хоста
        } else if (file.fieldname === 'promotionImage') {
            targetDir = path.join(__dirname, '../public/imagesFirebase/promotion'); // Для локалки
            // const targetDir = path.join(__dirname, '../www/imagesFirebase/promotion'); // для хоста
        } else if (file.fieldname === 'newsImage') {
            targetDir = path.join(__dirname, '../public/imagesFirebase/news'); // Для локалки
            // const targetDir = path.join(__dirname, '../www/imagesFirebase/news'); // для хоста
        } else if (file.fieldname === 'conditionsImage') {
            targetDir = path.join(__dirname, '../public/imagesFirebase/conditions'); // Для локалки
            // const targetDir = path.join(__dirname, '../www/imagesFirebase/conditions'); // для хоста
        }

        // Создаём папку, если не существует
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, {recursive: true});
        }

        cb(null, targetDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = uuidv4() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

const upload = multer({storage: storage});

// === СТАТИКА ===
app.use(express.static(path.join(__dirname, '../www')));

// === API: Загрузка файлов ===
app.post('/upload', upload.fields([
    {name: 'image', maxCount: 1},
    {name: 'image2', maxCount: 1},
    {name: 'image3', maxCount: 1},
    {name: 'sealImage', maxCount: 1},
    {name: 'promotionImage', maxCount: 1},
    {name: 'newsImage', maxCount: 1},
    {name: 'conditionsImage', maxCount: 1},
]), (req, res) => {
    if (!req.files) {
        return res.status(400).json({error: 'No files uploaded'});
    }

    const filePaths = [];

    // Перечисляем все допустимые поля
    ['image', 'image2', 'image3', 'sealImage', 'promotionImage', 'newsImage', 'conditionsImage'].forEach(field => {
        if (req.files[field]) {
            filePaths.push(req.files[field][0].filename);
        }
    });

    res.json({filePaths});
});

// === SPA fallback для фронта ===
app.get(/^\/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../www/index.html'));
});

// === ЗАПУСК СЕРВЕРА ===
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
