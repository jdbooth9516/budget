import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryService } from 'src/app/entry.service';
import { Entry } from 'src/app/Entry';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  entry!: Entry;

  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService
  ) {}

  ngOnInit(): void {
    this.getEntry();
  }

  getEntry(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.entryService.getEntry(id).subscribe((entry) => (this.entry = entry));
  }
}
