import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "http://localhost:3000",
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE','OPTIONS'],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: '*'
//    'Accept, Accept-Encoding, Accept-Language, Connection, Host, Origin, Referer, Sec-Fetch-Dest, Sec-Fetch-Mode, Sec-Fetch-Site, User-Agent,Access-Control-Allow-Origin'
  });
  await app.listen(3030);
}
bootstrap();
