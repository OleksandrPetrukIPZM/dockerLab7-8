# Встановлення базового образу Node.js
FROM node:18.18

# Створення та перехід до робочої директорії
WORKDIR /app

# Копіювання файлів package.json та package-lock.json
COPY package*.json ./

# Встановлення залежностей
RUN npm install

# Копіювання решти файлів проекту
COPY . .

# Запуск додатку
CMD ["npm", "start"]