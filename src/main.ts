import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  
  const config = new DocumentBuilder()
  .setTitle("NestJS API Movies")
  .setDescription("Crie um usuário e faça o login para poder acessar copie o bearer token, clique em authorize cole o token para poder criar ou excluir os filmes.")
  .setVersion("1.0")
  .addTag("movies")
  .addBearerAuth()
  .build()
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)
  await app.listen(3000)
}
bootstrap()
