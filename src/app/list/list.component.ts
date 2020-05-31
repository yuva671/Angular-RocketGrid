import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import * as $ from 'jquery';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  isShowDivIf=true;
  constructor() {
    this.sortedData = this.ELEMENT_DATA.slice();
   }


  //  Table Data
  ELEMENT_DATA= [
    {date: '1/6/2019', region: 'East', rep: 'Jones', item: 'Pencil',units:95,unitCost:1.99,total:189.05},
    {date: '2/6/2019', region: 'West', rep: 'Kivel', item: 'Binder',units:50,unitCost:2,total:100},
    {date: '3/6/2019', region: 'Central', rep: 'John', item: 'Pencil',units:36,unitCost:1.99,total:71.64},
    {date: '4/6/2019', region: 'West', rep: 'Kivel', item: 'Binder',units:27,unitCost:2,total:54},
    {date: '5/6/2019', region: 'East', rep: 'Jones', item: 'Pen',units:60,unitCost:3,total:180},
    {date: '6/6/2019', region: 'Central', rep: 'Andrews', item: 'Pencil',units:90,unitCost:1.99,total:179.1},
    {date: '7/6/2019', region: 'East', rep: 'Jones', item: 'Pencil',units:73,unitCost:1.99,total:145.27},
    {date: '8/6/2019', region: 'West', rep: 'Kivel', item: 'Binder',units:54,unitCost:2,total:108},
    {date: '9/6/2019', region: 'West', rep: 'Kivel', item: 'Pen',units:85,unitCost:3,total:255},
    {date: '10/6/2019', region: 'West', rep: 'Kivel', item: 'Pen',units:75,unitCost:3,total:225},
    {date: '11/6/2019', region: 'East', rep: 'Jones', item: 'Binder',units:45,unitCost:2,total:90},
    {date: '12/6/2019', region: 'East', rep: 'Jones', item: 'Pen',units:58,unitCost:3,total:174},
    {date: '13/6/2019', region: 'West', rep: 'Kivel', item: 'Binder',units:63,unitCost:2,total:126},
    {date: '14/6/2019', region: 'East', rep: 'Jones', item: 'Pencil',units:95,unitCost:1.99,total:189.05},
    {date: '15/6/2019', region: 'West', rep: 'Kivel', item: 'Binder',units:45,unitCost:2,total:90},
    {date: '16/6/2019', region: 'Central', rep: 'Andrews', item: 'Pencil',units:95,unitCost:1.99,total:189.05},
    {date: '17/6/2019', region: 'East', rep: 'Jones', item: 'Binder',units:75,unitCost:2,total:150},
    {date: '18/6/2019', region: 'West', rep: 'Kivel', item: 'Binder',units:95,unitCost:2,total:190},
    {date: '19/6/2019', region: 'East', rep: 'Jones', item: 'Pen',units:95,unitCost:3,total:285},
    {date: '20/6/2019', region: 'East', rep: 'Jones', item: 'Pencil',units:95,unitCost:1.99,total:189.05},
    {date: '21/6/2019', region: 'Central', rep: 'Andrews', item: 'Binder',units:82,unitCost:2,total:164},
    {date: '22/6/2019', region: 'East', rep: 'Jones', item: 'Binder',units:56,unitCost:2,total:112},
    {date: '23/6/2019', region: 'East', rep: 'Jones', item: 'Pen',units:78,unitCost:3,total:234},
    {date: '24/6/2019', region: 'East', rep: 'Jones', item: 'Binder',units:79,unitCost:2,total:158},
    {date: '25/6/2019', region: 'West', rep: 'Kivel', item: 'Pencil',units:58,unitCost:1.99,total:115.42},
  ];

  sortedData;

  // Function that sorts the table
  sortData(sort: Sort) {
    const data = this.ELEMENT_DATA.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date': return this.compare(a.date, b.date, isAsc);
        case 'region': return this.compare(a.region, b.region, isAsc);
        case 'rep': return this.compare(a.rep, b.rep, isAsc);
        case 'item': return this.compare(a.item, b.item, isAsc);
        case 'units': return this.compare(a.units, b.units, isAsc);
        case 'unitCost': return this.compare(a.unitCost, b.unitCost, isAsc);
        case 'total': return this.compare(a.total, b.total, isAsc);
        default: return 0;
      }
    });
  }


 compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


// Function that toggles the table based on button click

TogglefilterTable(){
  
  this.isShowDivIf=!this.isShowDivIf
  if(this.isShowDivIf===false){
    $('#flex').css('width','70%');
  }
  else{
    $('#flex').css('width','100%')
  }
}

// Function for filtering data from the table
array=[];
showOptions(event,data): void {
  if(event.checked===true){
    if(this.array.length===0){
  this.array=this.sortedData.filter((element)=>{return element.item===data})
  this.sortedData=this.array;
  console.log(this.sortedData);
    }
    else{
      this.sortedData=this.array.filter((element)=>{return element.region===data})
      console.log(this.array);
    }
  }
  else{
    this.sortedData=this.ELEMENT_DATA;
  }
 
}
  ngOnInit() {
  }

}

