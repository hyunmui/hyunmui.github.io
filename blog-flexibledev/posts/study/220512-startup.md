---
icon: edit
date: 2022-05-11
category:
  - study
  - development
tag:
  - development
  - tip
---

# 스터디 시작

## 개발자 로드맵

- [웹 개발자 로드맵](https://github.com/Han-Kyeol/developer-roadmap-kr-)
- [iOS 개발 로드맵](https://velog.io/@willis18/IOS-%EB%A1%9C%EB%93%9C%EB%A7%B5)
- [기타 로드맵](https://roadmap.sh/)

## 시작에 앞서 생각해보기

### 개발자?

- 기존에 없던 것을 만들어 내는 사람

### 소프트웨어/프로그램?

- 소프트웨어의 특징
  - 사람이 작성하지만 실제 실행은 컴퓨터(기계) 가 실행하게 됨. 이 과정에서 번역(Compile)이 이루어짐
  - **변경**이 일어나면 다른 영역에 영향을 미치기가 매우 쉬움

### 개인의 개발 목적

- 내가 개발을 잘하려는 목적 / 방향은 무엇인가?
- 목적
  - 돈
  - 명예
  - 개인의 흥미만족
- 방향
  - 개인 솔루션 위주의 소규모 개발
  - 대규모(3인 이상) 위주의 엔터프라이즈 개발

## Enterprise App Development

### [12 factor app](https://12factor.net/ko/)

- 코드베이스
- 종속성
- 설정
- 백엔드 서비스
- 빌드/릴리즈/실행
- 개발/프로덕션 환경 일치
- 로그

### 소프트웨어 개발 형태의 변화

|                      | 과거                   | 미래                                     |
| -------------------- | ---------------------- | ---------------------------------------- |
| 소프트웨어 제공 형태 | CD/DVD 등 물리적       | 온라인                                   |
| 개발 변경 주기       | 느림                   | 빠름                                     |
| 개발 속도            | 느림                   | 빠름                                     |
| 배포 주기            | 매우 느림(개월~연단위) | 매우 빠름 (주1회 또는 더욱 많이)         |
| 소비자의 반응        | 알아내기 힘듬          | 알아내기 쉽고 조사할 수 있는 방법이 많음 |

즉 **변경이 더 빈번하고, 많이 바꾸고, 배포하고, 빨리 대응해야 함**

### 프론트엔드 & 백엔드

- 공통
  - 도메인
- 프론트엔드
  - 사용자 행위 유도에 대한 전문화
  - 화면으로 인해 백엔드의 데이터 구조에 영향을 미치는 경우
- 백엔드
  - 서비스 중심 아키텍처 (Service-Oriented Architecture)
  - MVC
  - VO (Value object) / DTO (Data Transfer Object)
  - Repository / Entity / ORM

## 개발 & 운영

### 공통

- 운영체제
- 웹서버
- App Runtime 환경

### 개발

- 준수 사항
  - 코드 작성
    - 코딩 표준 준수
      - [PSR-12](https://psr.kkame.net/accepted/psr-12-extended-coding-style-guide) (PHP), [PEP-8](https://wayhome25.github.io/python/2017/05/04/pep8/) (Python), [Java Coding Convention](https://newwisdom.tistory.com/96) 등
      - 가독성
  - 변경 쉬움
    - SOLID
      - 의존 역전 (Inversion of Control)
        - 의존성 주입 (Dependency Injection)
    - 단위 테스트 / 통합 테스트
  - 바퀴의 재발명 (Don't reinvent the wheel)
    - 외부 오픈소스 라이브러리의 적극 사용
- 언어
- 도구
  - 좋은 Tools을 써야 하는 이유
    - 자동화/추상화
    - 자동완성 (Intellisense)
    - 도구를 이해하면서 해당 언어/도구의 장점 및 개발 식견을 알게 해줌
      - 도구도 누군가가 개발한 결과물이다
  - 형상 관리 도구
    - git

### 운영

- In house (IDC)
- AWS (Cloud)
  - 고가용성
  - 확장가능
- Docker / Kubernates

### 통합

- DevOps (Development & Operations)
  - CI (지속적 통합 - Continuous Integration)
  - CD (지속적 배포 - Continuous Delivery)
  - Jenkins, Travis-CI, Teamcity 등
