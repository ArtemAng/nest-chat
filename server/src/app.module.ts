import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { ormConfig } from './configs/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormConfig,
      logging: ['warn', 'error', 'migration'],
      logger: 'simple-console',
      autoLoadEntities: true,
      synchronize: false
    })],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
