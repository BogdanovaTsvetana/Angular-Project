import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { NanniesService } from '../nannies.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-create-nanny',
  templateUrl: './create-nanny.component.html',
  styleUrls: ['./create-nanny.component.css']
})
export class CreateNannyComponent implements OnInit {

  //@Input() pattern: string | RegExp = undefined;
  //pattern="[^https?:\/\/]"  // TODO

  constructor(private router: Router, private nanniesService: NanniesService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  submitNannyRegister(nannyRegister: NgForm): void {
    console.log(nannyRegister.value);

    // this.authService.register$(userData).subscribe(() => {
    //   this.router.navigate(['nannies'])
    // });  

    this.nanniesService.becomeNanny$(nannyRegister.value).subscribe({
      next: (nanny) => {
        console.log(nanny);
        //  this.authService.currentUser.type='nanny';  // TODO
        this.router.navigate(['/nannies']);
      },
      error: (error) => {
        console.error(error);
      }
    })

  }

  

}
