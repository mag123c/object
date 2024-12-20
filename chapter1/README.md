## 객체, 설계

1. 소극장 - 티켓 판매 애플리케이션 구현하기

   - `이벤트 선정 고객(무료 티켓)`과 `일반 고객(유료 티켓)`의 티켓 획득 ~ 입장 과정 시뮬레이션
   - 로버트 마틴의 소프트웨어 모듈이 가져야 하는 세 가지 기능

     1. 실행 중에 제대로 동작하는 것은 모듈의 존재의 이유이다.
     2. 간단한 작업만으로도 변경이 가능해야 한다. 변경하기 어려운 모듈은 1을 만족하더라도 개선해야 한다.
     3. 코드를 읽는 사람과 의사소통하는 것이다. 모듈은 특별한 훈련 없이도 개발자가 쉽게 읽고 이해할 수 있어야 한다. 읽는 사람과 의사소통할 수 없는 모듈은 개선해야 한다.

   - `캡슐화`를 통해 객체 내부 역할을 외부에 숨기자. -> 객체 간 자율성을 높일 수 있다. (의존성, 결합도가 낮아짐)

     - ex) Audience는 자신의 가방 안에서 초대장이 들어있는지 스스로 확인해야하며, TicketSeller는 스스로 티켓을 판매할 수 있어야 한다. 각자의 역할을 수행한다면 느슨한 결합을 통해 유지보수 가능한, 소통적인 설계가 된다.

   - 객체 설계가 어렵다면, 응집도를 높이는 것 부터 시작해보자. 응집도가 높은 객체는 것은 자기 자신의 데이터를 스스로 처리하고 관련 없는 작업은 다른 객체에 위임하는 객체를 의미한다.

   - 변경하기 쉬운 설계는 한 번에 하나의 클래스만 변경할 수 있는 설계다. 객체 내부의 데이터는 스스로 처리하도록 프로세스의 적절한 단계를 캡슐화하자. 이처럼 데이터와 프로세스가 동일한 모듈 내부에 위치하도록 프로그래밍하는 방식을 `객체지향 프로그래밍(Object-Oriented Programming`이라 한다.
