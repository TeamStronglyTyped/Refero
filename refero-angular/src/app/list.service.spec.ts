import { TestBed, inject } from "@angular/core/testing";
import { ListService } from "./list.service";
import { Lists } from './models/lists';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs'

describe("ListService", () => {
  let listService: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ListService, HttpClientModule]
    });

    listService = TestBed.get(ListService);
  });

  describe('validList', () => {
    it('should return false because of invalid listName', () => {
      let list: Lists = new Lists;
      list.listName = null;
      list.group = 5;
      list.owner = "someUser";
      expect(listService.validList(list)).toBe(false);
    });
  });

  describe('validList', () => {
    it('should return false because of invalid group', () => {
      let list: Lists = new Lists;
      list.listName = "someList";
      list.group = null;
      list.owner = "someUser";
      expect(listService.validList(list)).toBe(false);
    });
  });

  describe('validList', () => {
    it('should return false because of invalid owner', () => {
      let list: Lists = new Lists;
      list.listName = "someList";
      list.group = 5;
      list.owner = null;
      expect(listService.validList(list)).toBe(false);
    });
  });

  describe('validList', () => {
    it('should return true because of valid list', () => {
      let list: Lists = new Lists;
      list.listName = "someList";
      list.group = 5;
      list.owner = "someOwner";
      expect(listService.validList(list)).toBe(true);
    });
  });
});

// describe('getAllLists', () =>{
//   it('should return a collection of lists', ()=>{
//     const ListResponse = [
//       {
//         listId: 2,
//         listName: "list",
//         owner: {
//           userName: "someUser",
//           passWord: "ApassWord12",
//           eamil: "something@som.com",
//           banned: "F"
//         },
//         group: {
//           groupId: 1,
//           groupName: "group"
//         }
//       },
//         {
//         listId: 3,
//         listName: "list3",
//         owner: {
//           userName: "someUser3",
//           passWord: "ApassWord12",
//           eamil: "something@som.com",
//           banned: "F"
//         },
//         group: {
//           groupId: 3,
//           groupName: "group3"
//         }
//       },
//         {
//         listId: 4,
//         listName: "list4",
//         owner: {
//           userName: "someUser",
//           passWord: "ApassWord12",
//           eamil: "something@som.com",
//           banned: "F"
//         },
//         group: {
//           groupId: 2,
//           groupName: "group4"
//         }
//       }
//     ]
//     let response;
//     spyOn(ListService,"getAllLists").and.returnValue(of(ListResponse))
//     ListService.getAllLists().subscribe(res =>{
//       response = res
//     })
//     expect(response).toEqual(ListResponse)
//   })
// })
