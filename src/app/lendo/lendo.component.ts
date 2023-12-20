import { Component } from '@angular/core';
import { TresPorquinhos,TesteTexto, TextTTk } from "../Historias"
import { Router } from '@angular/router';
@Component({
  selector: 'app-lendo',
  standalone: true,
  imports: [],
  templateUrl: './lendo.component.html',
  styleUrl: './lendo.component.css'
})
export class LENDOComponent {
  private PPM_Min:number=100;
  public PPM_Max:number=300;
  public PPM_Atu:number=this.PPM_Min;
  private SpeedUp:number=5;

  public KeepReading:boolean=false
  public UltimaLetra:number=0;

  private Texto:string=TresPorquinhos()
  public Plv_Atu:string="PRONTO?";
  public TextoTratado:string[]=[];

  constructor(public Route:Router){}
  ngOnInit(){
    this.TextoTratado=this.Texto.split(" ")
  }
  public ComecarLeitura= async ()=>{
    this.PPM_Atu=this.PPM_Min
    if(!this.KeepReading){
      this.KeepReading=true
      // CONTAGEM REGRESSIVA
      for(let i=3;i>0;i--){
        this.Plv_Atu=i.toString()
        await new Promise(f => setTimeout(f,1000))
      }
      // INCIAR TEXTO
      for(let i=this.UltimaLetra ;this.TextoTratado.length>i;i++){
        this.UltimaLetra=i
        this.Plv_Atu=this.TextoTratado[this.UltimaLetra]
        await new Promise(f => setTimeout(f,60000/this.PPM_Atu))
        if(this.PPM_Atu<this.PPM_Max){
          if(this.PPM_Atu+this.SpeedUp>this.PPM_Max){
            this.PPM_Atu=this.PPM_Max
          }else{
            this.PPM_Atu+=this.SpeedUp
          }
        }
        if(!this.KeepReading){
          break
        }
      }
    }
  }
  public Pausar=()=>{
    this.KeepReading=false
  }
  public Sair=()=>{
    this.Route.navigate(["/"])
  }
  public Restart=()=>{
    this.Pausar()
    this.UltimaLetra=0
    this.Plv_Atu="PRONTO?";
  }
}
