import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/Entry';
import { EntryService } from 'src/app/entry.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  entries: Entry[] = [];
  difference: number = 0;

  constructor(private entryService: EntryService) {}

  ngOnInit(): void {
    this.getEntries();
  }

  getEntries(): void {
    this.entryService
      .getEntries()
      .subscribe((entries) => (this.entries = entries));
  }
}
