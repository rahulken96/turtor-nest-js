import { Test, TestingModule } from '@nestjs/testing';
import { FilekitaController } from './filekita.controller';

describe('FilekitaController', () => {
  let controller: FilekitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilekitaController],
    }).compile();

    controller = module.get<FilekitaController>(FilekitaController);
  });

  it('Harusnya controller filekita jalan', () => {
    expect(controller).toBeDefined();
  });
});
