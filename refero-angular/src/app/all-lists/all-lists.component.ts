import { Component, OnInit } from "@angular/core";
import { Lists } from "../models/lists";
import { ListService } from "../list.service";

@Component({
  selector: "app-all-lists",
  templateUrl: "./all-lists.component.html",
  styleUrls: ["./all-lists.component.css"]
})
export class AllListsComponent implements OnInit {
  lists: Lists[];
  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.listService.getAllLists().subscribe(l => (this.lists = l));
  }

  deleteList(list: Lists): void {
    this.lists = this.lists.filter(list => list !== list);
    this.listService.delteList(list.listId).subscribe();
    location.reload(false);
  }
}
