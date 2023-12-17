export class Email{

    //Fields
    private id: number;
    private email: String;

    // Constructor
    constructor(id: number, email: String) {
        this.id = id;
        this.email = email;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getEmail(): String {
        return this.email;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }

    setNumero(email: String): void {
        this.email = email;
    }

}