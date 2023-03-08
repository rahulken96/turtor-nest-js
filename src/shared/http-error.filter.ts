import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const respond = ctx.getResponse();
        const status = exception.getStatus();

        /* Membuat error respond berbentuk json */
        var errorRespond = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: exception.message || null,

        };

        /* Log Error Diserver */
        Logger.error(`${request.method} ${request.url}`, JSON.stringify(errorRespond), 'ExceptionFilter'); 

        /* Log Error Diclient */
        respond.status(404).json({ errorRespond });
    }
}