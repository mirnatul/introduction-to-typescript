let subs: number | string = '100K';

let apiRequestStatus: 'pending' | 'success' | 'failed' = 'pending';
apiRequestStatus = 'success';

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';


const orders = ["12", "20", "30", "42"];

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === "20") {
        currentOrder = order;
        break;
    }
}

console.log(currentOrder);