import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list.service';
import { ListItems } from '../models/listItems';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() listName: string;
  @Input() public listItems: ListItems[] = [];
  public postedListItem: ListItems = new ListItems;

  constructor(private listService: ListService) { }

  addListItem() {
    let listItem = (<HTMLInputElement>document.getElementById("addItemInput")).value;
    if (listItem != "") {
      let listItemObject: ListItems = new ListItems;
      listItemObject.listItem = listItem;
      listItemObject.status = "false";
      this.listService.getListIdByNameAndOwner(this.listName).subscribe(res => {
        let listId: number = res;
        listItemObject.list = listId;
        this.listService.postNewListItem(listItemObject).subscribe(res => {
          this.postedListItem = res;
          this.listService.updateListItems();
        });
      });
    }
  }

  ngOnInit() {
  }

}
