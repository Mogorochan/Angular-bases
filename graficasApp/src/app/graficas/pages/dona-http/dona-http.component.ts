import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  
  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ ], 
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0']
      },
      
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  
  constructor(private graficasService: GraficasService) { }

ngOnInit(): void {
  // this.graficasService.getDataDona()
  // .subscribe(resp =>{
  //  console.log(resp);
  //  const labels=Object.keys(resp)
  //  const datos=Object.values(resp)
  //  this.doughnutChartData={
  //   labels:Object.keys(resp),
  //   datasets:[{data:Object.values(resp)}]
  // }
  // })
  this.graficasService
  .getUsuariosRedesSocialesDonaData()
  .subscribe( ({labels, datasets }) => {
    this.doughnutChartData = { labels, datasets};
  })

}
}

