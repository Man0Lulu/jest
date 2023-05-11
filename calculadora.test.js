const calculo = require('./calculadora')

describe('funções matematicas', ()=>{
    test('soma de dois numeros', ()=>{
        expect(calculo.soma(1,2)).toBe(3)
    })
})