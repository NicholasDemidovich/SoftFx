FROM node:15.13-alpine
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build
CMD ["npm", "start"]