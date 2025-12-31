// defines the shape of ChaiOrder (type alias)
type ChaiOrder = {
    type: string;
    sugar: number;
}

// type guard function to check something
// if it returns true, TS knows obj is ChaiOrder
function isChaiOrder(obj: any): obj is ChaiOrder {
    // checks the data step by step and return a boolean
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    );
}

function serveOrder(item: ChaiOrder | string) {
    // type guard usage, if the condition passes TS knows item is ChaiOrder
    if (isChaiOrder(item)) {
        // item is ChaiOrder here, totally safe to access its properties
        console.log(`Serving a ${item.type} chai with ${item.sugar} sugar.`);
    }
    return `serving custom order: ${item}`;
}


// -------------

// type aliases for different chai types
type MasalaChai = { type: 'masala', spiceLevel: number };
type GingerChai = { type: 'ginger', amount: number };
type ElaichiChai = { type: 'elaichi', aroma: number };

// a chai can become any type of the above
type Chai = MasalaChai | GingerChai | ElaichiChai;

function prepareChai(order: Chai): string {
    // type narrowing by common key
    switch (order.type) {
        case 'masala':
            return `Preparing masala chai with spice level ${order.spiceLevel}.`;
        case 'ginger':
            return `Preparing ginger chai with amount ${order.amount}.`;
        case 'elaichi':
            return `Preparing elaichi chai with aroma ${order.aroma}.`;
        default:
            return 'Unknown chai type.';
    }
}

function brew(order: MasalaChai | GingerChai) {
    if ("spiceLevel" in order) {
        console.log(`Brewing masala chai with spice level ${order.spiceLevel}.`);
    }
}

function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}
