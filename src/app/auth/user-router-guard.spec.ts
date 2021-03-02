import { UserRouterGuard } from './user-router-guard';
import { TestBed } from '@angular/core/testing';



describe('UserRouterGuard', () => {
  let guard: UserRouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserRouterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});