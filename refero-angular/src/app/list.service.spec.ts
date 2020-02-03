import { TestBed, inject } from "@angular/core/testing";

import { ListService } from "./list.service";

describe("ListService", () => {
  let listService: ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService]
    });

    listService = TestBed.get(ListService);
  });
});
