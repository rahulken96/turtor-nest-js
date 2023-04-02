import { Body, Controller, Get, Param, Post, Patch, Delete, Render } from '@nestjs/common';
import { FileKitaDTO } from './dto/filekita.dto';
import { FilekitaService } from "./filekita.service";

@Controller('filekita')
export class FilekitaController {
    constructor(private FilekitaService: FilekitaService) { }
    @Get('service')
    getService() {
        return this.FilekitaService.lihatService();
    }

    /*----- Latihan Function CRUD -----*/
    /* Function Get yang memanggil function yang berada di filekita.service, yang berfungsi menampilkan data (show) */
    @Get('jsondata')
    async show() {
        return { data: await this.FilekitaService.lihatSemua() }; //Index
    }

    @Post()
    store(@Body() data: FileKitaDTO) {
        return this.FilekitaService.create(data); //Create Data
    }

    @Get(':id')
    read(@Param('id') id: number) {
        return this.FilekitaService.read(id); //Read Data
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() data: Partial<FileKitaDTO>) {
        return this.FilekitaService.edit(id, data); //Update Data
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.FilekitaService.delete(id); //Update Data
    }


    /*---- Funtion untuk view menggunakan format .hbs ---*/
    @Get()
    @Render('filekita/index')
    root() {
        return { message: `Halo NestJs HEHHE`, title: `Turtor NestJS`, data: this.FilekitaService.lihatSemua() };
    }


    /*----- Latihan Function Biasa -----*/
    /* Function Get biasa dengan tipe data String */
    @Get()
    lihatOutput(): string {
        return 'controller FileKita';
    }

    /* Function Get tipe data String dengan ID, yg dimana diinisial kn menjadi userID dengan tipe data String */
    @Get(':id')
    lihatDetail(@Param('id') userID: string): string {
        return `controller FileKita/Detil dengan id: ${userID}`;
    }
}