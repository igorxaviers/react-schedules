export default class InternalError extends Error{
    constructor(message){
        super(message);
        this.name = 'InternalError';
        this.message = message;
        this.status = 500;
    }
}