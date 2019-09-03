import { Component, OnInit } from '@angular/core';
/*import { AppSettingsService } from 'app/app.module';
import { ClrLoadingState } from '@clr/angular'; 
import data = require('./diff.json'); 
import * as diff from './diff.json'; */
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ClrDatagridFilterInterface, ClrDatagridFilter } from "@clr/angular";
import { ClrDatagridSortOrder } from '@clr/angular';
import { ClrDatagridComparatorInterface } from "@clr/angular";
import { Collection } from 'ngx-pagination/dist/paginate.pipe';
import { Input } from '@angular/core';
import { SortOrder } from '@clr/angular';
import { BindingFlags } from '@angular/compiler/src/core';

/*this.preSorted = SortOrder.Asc;
this.descSort = ClrDatagridSortOrder.DESC;*/

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public diff_files = [];
  public preSorted: SortOrder;
  total = 0
  currentPage = 1;
  collection = [];
  p: number = 1;
  regex: string;
  public descSort: ClrDatagridSortOrder;

  public version_cb = [];
  total_versions = 4;
  ver_dict = { 0:"v67ga",
               1:"v67u1",
               2:"v67u2" 
             }

  ref_count = 0;

  /*descSort = ClrDatagridSortOrder.DESC;*/
  constructor() {
    this.preSorted = SortOrder.Asc;
    this.descSort = ClrDatagridSortOrder.DESC;
    for (let i = 0; i < this.total_versions; i++) {
      this.version_cb[i] = 0;
    }
  }
  public line_change_Comparator = new LineChange_Comparator();

  ngOnInit() {
  }


  onclk() {
    var diff: any;
    /*
    //Drop-down methods for version selection
    var fradios: any = []
    var tradios: any = []
    var from_version: string;
    var to_version: string;
    

    fradios = document.getElementsByName('from_options');
    for (let i = 0; i < fradios.length; i++) {
      if (fradios[i].checked) {
        from_version = fradios[i].value;
      }
    }

    tradios = document.getElementsByName('to_options');
    for (let i = 0; i < tradios.length; i++) {
      if (tradios[i].checked) {
        to_version = tradios[i].value;
      }
    }

    if (from_version == to_version) {
      alert("Same Versions");
      window.location.reload();
      return;
    }
    else {
      diff = getDiff(from_version, to_version);
    }
    */
    
    var file_name: string = "";
    for(var i =0; i < this.total_versions; i++){
        if(this.version_cb[i]){
          file_name += this.ver_dict[i]+'-';
        }
    }
    if(this.ref_count != 2) {
      alert("please select 2 vSphere versions")
      return; 
    }
    console.log(file_name.slice(0,-1));
    /*diff = getDiff(file_name.slice(0,-1))*/
    diff = {
      "diff_files":[
   
            {  "filename": "x",
               "lines_changed":"10",
               "change_intensity": "-"
            },
            {  "filename": "a",
               "lines_changed":"18",
               "change_intensity": "+-"
            },
            {  "filename": "b",
               "lines_changed":"12",
               "change_intensity": "+"
            }
          ]
     }

    this.collection = [];
    this.diff_files = diff.diff_files;
    this.total = this.diff_files.length;
    var re: string = this.regex;
    var patt = new RegExp(re);

    for (let i = 0; i < this.diff_files.length; i++) {
      var fi = this.diff_files[i].filename;
      var res = patt.exec(fi);
      if (res) {
        let Obj = { "filename": this.diff_files[i].filename, "lines_changed": this.diff_files[i].lines_changed, "change_intensity": this.diff_files[i].change_intensity, }
        this.collection.push(Obj);
      }
    }

  }

  onkey(event: any) {
    this.regex = event.target.value;
  }


  valid_cb(e:any) {
    var latest_event = Number(e.target.id);
    //Update the event values in the dictionary
    if (e.target.checked) {
      this.version_cb[latest_event] = 1;
      this.ref_count += 1;
    }
    else {
      this.version_cb[latest_event] = 0;
      this.ref_count -= 1;
    }
    if (this.ref_count > 1) {
      if (latest_event == 0) {
        if (this.ref_count > 2 || this.version_cb[1] != 1) { this.update_checkbox(latest_event) }
      }
      else if (latest_event == this.total_versions - 1) {
        if (this.ref_count > 2 || this.version_cb[latest_event - 1] != 1) { this.update_checkbox(latest_event) }
      }
      else {
        if ((this.version_cb[latest_event - 1] == 1 && this.version_cb[latest_event + 1] == 1) ||
          (this.version_cb[latest_event - 1] == 0 && this.version_cb[latest_event + 1] == 0) ||
          (this.ref_count > 2)) { this.update_checkbox(latest_event) }
      }
    }

  }
  update_checkbox(key: number) {
    for (let i = 0; i < this.total_versions; i++) {
      if (i != key) {
        if (this.version_cb[i]) this.ref_count -= 1;
        this.version_cb[i] = 0;
        var a: string = i.toString();
        const ele = document.getElementById(a) as HTMLInputElement;
        ele.checked = false;
       // document.getElementById(a).checked = false;
      }
    }
  }
}

    


function getDiff(version_diff: string) {
  var diff_filename = version_diff + ".json";
  return require('./' + diff_filename);
}



class LineChange_Comparator implements ClrDatagridComparatorInterface<any> {
  compare(a: any, b: any) {
    return a.lines_changed - b.lines_changed;
  }
}


/*
export class ButtonLoadingDemo {
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  validateDemo() {
    this.validateBtnState = ClrLoadingState.LOADING;
    //Validating Logic
    this.validateBtnState = ClrLoadingState.SUCCESS;
  }
}
*/


