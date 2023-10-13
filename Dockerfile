FROM node:lts-alpine

# Set the working directory to /app inside the container
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
#RUN npm install
RUN npm ci --only=production

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# set the environment to production
ENV NODE_ENV=production

# Build the app
#RUN npm run build

# Expose the port on which the app will be running
EXPOSE 3000

CMD [ "npm", "start" ]
