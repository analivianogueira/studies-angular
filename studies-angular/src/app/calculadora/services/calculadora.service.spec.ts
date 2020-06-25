import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('01- Deve garantir que a operacao SOMA de 1 + 4 retorne 5',
      inject([CalculadoraService], (service: CalculadoraService) =>{
        let soma = service.calcular(1, 4, CalculadoraService.SOMA);
        expect(soma).toEqual(5);
    }));

    it('02- Deve garantir que a operacao SUBTRACAO de 1 - 4 retorne -3',
      inject([CalculadoraService], (service: CalculadoraService) =>{
      let sub = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(sub).toEqual(-3);
    }));

    it('03- Deve garantir que a operacao MULTIPLICACAO de 1 * 4 retorne 4',
      inject([CalculadoraService], (service: CalculadoraService) =>{
      let multi = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(multi).toEqual(4);
    }));

});

