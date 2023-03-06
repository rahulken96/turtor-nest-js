import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKita } from "./filekita.entity";

@Injectable()
export class FilekitaService {
    /* Service == Model, dimana inisial kn memanggil data dari DB, contoh tabel: file_kita */
    constructor(
        @InjectRepository(FileKita)
        private filekitaRepository: Repository<FileKita>
    ){}

    /* Function baca semua data dari DB */
    async lihatSemua(){
        return await this.filekitaRepository.find();
    }

    /* Function biasa dari service */
    async lihatService(){
        return 'Ini dari filekitaService';
    }

}
