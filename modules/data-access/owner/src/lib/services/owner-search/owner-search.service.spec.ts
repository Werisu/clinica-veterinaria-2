import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockOwners } from '../../mocks/owner.mock';
import { Proprietario } from '../../models/owner.model';
import { OwnerSearchService } from './owner-search.service';

describe('OwnerSearchService', () => {
  let service: OwnerSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OwnerSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return models correctly', () => {
    // arrange
    const mockName = 'Werius';
    const url = `${service.apiUrl}/proprietario/?nome=${mockName}`;
    let result: Proprietario[] = [];

    // act
    service.searchByName(mockName).subscribe((owner) => (result = owner));

    // assert
    const request = httpMock.expectOne(url);
    request.flush(mockOwners);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockOwners);
  });
});
