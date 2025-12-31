function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        // auto string
        return `Making ${kind} chai...`
    }
    // auto number
    return `chai order: ${kind}`
}

// msg can be passed or not
function serveChai(msg?: string) {
    if (msg) {
        return `Serving chai: ${msg}`
    }
    return 'Serving plain chai'
}

function orderChai(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return 'Ordering small chai'
    }
    if (size === 'medium' || size === 'large') {
        return 'Make extra chai'
    }
    // must be number
    return `Ordering chai number: ${size}`
}


class KulhadChai {
    serve() {
        return 'Serving chai in kulhad'
    }
}
class CuttingChai {
    serve() {
        return 'Serving cutting chai'
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        // must be KulhadChai
        return chai.serve()
    }
    // must be CuttingChai
    return chai.serve()
}