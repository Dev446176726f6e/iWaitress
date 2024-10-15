import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const PORT = process.env.PORT || 6060;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Server working at http://localhost:${PORT}`);
  });
}
bootstrap();
