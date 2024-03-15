FROM node:lts
WORKDIR /code

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY tsconfig.json tsconfig.json

COPY src/ src/
RUN npx tsc

CMD ["node", "src/tsc.js"]
