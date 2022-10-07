import { Injectable } from '@nestjs/common';
import { syncBuiltinESMExports } from 'module';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBSMS(): string {
    return 'Responsabilidade Pessoal, <br>Mentalidade de Crescimento, <br>Orientação ao Futuro, <br>Persistência, <br>Comunicação, <br>Trabalho em Equipe, <br>Atenção aos Detalhes, <br>Proatividade, <br>Profissionalismo, <br>Precisão Técnica';
  }
  getObjs(): string {
    return 'Meu objetivos de aprendizagem são: <br>Aprender a usar o NetJS, <br>Ler a domumentação do NetJS ';
  }
}
