# Wybierz obraz bazowy
FROM node:18-alpine

# Ustawienie katalogu roboczego
WORKDIR /app

# Kopiowanie plików package.json i yarn.lock
COPY package.json yarn.lock ./

# Instalacja zależności
RUN yarn install

# Kopiowanie reszty plików
COPY . .

# Budowanie aplikacji
RUN yarn run build

# Uruchamianie aplikacji
CMD ["yarn", "start"]
