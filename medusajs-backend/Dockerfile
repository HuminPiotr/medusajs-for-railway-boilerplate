# Backend Dockerfile

# Używamy obrazu Node.js
FROM node:18-alpine

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie package.json i yarn.lock
COPY package.json yarn.lock ./

# Instalacja zależności
RUN yarn install

# Kopiowanie reszty plików
COPY . .

# Uruchomienie serwera
CMD ["yarn", "start"]
