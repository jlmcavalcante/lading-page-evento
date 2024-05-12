# Stage 1: Build Stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build 
CMD ["tail", "-f", "/dev/null"]

# Stage 2: Production Stage
#FROM nginx:alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
#EXPOSE 3030
#CMD ["nginx", "-g", "daemon off;"]
