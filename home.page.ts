import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  kg: number=0; //peso
  km: number=0; // distancia
  preco: number = 0;
  precoKm: number=0;
  precoKg: number=0;
  precoFinal:number=0;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}
  // calcula a distancia
  Distancia() {
    if(this.km <= 50){
      this.precoKm = this.km * 0.25
    } else if(this.km >= 51){
      this.precoKm = this.km * 1.2
    }else if(this.km >= 101){
      this.precoKm = this.km * 2
    }else if(this.km >= 201){
      this.precoKm = this.km * 2.5
    }else if(this.km >= 301){
      this.precoKm = this.km * 3
    }
    else{
      this.precoKm = this.km * 3.5
    }
    }
      // calcula o peso
  Peso(){
    if(this.kg <= 10){
      this.precoKg = this.kg * 0.5
    }
    else if(this.kg >= 11){
      this.precoKg = this.kg * 1.5
    }
    else if(this.kg >= 51){
      this.precoKg = this.kg * 1.5
    }
    else if(this.kg >= 101){
      this.precoKg = this.kg * 1.5
    }
    else if(this.kg >= 111){
      this.precoKg = this.kg * 1.5
    }
    else if(this.kg >= 51){
      this.precoKg = this.kg * 1.5
    }
    else {
      this.precoKg = this.kg * 2.5
  }
}
  // calcula o preço apartir do tipo de envio
  Tipo(){
    if(this.radioSelecionada == "regular"){
      this.preco = this.precoKg + this.precoKm
    }else if(this.radioSelecionada == "exp"){
      this.preco = (this.precoKg + this.precoKm) + 50
    }else{
      this.preco = (this.precoKg + this.precoKm) + 30
    }
  }
  // calcula o desconto
  Desconto(){
    //filtra os envios regulares
    if(this.radioSelecionada == "regular"){
      if(this.km <= 200 && this.kg <= 50){
        this.precoFinal = this.preco * 0.8
      }else if(this.km > 200 && this.kg > 50){
        this.precoFinal = this.preco * 0.5
      }else if(this.km > 200 && this.kg <= 50){
        this.precoFinal = this.preco * 0.2
      } }else if(this.km <= 200 && this.kg > 50){
        this.precoFinal = this.preco * 1
      }
    //filtra os envios expresso
   else if(this.radioSelecionada == "expresso"){
    if(this.km > 200 && this.kg <= 50){
      this.precoFinal = this.preco * 2
    }
    if(this.km <= 200 && this.kg <= 50){
      this.precoFinal = this.preco * 0.8
    }else if(this.km > 200 && this.kg > 50){
      this.precoFinal = this.preco * 0.5
    }else if(this.km > 200 && this.kg <= 50){
      this.precoFinal = this.preco * 0.2
    } }else if(this.km <= 200 && this.kg > 50){
      this.precoFinal = this.preco * 1
    }
  }


    async exibirAlerta() {
      const alert = await this.alertController.create({
        header: 'Preço final '+ this.precoFinal + "R$",
        message: this.radioSelecionada,
        buttons: ['OK']
    });
    alert.present();}
  btn(){
    this.Distancia()
    this.Peso()
    this.Tipo()
    this.Desconto()
    this.exibirAlerta()
  }
}
