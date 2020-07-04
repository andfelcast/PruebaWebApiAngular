import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/classes/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detalle-doctor',
  templateUrl: './detalle-doctor.component.html',
  styleUrls: ['./detalle-doctor.component.css']
})
export class DetalleDoctorComponent implements OnInit {

  id: string;
  doctor: Doctor = new Doctor();
  
  constructor(private doctorService: DoctorService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.ObtenerInfo(this.id);            
    });
    
  }

  ObtenerInfo(id:string){
    this.doctorService.ObtenerDetalle(id).subscribe((data:Doctor) => {
      this.doctor = data      
    });
    
  }

  Volver(){
    this.router.navigate(['/Doctores']);
  }

}
