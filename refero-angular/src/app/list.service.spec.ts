import { TestBed, inject } from "@angular/core/testing";
import { ListService } from "./list.service";
import { Lists } from './models/lists';
import { HttpClientModule } from '@angular/common/http';

describe("ListService", () => {
  let listService: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ListService]
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
