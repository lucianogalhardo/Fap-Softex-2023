export class StatusCliente {

    private idStatus: Number;
    private statusCliente: String;

    constructor(idStatus: Number, statusCliente: String) {
        this.idStatus = idStatus;
        this.statusCliente = statusCliente;

    }

    getIdStatus() {
        return this.idStatus;
    }

    getStatusCliente() {
        return this.statusCliente;
    }

    setIdStatus(idStatus: Number): void {
        this.idStatus = idStatus;
    }

    steStatusCliente(statusCliente: String): void {
        this.statusCliente = statusCliente;
    }

}