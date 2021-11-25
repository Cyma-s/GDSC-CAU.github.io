__NUXT_JSONP__("/application", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){return {data:[{articles:[{slug:"flutter-study-week1",description:"Flutter 스터디 1주차에 대한 내용입니다.",title:"Flutter 2.0의 null safety 이해하기",category:"Application",author:"MinJun Choi",datetime:"2021-11-23T00:00:00.000Z",toc:[{id:v,depth:3,text:w}],body:{type:"root",children:[{type:b,tag:"h3",props:{id:v},children:[{type:b,tag:e,props:{href:"#flutter-20---null-safety",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"dart",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142857202-15cddf29-cff7-44bb-9f1b-f768a713e9f3.png"},children:[]}]},{type:a,value:c},{type:b,tag:l,props:{id:"contents"},children:[{type:b,tag:e,props:{href:"#contents",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"Contents"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{id:"null-이란-무엇인가"},children:[{type:b,tag:e,props:{href:"#null-%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"Null 이란 무엇인가?"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"Null 은 왜 필요할까?"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:l,props:{id:"기존-코드의-문제점과-해결방법"},children:[{type:b,tag:e,props:{href:"#%EA%B8%B0%EC%A1%B4-%EC%BD%94%EB%93%9C%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90%EA%B3%BC-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"기존 코드의 문제점과 해결방법"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"? 의 사용법"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"late 의 사용법"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"! 의 사용법"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"required 의 사용법"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:""},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:"1-null이란-무엇인가"},children:[{type:b,tag:e,props:{href:"#1-null%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"1. Null이란 무엇인가?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"우선 null이란, 아직 값이 정해지지 않은 것을 의미합니다.\n그럼 이 null이라는 것이 왜 필요할까요?"}]},{type:a,value:c},{type:b,tag:l,props:{id:"null의-필요성"},children:[{type:b,tag:e,props:{href:"#null%EC%9D%98-%ED%95%84%EC%9A%94%EC%84%B1",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"null의 필요성"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Dart는 실제 세계를 최대한 반영한 객체 지향 언어 중 하나입니다. 예시를 하나 보시죠.\n어떤 사람에게 좋아하는 음식을 물었을 때 아래와 같이 대답했다고 가정을 해봅시다."}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"Food favorite = water;\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그 사람이 심드렁하게 \"물이요\"라고 대답을 했을 경우,\n우리는 그 사람은 좋아하는 음식이 없다고 해석이 될 수 있습니다.\n그렇다면 코드 상에서도 이 상황과 맞게 표현을 해줄 수 있어야 합니다.\n이럴 때 필요한 개념이 "},{type:b,tag:u,props:{},children:[{type:a,value:"null"}]},{type:a,value:" 입니다."}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:y}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이와 같이 표현하면 위의 상황을 만족시킬 수 있습니다.\n흔히 null은 추상적으로 오류를 일으키는 존재로서 알고 있기 쉬운데,"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"알고보면 중요한 표현 중 하나입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그럼 위의 상황에서,\nfavorite의 타입은 Food일까요?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"자세하게 표현하면, favorite은 Food type이기 전에 nullable한 타입이 됩니다.\n그럼 또 하나 예를 들어보겠습니다."}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"void whatIsYourFood(Food f){\n    String cooker = f.recipe.toString();\n    print(cooker);\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이 상황에서 입력값에 null이 들어가면 어떻게 될까요? 실행이 안됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"따라서 이를 해결하기 위해,\n코드상에서 우리는 아래와 같이 NullPointException을 처리해줘야 합니다."}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"void whatIsYourFood(Food f){\n    if (f == null){\n        print('need a food name');\n    }\n    else{\n        String cooker = f.recipe.toString();\n        print(cooker);\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"하지만 개발자의 입장에서 모든 코드에 이를 처리해주기 어렵기 때문에 등장한 개념이 바로 Null safety 입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"즉 변수들은 null값을 가질 수 없고,\n이런 null safety는 이번 업데이트와 함께 default값이 되었습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"다시 말해 아래의 코드는 컴파일단계에서 null 값의 할당을 막아 오류를 발생시킵니다."}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:"int age;\nint age = null;\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그럼 우리는 여기서 한 가지 의문점이 생겨야합니다.\n제일 먼저 예시를 들었던 것처럼 좋아하는 음식이 없을 때 우리는 어떻게 표현을 해야할까요?"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:s,props:{},children:[{type:a,value:y}]}]}]},{type:a,value:c},{type:b,tag:t,props:{id:"-1"},children:[{type:b,tag:e,props:{href:"#-1",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:"2-기존-코드의-문제점과-해결방법"},children:[{type:b,tag:e,props:{href:"#2-%EA%B8%B0%EC%A1%B4-%EC%BD%94%EB%93%9C%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90%EA%B3%BC-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"2. 기존 코드의 문제점과 해결방법"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"앞의 내용의 요약과 몇가지 추가 내용을 전제로 하겠습니다."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(1) 모든 변수는 null이 될 수 없으며, non-nullable 변수에는 null값이 할당할 수 없음\n(2) non-nullable 변수를 위한 null check가 필요 없음\n(3) Class 내의 변수는 반드시 선언과 동시에 초기화를 시켜야함"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"아래의 코드는 "},{type:b,tag:e,props:{href:"https:\u002F\u002Fdartpad.dev\u002F?null_safety=true",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"DartPad"}]},{type:a,value:" 에서 실행시킨 모습입니다."}]},{type:a,value:c},{type:b,tag:l,props:{id:"의-사용법"},children:[{type:b,tag:e,props:{href:"#%EC%9D%98-%EC%82%AC%EC%9A%A9%EB%B2%95",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"?의 사용법"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"우리는 null값이 필요한 경우 null safety 개념 하에서 어떻게 적용을 해야되는지 의문을 던지며 마무리를 했습니다. 그 상황과 더불어 변수 초기화를 나중에 해야되는 경우도 아래의 예시로 같이 설명하겠습니다. (전제 3에 해당하는 내용)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img1",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855614-9be6d3fd-31a9-440e-8201-1d8ae6d82986.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"위의 코드는 이름을 입력받아 대문자로 바꿔주는 코드입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"보면 알 수 있듯이, name이라는 변수에 아무런 입력값이 주어지지 않아 초기화가 되지 않았기 때문에 Non-nullable인 변수 name이 초기화되어야한다고 친절히 오류를 안내해주고 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이럴 때 우리는 타입 뒤에 \"?\"라는 것을 붙여서 오류를 해결해줄 수 있습니다.\n"},{type:b,tag:u,props:{},children:[{type:a,value:"?는 이 변수에 어떤 데이터가 할당될 수도, null값이 할당될 수 있다는 것을 의미합니다."}]},{type:a,value:"\nKotlin 등과 같은 경험이 있으신 분들은 이미 알고 계신 내용일 것입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img2",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855618-f7e7893a-d196-4575-b074-6c954ddca053.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그럼 2번째 줄에 대한 오류는 사라졌지만, 새로운 오류가 발생합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이는 name이라는 변수에는 null이 들어올 수도 있다고 표현을 해줘서 괜찮지만,\nnameChange 매서드의 인자값에 String이 와야한다고 했기 때문입니다.\n다시, 바로 앞에서 해결한 것처럼 똑같이 해결해줄 수 있습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img3",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855619-b0f694ea-ca91-4cd2-925b-f688606b3f40.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그럼 기존 오류는 사라지고 새로운 오류가 발생합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"toUpperCase 매서드는 name의 값이 null이 될 수 있기 때문에 호출될 수 없다고 합니다.\n이 경우는 예외처리를 통해 해결해주겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img4",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855622-272aa598-8bcd-4403-b777-268d2bce28de.png"},children:[]}]},{type:a,value:c},{type:b,tag:t,props:{id:"-2"},children:[{type:b,tag:e,props:{href:"#-2",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:"late의-사용법-전제-3에-대하여"},children:[{type:b,tag:e,props:{href:"#late%EC%9D%98-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%A0%84%EC%A0%9C-3%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"late의 사용법 (전제 3에 대하여)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"새로운 예시를 들어보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img5",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855624-68817925-b870-4214-bc82-fa043ebe4853.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Person이라는 class에서 age라는 int를 선언해주었지만, 아직 초기화를 해주지 않았습니다.\n하지만 main에서 sum이라는 메서드 안에 int를 100이라고 넣어주었습니다.\n"},{type:b,tag:u,props:{},children:[{type:a,value:"즉 앞의 예시와는 비슷해보이지만 의도가 다른 코드입니다."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이와 같이 변수에 값이 바로 할당되는 것이 아니라, 나중에 할당되어야 하는 경우,\n우리는 late라는 키워드를 변수 앞에 붙여줍니다.\n말 그대로 늦게 초기화시켜준다는 것을 의미합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img6",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855625-2495b469-aa74-4921-937d-380cac718e20.png"},children:[]}]},{type:a,value:c},{type:b,tag:t,props:{id:"-3"},children:[{type:b,tag:e,props:{href:"#-3",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:"의-사용법-1"},children:[{type:b,tag:e,props:{href:"#%EC%9D%98-%EC%82%AC%EC%9A%A9%EB%B2%95-1",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"!의 사용법"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"새로운 예시와 함께 아직 설명하지 않은 내용에 대해 설명하겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img7",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855627-dc89527f-e622-440d-810b-d606a22e64f5.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"위의 코드는 x가 0보다 크면 x값을 y에 할당을 하고,\n이를 value라는 값에 재할당하여 print하는 코드입니다.\n이 코드에서 왜 오류가 발생할까요?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이는 non-nullable한 변수에 nullable한 변수를 할당할 수 없기 때문입니다.\n이럴 경우 우리는 !를 사용해줍니다.\n"},{type:b,tag:u,props:{},children:[{type:a,value:"!는 항상 non-nullable한 값을 가진다라는 것을 의미합니다."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img8",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855630-437cd4a6-14ff-4658-abb0-9835f64d96a9.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이처럼 nullable한 변수가 non-nullable한 값을 가진다라는 확신이 있으면\n!(exclamation mark or bang)을 사용해주면 됩니다."}]},{type:a,value:c},{type:b,tag:t,props:{id:"-4"},children:[{type:b,tag:e,props:{href:"#-4",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:"required의-사용법"},children:[{type:b,tag:e,props:{href:"#required%EC%9D%98-%EC%82%AC%EC%9A%A9%EB%B2%95",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"required의 사용법"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"마지막 내용도 새로운 예시와 함께 설명하겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img9",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855632-66569afc-2f18-4d7d-9c26-8bca4e5d3f74.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"add라는 함수에서는 인자 a, b를 받아 더해주고 있지만, main함수에서는 인자 a, b에 어떤 값도 할당시켜주지 않은 상태입니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"이런 상황에서는 required라는 키워드를 함수 내 인자들 앞에 추가해주면 됩니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"required는 말 그대로 not optional하다는 얘기입니다."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그리고 main내에서 add함수에 a는 null값을, b에는 5라는 정수를 넣어보겠습니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img10",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855637-10ee89a7-af9f-47f4-9eb0-66f9a7b38154.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"위의 상황에서는 어떻게 해야할까요?"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"앞서 해결했듯이, 우선 a에 null값이 들어올 수 있다는 것을 표현하기 위해 함수 내 a의 type을 나타내는 int 뒤에 ?을 붙여줘야합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img11",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855639-de43c827-40fe-4d01-8a64-9e6844f91668.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"근데 사진과 같은 새로운 오류가 발생합니다.\n이 말은, null값으로 덧셈 연산을 해줄 수 없다는 것을 나타냅니다. 즉 우리는 변수 a에 대한 null 체크를 해줘야합니다."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"그럼 a의 값이 null인 경우에 b의 값만 return하라고 체크해주겠습니다"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:k,props:{alt:"img12",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F26942349\u002F142855661-b76a92ef-24f6-4d80-ad69-8e12b64d77cf.png"},children:[]}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fflutter-study-week1",extension:".md",createdAt:"2021-11-22T15:55:07.000Z",updatedAt:"2021-11-24T14:55:46.000Z"}]}],fetch:{},mutations:void 0}}("text","element","\n","p","a","true",-1,"span","icon","icon-link","img","h4","li","div","nuxt-content-highlight","pre","language-text","line-numbers","code","h1","strong","flutter-20---null-safety","Flutter 2.0 - Null Safety","ul","Food favorite = null;\n")));