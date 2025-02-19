export interface Client {
    id?: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export interface Maintenance {
    id?: number;
    clientId: number;
    motorcycleId: number;
    problem: string;
    status: string;
    entryDate: Date;
    exitDate: Date;
    cost: number;
    costTotal: number;
    parts: Part[];
}

export interface Part {
    id?: number;
    name: string;
    quantity: number;
    price: number;
}


export interface Motorcycle {
    id?: number;
    clientId: number;
    brand: string;
    model: string;
    color: string;
    mileage: number;
    condition: string;
}

export interface Payment {
    id?: number;
    maintenanceId: number;
    clientId: number;
    amount: number;
    status: string;
    paymentMethod: string;
    paymentDate: string;
    transactionId: string;
}


