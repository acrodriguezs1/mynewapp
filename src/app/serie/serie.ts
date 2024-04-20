export class Serie {
    numero: number;
    name:string;
    channel: string;
    seasons: number;
    link: string;
   
    public constructor(numero: number, name: string,channel: string, seasons: number, link: string) {
      this.numero = numero;
      this.name = name; 
      this.channel = channel;
      this.seasons = seasons;
      this.link= link;
    }
    
   }
   