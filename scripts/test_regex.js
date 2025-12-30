
function estimarValor(plano) {
    if (!plano) return 0;
    
    let match = plano.match(/R\$\s*([\d.,]+)/i);
    if (!match) {
      match = plano.match(/([\d.,]+)/);
    }
    
    if (!match) return 0;
    
    let valorStr = match[1];
    valorStr = valorStr.replace(/[.,]+$/, '');

    if (valorStr.includes(',') && valorStr.includes('.')) {
        if (valorStr.lastIndexOf(',') > valorStr.lastIndexOf('.')) {
             valorStr = valorStr.replace(/\./g, '').replace(',', '.');
        } else {
             valorStr = valorStr.replace(/,/g, '');
        }
    } else if (valorStr.includes(',')) {
        valorStr = valorStr.replace(',', '.');
    } else if (valorStr.includes('.')) {
        const parts = valorStr.split('.');
        if (parts.length > 2 || (parts.length === 2 && parts[1].length === 3)) {
             valorStr = valorStr.replace(/\./g, '');
        }
    }

    const valor = parseFloat(valorStr);
    return isNaN(valor) ? 0 : valor;
}

const planos = [
    "200 mega - R$ 60.00",
    "Internet 200 megas - R$ 59.99",
    "Plano Básico R$ 100,00",
    "R$60.00",
    "60.00"
];

planos.forEach(p => {
    console.log(`"${p}" => ${estimarValor(p)}`);
});
