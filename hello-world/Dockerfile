## BUILDER STAGE
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
# Copy TypeScript source
COPY . .
# Build TypeScript
RUN npm run build


FROM public.ecr.aws/lambda/nodejs:20
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD ["dist/app.httpHandler"]
