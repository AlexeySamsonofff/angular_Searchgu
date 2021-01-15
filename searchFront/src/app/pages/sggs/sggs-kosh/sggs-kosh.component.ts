import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sggs-kosh',
  templateUrl: './sggs-kosh.component.html',
  styleUrls: ['./sggs-kosh.component.scss']
})
export class SggsKoshComponent implements OnInit {
  public word: string
  constructor(private route: Router, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(p=>{
      if(p) {
        this.word = p.word;
        localStorage.setItem('sggs_kosh_keyword', this.word);
        this.route.navigate(['/sggs-kosh/view']);
      }
    })
  }
}
