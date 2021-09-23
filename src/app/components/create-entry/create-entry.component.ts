import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Entry } from 'src/app/Entry';
import { NavigationExtras } from '@angular/router';
import { EntryService } from 'src/app/entry.service';
import { OverviewComponent } from '../overview/overview.component';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.scss'],
})
export class CreateEntryComponent implements OnInit {
  constructor(
    private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router,
    private overview: OverviewComponent
  ) {}
  name!: string;
  catagory!: string;
  payee!: string;
  owed!: number;
  paymentDay!: number;
  payed!: number;
  interval!: string;

  ngOnInit(): void {}

  onSubmit() {
    const newEntry = {
      name: this.name,
      catagory: this.catagory,
      payee: this.payee,
      owed: this.owed,
      paymentDay: this.paymentDay,
      payed: this.payed,
      interval: this.interval,
    };
    this.entryService.createEntry(newEntry).subscribe();
    
    setTimeout(() => {
      this.router.navigate([''], { relativeTo: this.route }),
        this.overview.getEntries();
    }, 1000);
  }
}
