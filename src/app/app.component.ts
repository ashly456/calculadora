import { NodeWithI18n } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  constructor()
  {
  }

  respuesta = "";
  guardar = "";
  operador="";

  cero(cero:string){
    this.respuesta=this.respuesta+"0";
  }
  uno(uno:string){
    this.respuesta=this.respuesta+"1";
  }
  dos(dos:string){
    this.respuesta=this.respuesta+"2";
  }
  
  tres(tres:string){
    this.respuesta=this.respuesta+"3";
  }
  cuatro(cuatro:string){
    this.respuesta=this.respuesta+"4";

  }cinco(cinco:string){
    this.respuesta=this.respuesta+"5";
  }
  
  seis(seis:string){
    this.respuesta=this.respuesta+"6";
  }
  
  siete(siete:string){
    this.respuesta=this.respuesta+"7";
  }
  
  ocho(ocho:string){
    this.respuesta=this.respuesta+"8";
  }
  
  nueve(nueve:string){
    this.respuesta=this.respuesta+"9";
  }
  limp1(){
    this.respuesta="";
    this.guardar="";
  }
  limp2(){}
  ms(){}
  coma(coma:string){
    if(this.operador === ',' && this.respuesta.includes(','))return
    this.respuesta = this.respuesta.toString();
    this.guardar="";
  }
  
  suma(){
    this.guardar=this.respuesta;
    this.respuesta="";
    this.operador="suma";
  }
  
  resta(){
    this.guardar=this.respuesta;
    this.respuesta="";
    this.operador="resta";
  }
  mult(){
    this.guardar=this.respuesta;
    this.respuesta="";
    this.operador="mult";
  }
  dividir(){
    this.guardar=this.respuesta;
    this.respuesta="";
    this.operador="dividir";
  }
  porce(){
    this.guardar=this.respuesta;
    this.respuesta="";
    this.operador="porce";
  }
  igual(){
    let n1=Number(this.respuesta);
    let n2=Number(this.guardar);
  
    if(this.operador =="suma"){
      let suma = Number(n1) + Number(n2);
      this.respuesta = suma.toString();
    }else if(this.operador=="resta"){
      let suma = Number(n2) - Number(n1);
      this.respuesta = suma.toString();
    }else if(this.operador=="mult"){
      let suma = Number(n1) * Number(n2);
      this.respuesta = suma.toString();
    }else if(this.operador=="dividir"){
      let suma = Number(n2) / Number(n1);
      this.respuesta = suma.toString();
    }else if(this.operador=="porce"){
      let suma = Number(n1)*(n2/100);
      this.respuesta = suma.toString();
  }
  }
  }
  

