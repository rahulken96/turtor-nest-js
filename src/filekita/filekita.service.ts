import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileKitaDTO } from './dto/filekita.dto';
import { FileKita } from './entities/filekita.entity';

@Injectable()
export class FilekitaService {
    /* Service == Model, dimana inisial kn memanggil data dari DB, contoh tabel: file_kita */
    constructor(
        @InjectRepository(FileKita)
        private filekitaRepository: Repository<FileKita>,
    ) { }

    /**** Function CRUD ****/
    /* Function Create, untuk memasukkan data ke DB */
    async create(data: FileKitaDTO) {
        const FileKitaNew = await this.filekitaRepository.create(data);
        await this.filekitaRepository.save(FileKitaNew);
        return FileKitaNew;
    }

    /* Function Read, untuk membaca data dari DB */
    //Hanya buat nampilin semua data
    async lihatSemua() {
        return await this.filekitaRepository.find();
    }

    //Hanya buat nampilin 1 spesifik data
    async read(id: number) {
        return await this.filekitaRepository.findOne({ where: { id } });
    }

    /* Function Edit, untuk mengubah/update data */
    async edit(id: number, data: Partial<FileKitaDTO>) {
        await this.filekitaRepository.update({ id }, data);
        return await this.filekitaRepository.findOne({ where: { id } });
    }

    /* Function Delete, untuk menghapus data */
    async delete(id: number) {
        await this.filekitaRepository.delete({ id });
        return 'Data Berhasil Terhapus!';
    }



    /**** Function Biasa ****/
    /* Function biasa dari service */
    async lihatService() {
        return 'Ini dari filekitaService';
    }
}
