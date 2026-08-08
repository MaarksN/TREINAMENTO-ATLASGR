FROM node:20-bookworm-slim

WORKDIR /service
RUN npm init --yes \
    && npm install --omit=dev @learninglocker/xapi-service@7.1.2

ENV EXPRESS_PORT=8081
EXPOSE 8081
CMD ["node", "node_modules/@learninglocker/xapi-service/dist/server.js"]
