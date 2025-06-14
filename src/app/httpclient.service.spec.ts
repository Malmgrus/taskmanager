import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpclientService } from './httpclient.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpHandler } from '@angular/common/http';

describe('HttpclientService', () => {
  let service: HttpclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      imports: []
    });
    service = TestBed.inject(HttpclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
