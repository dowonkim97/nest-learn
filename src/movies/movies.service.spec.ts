import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });
  // 깨끗하게 정리해주는 함수 afterAll();
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      // 배열 인스턴스인지 테스트
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID 999 not found.`);
      }
    });
  });
  // 생성했을 경우
  describe('create', () => {
    // 개수, title 등의 테스트를 만들 수 있다.
    it('should create movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const afterCreate = service.getAll().length;
      console.log(beforeCreate, afterCreate);
      //toBeGreaterThan 큰 숫자 여부 확인, 이후 숫자가 이전보다 클 것이라고 예상
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  // 삭제했을 경우
  describe('deleteOne', () => {
    it('delete movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      // 1개 생성
      const beforeDelete = service.getAll().length;
      // 1개 삭제
      service.deleteOne(1);
      // 몇 개가 남았는지 개수 세기
      const afterDelete = service.getAll().length;
      // toBeLessThan 작은 숫자 여부 확인, 이후(afterDelete.length)가 이전(beforeDelete.length)보다 적을 것이라고 예상
      expect(afterDelete).toBeLessThan(beforeDelete);
    });
    it('should return 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID 999 not found.`);
      }
    });
  });
  // 업데이트 했을 경우
  describe('update', () => {
    it('should update movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      // 업데이트 호출
      service.update(1, { title: 'Updated Test' });
      // getOne을 id 1으로 지정
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Updated Test');
    });
    it('should throw NotFoundException', () => {
      try {
        service.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID 999 not found.`);
      }
    });
  });
});
