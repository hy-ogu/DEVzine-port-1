module.exports = { 
    seedContributions: [
        {
            "contribution_keyword": "코딩",
            "contribution_title": "Full IM 29기 17주 회고록",
            "contribution_url": "https://medium.com/jongah-tech-blog/full-im-29%EA%B8%B0-17%EC%A3%BC-%ED%9A%8C%EA%B3%A0%EB%A1%9D-95f5e9555925",
            "contribution_content": `
                저는 포토샵, 일러스트로 사이트를 디자인할 수 있고, 웹퍼블리셔로 html, css를 사용하여 구현할 수 있었어요. 
                그런데 이번에는 CRUD(create, read, update, delete)기능과 REST API를 설계해야했어요.\n
                쉽게 말하자면, 회원가입에 글을 써서 회원가입 버튼이 누르면 실제 회원가입이 되고, 
                그 정보로 로그인이 되고, 게시글을 작성하거나 댓글을 작성하고 물건을 살 수 있고 .. 등등 실제로 웹사이트에서 작동하는 것들이 이미지적으로 뿐만 아니라 구현이 되어야해요. 
                (백엔드와 소통되어 데이터를 저장하고, 저장된 데이터를 사용할 수 있어야 해요.)\n단순 리뉴얼도 아니고 기획을 하여 새로운 사이트를 만들어야 해요. 
                저는 이전 기수분들 것을 보면서 아이디어를 내봤지만 뭐가 좋고, 나쁜 것인지 잘 구분이 안되었어요. (지금 프로젝트를 하고 나니 조금 알겠어요.)
                프로젝트가 정해지고 프로젝트를 제대로 알기위해선 와이어프레임이 먼저 제대로 나와야겠다고 생각했고, 와이어프레임을 만들었어요. 
                그리고 css할 때 헤매지 않고 전체적인 통일성을 주기 위해서 ui 디자인이 필수적이란 생각에 ui디자인 또한 뒤어어 했어요.ui 디자인을 하고, 더미데이터를 만드는데 시간이 오래 걸리는 것 같아 초반에 기능 구현을 못 했어요. 그래서 ‘ui 디자인을 하는게 맞는것일까?’라는 생각을 많이 했고 중반까지만 해도 프론트엔드 진행속도가 안 나서 너무 슬펐어요.
                예상치 못 한 오류! 시간은 째각째각
                데스크탑 백라이트가 갑자기 나가면서 코드를 칠 수 없을 정도로 화면이 어두워졌어요. 그래서 급하게 수리기사님께 연락하고 중고 모니터로 교체했어요. (내 8만 5천원…)
                아주 사소하게 axios의 정보를 담는 방법을 헤매기도 하고, 데이터 주고받는 것을 어떻게 확인해야할지 몰라 고민하기도 하고, 회원일 때와 아닐 때에 보여지는 화면이 다른 것을 어떻게 구현할지, header에 위에 어떻게 고정시킬지 등 하나하나 고민하며 코드를 입력했어요.
                갈수록 많아지는 상태들과 주석. redux를 쓰면 상태관리에 편하고 새로고침해서 안 없어지고, styled components를 쓰면 편하다는 것을 알고는 있으나 적용하기까지 익숙해지기엔 시간이 오래 걸려서 이번엔 사용을 안 했어요.
                2주의 시간 길고도 짧았다.
                매일 1시쯤에 자고 어쩔땐 4시에 자기도 하고 주말에도 안 쉬고 팀들과 소통하면서 작업을 했어도 모르는게 많아서 한 번에 잘 넘어가는게 거의 없었어요. 진짜 최대한 걱정, 피해를 안 끼치고 싶어서 열심히 했으나 조금 무리였는지 시간은 덧없이 흘려가고…ㅠㅠ 백엔드분들도 프론트엔드 작업을 서포트해주시면서 적극 도와주셨어요! 우리팀 너무 좋아ㅠㅠ
                매일 공부하고 코드 작업할 게 많았고 그래서 정말 매일이 짧게 느껴졌어요. 한편으론 매일 늦게까지 코드만 치고 있으니 이 생활이 끝나지 않을 것같아서 길게도 느껴졌어요.
                그래도 막판에 전체적으로 기능이 작동될 때! 그리고 코드를 안 치고 발표 준비를 하게 될 때! 너무 감회가 새로웠어요.
                아직 우리에겐 4주 프로젝트가 남아있다.
                2주 동안 너무 고생해서 끝난 뒤에 홀로 여행갈 수 있는 본가에 갔어요ㅎㅎ 오랜만에 긴 외출이라 너무 좋고, 부모님과 친구들을 만나서 좋았어요! 이렇게 프로젝트 걱정없이, 컴퓨터 킬 필요없이 편히 쉴 수 있다는게 너무 꿈같았죠
                주말에 푹 쉬고 와서 이 글을 정리중이고 내일부터 4주 프로젝트가 다시 시작해요. 4주 프로젝트.. 2주에 겪어봤으니 미래가 어느정도 예상 가능하네요. 주말에 푹 쉬었는데 다시 걱정이 돼요. ‘주말에 쉬지말고 ‘2주 프로젝트 분석’ 포스팅을 올렸어야 했는데..’, ‘scss나 반응형 코드, 인터렉션이나 아이디어를 더 생각했어야하는데..’ 등의 하면 좋을 것들만 생각나요.
                잘 쉬고 왔으니 일단 걱정은 넣어두고, 이번의 쉼으로 완전히 재충전하였으니 내일부터 다시 힘내서 잘할 수 있을 거예요! 4주 프로젝트 화이팅!
                `,
            "contribution_date": new Date('2021-08-02'),
            "user_email": "jonga6431@gmail.com",
            "status": 100
        },
        {
            "contribution_keyword": "코딩",
            "contribution_title": "[Database] Express/NodeJS 에서 Redis 사용하기",
            "contribution_url": "https://haeunyah.tistory.com/78",
            "contribution_content": `
                Redis 란? \nRemote Dictionary Server (DB) 이며, In-memory Data structure Store 로, 메모리 상에 데이터를 저장한다. 다양한 자료 구조를 저장하지만, 기본적으로 모든 데이터는 Key-Value 쌍을 이루기 때문에 NoSQL DB 로 활용된다. 디스크에 데이터를 저장해 속도가 느린 RDBMS 등의 DBMS 보다 활용도가 높은 케이스가 종종 있는데, 그 대표적인 예가 캐시 (Cache) 이다.\n\n클라이언트에서 서버에게 데이터를 달라는 요청을 보내면 서버는 데이터베이스에서 데이터를 얻어오게 되는데, 동일한 요청이 여러 번 올 경우 계속 데이터베이스에서 같은 데이터를 찾는다. 이는 상당히 비효율적이며, 데이터의 크기에 따라 응답 속도가 계속 지연될 수 있기 때문에 클라이언트에게 좋지 않은 사용 경험을 줄 수 있다.
                이 때, 요청 결과를 미리 저장해두었다가 동일한 데이터를 얻고자 하는 요청이 들어오면 저장한 결과를 바로 줄 수 있도록 하는 것이 "캐시" 다. 캐시는 자주 바뀌지 않지만 자주 접근되며, 사용자에게 빠르게 전달되어야 한다는 특징을 가지고 있기 때문에 SSD 등의 Storage 가 아닌 Main memory 에 저장된다. Redis 역시 서버에 캐시를 저장할 수 있도록 하는 in memory 중 하나이다. 
                3-tier 아키텍쳐에서는 기본적으로 클라이언트와 서버, 데이터베이스간의 통신이 이루어진다. 클라이언트가 서버에게 요청을 보내면 서버가 데이터베이스에서 데이터를 얻어와 클라이언트에게 응답하는 구조를 띠는데, 이 때 Redis 를 활용하면 응답 속도를 현저히 낮출 수 있다.
                Redis 는 잘 활용하면 애플리케이션의 속도와 성능을 크게 증가시키는 역할을 할 수 있다. 물론 그러기 위해 in-memory 와 disk 의 차이, RAM 데이터의 휘발성 이슈 등을 사전에 잘 알아두어야 할 것이다. 
                `,
            "contribution_date": new Date('2021-07-18'),
            "user_email": "haeun.yah@gmail.com",
            "status": 100
        },
        {
            "contribution_keyword": "코딩",
            "contribution_title": "Full IM 29기 15주 회고록",
            "contribution_url": "https://medium.com/jongah-tech-blog/full-im-29%EA%B8%B0-15%EC%A3%BC-%ED%9A%8C%EA%B3%A0%EB%A1%9D-e71e2b0e4bf",
            "contribution_content": `
                저의 전공은 산업디자인이고, 전직은 웹디자이너(운영디자인)예요. ‘디자인+코딩’에 관심이 있어 웹퍼블리셔 국비지원 학원을 다녔고 성적우수상을 받으며 행복하게 수료했어요. 하지만 취업시장에서 새로운 직군으로 이직하기엔 저의 코딩 실력이 부족했어요.
                고민 끝에 코드스테이츠에 지원했고, 통과했고, 섹션 1,2,3을 거쳐 공부했고, HA 1,2 테스트를 봤고, 어제 마지막 HA 3 테스트를 봤고, 오늘 오전 9시에 통과 메일을 받았어요. (3개월 동안 일어난 일)
                글을 본격적으로 적기 전, 짧게 자기소개부터 한 이유는 제가 ‘#멘탈관리가_중요했던_섹션3’라고 태그를 붙였던 것과 연관되어 있어요. 태그와 관련된 글은 비전공자고 멘탈관리에 어려움을 느꼈던 분이라면 공감되는 글이 많을 거예요.
                #멘탈관리가_중요했던_섹션3
                ( 이 부분은 case by case여서 공감 안 될 수 있어요. )
                프로그래밍 언어로 취급받지 못 하는 HTML, CSS를 배운 저는 스스로 순수한 비전공자로 생각했고 다른 프로그래밍 언어를 배워 지식이 있는 분들과의 차이를 매일 실감하고 ‘아무리 노력해도 안 된다.’라는 생각을 많이 했어요.
                섹션1, 2 때도 이런 생각은 있었지만 그래도 저와 공감되는 분들이 많았는데 섹션3 때는 현저히 적었고 ‘정말 코딩 잘하는 사람들만 남아있고, 공감을 나눌 수 있는 사람이 없다.’라고 느꼈어요. 집중도 안 되고, 외롭고 멘탈 관리가 안 되었어요.
                지금은 생각을 바꾸려고 노력하고 있고, 멘탈도 이전보다 강해졌어요.
                // ! 첫번째, 잘하는 전공자 & 비전공자와 나의 차이를 신경쓰지 말자.
                솔직히 차이를 안 느낄 수가 있나요? 페어로 둘이 만나고 제가 지식이 없어 매번 짐이 되는 것 같은데 그 차이를 느낄 수 밖에 없죠. 그런데 그 차이에만 신경쓰지 말고, 결과적으로 배워서 얼마나 익힐 수 있는지를 신경쓰는게 좋아요.
                글은 저렇게 쉽게 써놓아도, 쉽지 않은 일이에요. 그래도 노력해보세요. 분명 더 좋아질 거예요.
                너무 차이를 신경쓰다가 다른 분께 무례하게 대할 수도 있어요. ‘너는 당연히 잘하니깐 이런 것도 당연히 잘하겠지’ 라고 부담감을 주거나 ‘내 앞에서 어렵다는 말 하지 말아줄래?’같이 그 분의 노력을 대수롭지 않게 생각할 수 있어요.
                이건 자신만 생각하는 것이기 때문에 주의하는 게 좋아요.
                // ! 두번째, 모든 사람에겐 장점이 있고, 물론 나에게도 장점이 있다.
                코딩학원이고 앞으로 취업을 위해 코딩 잘하는게 제일 큰 장점이죠. 하지만 그것 말고도 다른 장점도 많아요. 영어를 잘하거나 해피 바이러스가 뿜뿜하거나 침착하거나 문제 파악이 빨라 해결방법도 빠르게 찾을 수 있거나 등등
                제가 디자이너였고, CSS를 배웠다는 점도 장점이 될 수 있죠. 모두에겐 장점이 있으니깐! '나에겐 아무것도 없어' 하고 우울해하지 말아요.
                코드스테이츠 다니기 전과 지금의 코딩 실력이 다른 것처럼 얼마나 시간을 쏟고, 지속적으로 공부하느냐에 따라 코딩 실력을 늘어날 거예요. 지금은 어려움을 겪더라도 꾸준히 해보세요.
                ‘실력이 잘 안 느는 것 같아..’라고 느낄 땐 섹션1 때 풀었던 코플릿 과제처럼 이전에 풀었을 때 어려웠던 문제를 풀어보세요. 그럼 확실하게 실력이 는 것을 알 수 있어요. (여기서 토이문제는 뺍시다. ㅋㅋㅋ)
                저희의 목적이 취업이기 때문에 다른 사람들과 비교되고 부족한 코딩 실력만 보일 수 있어요. 예전의 나보다 잘해야하는건 당연하고, 현재의 내가 부족해보여서 슬플 수 있어요.
                솔직히 이부분은 당장의 완벽한 해결방법은 없다고 봐요. 부정적인 생각은 갈수록 깊어져요. 그러니깐 생각을 바꿔야 해요, ‘앞으로의 나도 잘할거다’라고. 지금의 부족한 내가 계속 부족하진 않을테니깐, 꾸준히 공부하면 나에게 맞은 회사를 찾고, 좋은 동료들과 만나 시너지를 얻을 수 있을테니깐.
                지금의 노력이 헛되지 않게 나쁜 감정에만 얽매이지 말고 같이 화이팅해요! (적당히 부정적인거는 자극이 되어 도움될 수 있지만 너무 부정적이거나 나쁘면 안 좋아요.)
                #마지막_HA
                한달에 한 번 오는 HA 테스트가 드디어 어제로 끝이 났어요. HA 테스트 한 줄 평을 하자면 ‘학습했던 것보단 어렵지 않은, 반전있는 HA 테스트’
                섹션3의 학습은 백엔드 위주라 개념 이해하는 것조차 어려웠어요. 섹션1 때는 어렵다고 느껴도 운동하면서 건강은 챙겼고, 운동 못 한 섹션2 때는 어렵다고 말했어도 당일 복습으로 개념은 이해했어요. 섹션3 때는 운동도 못 하고 개념도 제대로 모르고 ㅋㅋㅋ 토이 문제는 여전히 어렵고!
                어렵다 어렵다 했지만 이번에도 저 통과했어요! 오후 2시부터 오후 6시까지 코플릿 2문제 풀고, 다음 날 통으로 과제형 문제를 푸는 것이 HA 테스트였어요. 코플릿 문제는 1시간 안 넘겼고, 과제형 문제는 4시간 안 넘겼어요. (과제형은 통과보단 실제 작동되게 하려고 하니깐 더 오래 걸렸어요.)
                섹션1, 2 회고록처럼 간단히 제가 공부한 방법을 알려드릴까 해요.
                // * 첫번째, 놓칠 수 없는 알고리즘 스터디
                섹션2때도 스터디를 했지만 목적은 없이 모각코 느낌으로 매일 했었어요. 이번에는 '알고리즘'으로 스터디의 목적이 있고 일주일에 2번 만나서 문제를 풀었어요.
                만날 때마다 어떤 알고리즘 유형을 풀지 정했고, 공통문제로 풀 1문제 선택했고 각자 개인문제 1개씩 더 풀어오기로 했어요. 스터디는 노션을 통해 내용을 정리했고, 디스코드로 서로 얘기 나눴으며, github에 푼 문제들은 push했고, 구글밋으로 만났어요.
                섹션3 시작하는 첫 주부터 많이 분들이 스터디를 만들었어요. 알고리즘 스터디가 대부분 많고 추가로 프로젝트형 스터디를 하는 분들도 있어요. 선택이 아닌 필수 느낌이라 만들어야 한다는 부담감이 있었고 어떤 분과 해야할지 몰랐던 저에게 다행히 이전 페어분께서 같이 만들어보자고 하셔서 알고리즘 스터디를 만들었어요.
                하고 싶은 분들이 꽤 많아요. 용기내서 같이 해보자고 해보세요! 혼자가 편하다면 혼자 하되, 알고리즘 문제를 꾸준하게 일주일에 한 번은 풀어보는 걸 추천해요.
                ( 저는 매일 프로그래머스 1문제씩 풀기를 했었는데요, 당일 복습도 어렵고 문제 난이도도 계속 높아져서 현재는 중단했어요. 섹션3 동안 25문제 풀었어요. )
                // * 두번째, 스프린트 복습을 넘어 HA테스트 구현하기
                HA테스트 전에 밑바닥부터 구현을 해보았어요. 완벽하게 어떤 문제로 나올지는 모르지만 client, server 파일을 만들고 인증서 만들고, 연결하고, 마이그레이션하고.. 그동안 배웠던 내용을 하나하나 적용해보았고, 잘 모르는 부분은 검색해서 배우고 채워넣었어요.
                프로젝트를 할 땐 더 어렵고, 테스트 보기 전에 구현하면 통과 확률이 더 높다고 생각해서 구현했는데 여러가지 고난을 겪어서 참.. 재밌었어요... '이정도도 제대로 못 하는데 과연 내가 프로젝트를 할 수 있을까?'걱정했지만 오랜 시간을 쏟아부어 구현되었을 때 너무 기뻤어요. 그리고 HA테스트를 빨리 파악해서 풀 수 있었어요.            
                스프린트를 참고해서 구현했으며 스프린트에는 테스트 때문에 여러가지가 추가되었지만 저는 테스트가 필요없기 때문에 필요한 것만 골라 설치하고 코드를 짰어요.
                테스트가 없기 때문에 제대로 구현되었는지 확인이 어려웠지만, Postman과 MySQL Workbench를 잘 활용해서 확인했어요. 구현하는 거.. 참 재밌습니다.. 어차피 프로젝트 때 할 거! 다들 HA테스트 전에 해보세요! 제가 겪었던 어려움!! 다들 느끼세요!!
                #프로젝트_시작
                이제 곧 프로젝트를 시작해요. 언제나 다음 단계는 겪어 본 적이 없어서 무서워요.
                ‘내가 팀원들에게 짐이 되지 않을까?’, ‘나랑 같은 팀하고 싶은 사람이… 있을까?’, ‘정말 한 번도 해본 적 없는데 어떤 프로젝트를 하면 되지?’, ‘프로젝트한 것들 보면 추가로 새로운 스킬이 많은데.. 배워야할게 너무 많은데?!’ 처럼 고민이 너무너무 많아요!
                섹션3를 시작할 때부터 HA테스트보단 프로젝트를 고민하는 분들이 많았고, 스터디도 프로젝트팀을 구성하기 위한 전초전같은 느낌이 있었죠.. 미리 마음 맞는 분들과 팀을 짜도 좋지만! 코드스테이츠를 통해 같이 할 팀이 정해지고, 새로운 분들과 만나 기획하고 협업하는 것도 좋을 거예요.
                만약 보시는 29기분들이 있다면… 29기분들 같이 열심히 해보아요! 페어로 만나지 못 하고 프로젝트로 넘어가 뵙지 못한 분들도 있어 아쉽지만 모두들 멋진 프로젝트로 만나요! 화이팅 화이팅!
                `,
            "contribution_date": new Date('2021-07-15'),
            "user_email": "jonga6431@gmail.com",
            "status": 100
        },
        {
            "contribution_keyword": "코딩",
            "contribution_title": "[Database] Redis Vs Memcached",
            "contribution_url": "https://haeunyah.tistory.com/80?category=969733",
            "contribution_content": `
                Caching Solution
                캐싱은 어플리케이션 성능 향상에 가장 많이 기여하는 단계이다. 캐시 서버 또는 in-memory cache 를 구현하기 위해 많이들 알아보는 것이 Redis 와 Memcache 인데, 이 두 가지를 비교해 보며 구현하고자 하는 서비스에 더 적합한 캐시 솔루션인지 알아보자. 
                Memcached 는 2003 년에 나온 고성능 캐싱 솔루션이다. Redis 는 비교적 최근에 나왔으며 (2009년), 여러 기능을 탑재한 캐싱 솔루션이다. AWS 에서는 이들의 공통점과 차이점을 다음과 같이 정리하고 있다.
                표로 보니 뭔가 Memcached 가 Redis 에 비해 할 줄 아는 것이 적어보이는데, 실제로도 그렇다. Memcached 는 단순한 작업을 위해 고안된 반면 Redis 는 여러 케이스까지 고려할 수 있도록 추가적인 기능이 탑재되었다. 하지만 이 둘의 기본적인 기능은 같다는 점을 유의하여야 한다. 
                Memcached & Redis : 공통점
                Memcached 와 Redis 는 모두 in-memory storage (database) 로, SSD 와 같은 Disk 보다 데이터 반환 속도가 빠르다는 장점이 있다. 다시 말하면 서버의 성능을 향상하는 것이 목적인 캐시에 최적화 되어 있다는 의미이다.  기본적으로는 NoSQL 데이터베이스로, key-value 쌍을 활용해 데이터를 저장한다. 
                Memcached & Redis : 차이점
                그렇다면 캐시 선택에 앞서 고려해야 할 중요한 차이점은 무엇이 있을까.
                1. 데이터 타입
                Memcached 는 데이터를 문자열로만 저장하는 반면, Redis 는 조금 더 다양한 자료형을 지원한다. 따라서 Memcached 를 사용할 때는 JSON.stringify 등의 메서드를 통해 데이터를 전부 변환하여 저장하고, 가져올 때도 파싱을 해야 하는 반면 Redis 를 사용할 때는 바로 원하는 데이터를 다룰 수 있다. 
                2. 데이터 지속성
                Memcached 에는 없지만 Redis 에는 특징 중 하나는 데이터 지속성 (Persistence) 이다. in-memory storage 는 원래 단기간 저장소이기 때문에 컴퓨터가 꺼지거나 프로세스가 종료되면 임시 저장되었던 데이터가 전부 삭제된다. Memcached 는 이러한 특성 때문에 데이터를 날리게 될 위험성이 높다. 
                반면 Redis 에는 AOF Log 와 RDB Snapshot 이라는 기능이 있다. 이는 각각 Append Only File 과 Redis Database Backup File 의 약어로, in-memory 에 저장된 데이터를 Disk에 백업해주는 기능이다. 이러한 기능들을 통해 Redis 는 서버에 장애가 발생해도 데이터 유실 없이 보관되었던 데이터를 복구할 수 있으며, 서버 안정성에도 크게 기여한다.
                3. 데이터 길이 
                Redis 의 key 또는 string 은 512MB 에 달하는 크기를 가질 수 있는 반면 Memcached 의 key 는 250 바이트의 크기밖에 갖지 못한다. 따라서 저장할 데이터 값이 크다면 Redis 를 이용하는데 이점이 있다.
                4. 데이터 삭제 방법
                Memcached 나 Redis 나 모두 LRU (Least Recently Used) 방법을 통해 잔여 기간이 긴 데이터를 삭제한다. 그러나 Redis 는 No Eviction (데이터를 삭제하지 않고 메모리가 차면 key 추가를 허용하지 않음) 이나 TTL (Time to Live : TTL 표기가 된 데이터를 먼저 지우고 나머지는 아직 유효한 것으로 간주함) 등의 추가적인 방법을 통해서도 데이터를 관리할 수 있다. 
                5. 레플리카
                Redis 는 자체적으로 Replica 를 형성하여 두 개의 다른 서버에서도 동일한 데이터가 보관될 수 있도록 하지만, Memcached 는 외부 소프트웨어를 사용하지 않는 이상 Replica 를 제공하지 않는다. 
                6. 클러스터
                클러스터링이란 여러 개의 인스턴스를 생성해 하나로 연결하는 작업을 의미하는데, 이를 통해 서비스의 접근 가능성을 높일 수 있다. 가령, 여러 개의 Redis node 가 하나의 클러스터로 연결된 경우, 서버 1 에서 Redis node 2 에 있는 정보에 대한 요청이 들어온다면 Redis node 1 는 바로 node 2 에 접근해 정보를 반환할 수 있다. 
                Redis 는 클러스터링을 지원하기 때문에, 이를 잘 활용한다면 서비스의 성능이 개선되는 것뿐만 아니라 확장 가능성도 높여주게 된다. 
                + 7. Multithread 
                무언가가 Multithread 란 것은 하나의 프로세스에서 여러 개의 작업을 동시에 수행할 수 있음을 의미하는데, 원래 Memcached 와 Redis 중 Memcached 만 Multithread 를 지원해 더 좋은 성능을 제공했었다. 
                그러나 Redis 버전이 업데이트 되며 버전 6부터는 Redis 에서도 Multithreading 이 지원되기 시작했다. 
                Memcached vs Redis : 무엇을 사용해야 하는가
                정답은 없다. 서두에 언급했듯 서비스를 가장 잘 알고 있는 것은 그 서비스를 개발한 사람이기 때문에, 복잡한 캐싱 기능이 필요 없다면 단순한 Memcached 를 사용하면 될 것이고, Redis 의 이점이 필요하다면 Redis 를 쓰면 될 것이다.
                그러나 알아볼수록 대부분의 사람이 Memcached 을 쓰느니 여러 설정을 할 수 있는 Redis 를 선택하는 경향을 보인다. 이번 프로젝트에서는 나도 Redis 를 활용해 캐싱을 하게 되었는데, Redis 의 이점을 최대한 누려보길 기대해본다. 
                `,
            "contribution_date": new Date('2021-08-10'),
            "user_email": "haeun.yah@gmail.com",
            "status": 100
        },
        {
            "contribution_keyword": "코딩",
            "contribution_title": "[Network] 프록시(Proxy) 란?",
            "contribution_url": "https://haeunyah.tistory.com/46?category=1002971",
            "contribution_content": `
                Proxy 서버란?
                클라이언트의 요청을 대리해서 처리해주는 서버로, 보통 보안상의 문제로 인해 직접 서버와 통신하지 못할 때 중계하는 역할을 맡는다. 실제 접근 호스트가 아닌 다른 호스트에서 접속한 것처럼 위장할 수 있어, 익명성을 보장한다.
                또한, 캐싱 기능이 있어 접속 속도를 향상시킬 수 있으며, 불필요한 외부와의 연결을 줄여 트래픽을 감소할 수 있다.
                서버의 위치에 따라 크게 Forward Proxy 와 Reverse Proxy 로 나뉘지만, 하나의 프록시에서 두 기능을 모두 수행할 수 있다.
                Forward Proxy
                클라이언트와 인터넷 사이에 위치한다.
                클라이언트 대신 서버에 요청을 보내준다.
                Reverse Proxy
                인터넷과 서버 사이에 위치한다.
                서버의 응답을 클라이언트에 대신 전달해준다.
                Load Balancing 이란?
                "분산처리" 를 의미하며 요청량이 많을 때 이를 적절히 분배하여 여러 대의 서버에 나눠서 분산처리할 수 있도록 조정하는 작업이다.
                프록시 서버를 부하 분산 장치 (Load Balancer) 로 사용할 수 있다.
                클라이언트 요청이 많은 경우 서버 한 대를 scale-up 하여 처리할 수 있는 데이터의 양을 늘리는 방법도 있지만, 한 번에 처리할 수 있는 요청의 수는 동일하다. (그리고 데이터가 많아지면 과부하가 올 수도 있다) 하지만 scale-up 대신 load balancing 을 선택할 경우 한 번에 처리할 수 있는 요청의 수가 늘어난다.
                `,
            "contribution_date": new Date('2021-06-05'),
            "user_email": "haeun.yah@gmail.com",
            "status": 100
        },
        
    ]
}