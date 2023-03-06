import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilekitaService } from "./filekita.service";

@Controller('filekita')
export class FilekitaController {
    constructor(private FilekitaService: FilekitaService){}

    /*----- Latihan Function CRUD -----*/
    @Get('service')
    getService(){
        return this.FilekitaService.lihatService();
    }

    /* Function Get yang memanggil function yang berada di filekita.service, yang berfungsi menampilkan data (show) */
    @Get()
    show(){
        return this.FilekitaService.lihatSemua();
    }
    
    /*----- Latihan Function Biasa -----*/
    /* Function Get biasa dengan tipe data String */
    @Get()
    lihatOutput(): string{
        return 'controller FileKita';
    }

    /* Function Get tipe data String dengan ID, yg dimana diinisial kn menjadi userID dengan tipe data String */
    @Get(':id')
    lihatDetail(@Param('id') userID: string): string{
        return `controller FileKita/Detil dengan id: ${userID}`;
    }
}