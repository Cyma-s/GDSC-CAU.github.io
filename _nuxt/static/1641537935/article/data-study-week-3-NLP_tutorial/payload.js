__NUXT_JSONP__("/article/data-study-week-3-NLP_tutorial", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{article:{slug:"data-study-week-3-NLP_tutorial",description:"NLP에서 사용하는 라이브러리와 토큰화란 무엇인지에 대한 내용입니다.",title:"NLP 프레임워크와 토큰화",category:"Data-Science",author:E,featured:"none",toc:[{id:K,depth:r,text:L},{id:M,depth:r,text:N},{id:O,depth:r,text:P},{id:Q,depth:r,text:R},{id:S,depth:3,text:T},{id:U,depth:r,text:V}],body:{type:"root",children:[{type:b,tag:s,props:{id:K},children:[{type:b,tag:j,props:{href:"#0-%EC%84%9C%EB%A1%A0",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"앞선 학습에서 BS와 Selenium, Scrapy를 사용해 웹상에서 목표로 하는 문자정보를 추출하는 방법을 익혔습니다."},{type:b,tag:t,props:{},children:[]},{type:a,value:"\n이번에는 NLP(자연어처리)에 대해 본격적으로 들어가보려 합니다."}]},{type:a,value:e},{type:b,tag:s,props:{id:M},children:[{type:b,tag:j,props:{href:"#1-nlpnatural-language-processing%EC%9D%B4%EB%9E%80",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:N}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"자연어 처리를 NLP라고 한다. 쉽게 말해서 기계가 인간의 언어를 해석할 수 있게끔 처리하는 것을 의미합니다. 이는 NLU(Natural Language Understanding, 자연어 이해)과도 연관이 깊다. 검색엔진, QA시스템, 대화봇 등 다양한 분야에서 활용됩니다."}]},{type:a,value:e},{type:b,tag:y,props:{id:""},children:[]},{type:a,value:e},{type:b,tag:s,props:{id:O},children:[{type:b,tag:j,props:{href:"#2-%ED%86%A0%ED%81%B0%ED%99%94tokenization%EB%9E%80",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:P}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"토큰화는 텍스트 전처리 프로세스 중 하나로 텍스트를 해당 언어의 특정한 단위(예 : 단어, 특정한 문자열 등)에 맞춰 잘게 쪼개는 것을 의미합니다. 이 때 만들어진 쪼개진 문자열 하나 하나를 토큰이라고 합니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"예를 들자면 아래의 예시처럼 문장을 쪼개는 것입니다."}]},{type:a,value:e},{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"입력 : \"Time is an illusion. Lunchtime double so!\""}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"출력 : \"Time\", \"is\", \"an\", \"illustion\", \"Lunchtime\", \"double\", \"so\""}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"위 예는 단어 단위로 자른 것입니다. 문자열을 자르는 것이기 때문에 자르는 규칙이 굉장히 중요합니다. 구두점과 같은 구분 문자(delimeter)을 바탕으로 쪼갤 수도 있고, 영어의 경우는 아포스트로피(')를 분리시킬지 고려할 수 도 있습니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"이처럼 분리작업을 함과 동시에 각각의 문자열에 문법적 분류 레이블도 지정할 수도 있습니다. 이것이 중요한 이유는, 문법적 분류, 예를들어 어떤 단어가 명사인지 동사인지에 따라 사람이 이해하는 의미가 달라지기 때문입니다."},{type:b,tag:t,props:{},children:[]},{type:a,value:"\n예를 들어, fly라는 영단어는 명사로 취급할 때에는 '파리'를 의미하고, 동사로 취급할 때에는 '날다'라는 용언을 의미합니다. 이처럼 사람이 이해하는 의미가 달라지기 때문에 기계가 학습을 가능케 해주는 레이블에는 문법적 분류라는 중요한 요소가 포함되어야 합니다."}]},{type:a,value:e},{type:b,tag:y,props:{id:"-1"},children:[{type:b,tag:j,props:{href:"#-1",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]}]},{type:a,value:e},{type:b,tag:s,props:{id:Q},children:[{type:b,tag:j,props:{href:"#3-%ED%86%A0%ED%81%B0%ED%99%94-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"토큰화를 해주는 라이브러리는 영어의 경우 대표적으로 NLTK가 있습니다. 정확히는 NLTK가 토큰화만을 위한 것이 아닌 전반적인 기호, 통계, 자연어처리를 위한 범용적 프로그램의 합본으로 볼 수 있습니다. NLTK는 pip 명령어를 통해 설치할 수 있으며 성능도 영어 한정해서는 일반적인 프로젝트 진행에 전혀 무리 없을 정도로 준수하므로 영어 코퍼스를 통해 학습을 해야하는 경우에는 NLTK를 사용합니다."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fwww.nltk.org\u002Fapi\u002Fnltk.tokenize.html#module-nltk.tokenize",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"NLTK 토큰화 패키지 공식문서"}]},{type:b,tag:t,props:{},children:[]},{type:a,value:"\n다른 여러가지 기능들도 있지만 이번 주제는 토큰화이므로 토큰화 패키지의 함수 활용을 보고자 한다."}]},{type:a,value:e},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-python","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:" nltk \n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:" word_tokenize "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# 단어 토큰화 도구"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:" WordPunctTokenizer "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# 구두점 관련"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:" sent_tokenize "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# 문장 토큰화 도구"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:z}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:u}]},{type:a,value:" WhitespaceTokenizer "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# 공백문자 관련"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"#from tensorflow.keras.preprocessing.text import text_to_word_sequence : 케라스에서 자체적으로 지원하는 텍스트 전처리도구"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# 예시 문장"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# 문장 출처 : https:\u002F\u002Fedition.cnn.com\u002F2022\u002F01\u002F06\u002Fchina\u002Fxian-lockdown-zero-covid-intl-hnk\u002Findex.html"}]},{type:a,value:"\nsentence "},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"="}]},{type:a,value:" "},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:"\"\"\"The city of 13 million has been under strict lockdown since December 23, as it grapples with the country's worst coronavirus outbreak since Wuhan, the original epicenter of the pandemic. But local authorities have faced a public outcry over perceived incompetence, and disproportionately harsh measures that critics say harm the lives of those they are supposed to protect.\"\"\""}]},{type:a,value:" \n\n"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# word_tokenize"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"word_tokenize"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:X}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# wordpunct_tokenize"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"wordpunct_tokenize"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:X}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# sent_tokenize"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"sent_tokenize"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:"\"\"\"\noutput : \n[\"The city of 13 million has been under strict lockdown since December 23, as it grapples with the country's worst coronavirus outbreak since Wuhan, the original epicenter of the pandemic.\", 'But local authorities have faced a public outcry over perceived incompetence, and disproportionately harsh measures that critics say harm the lives of those they are supposed to protect.']\n\"\"\""}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"# WhitespaceTokenizer"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"builtin"]},children:[{type:a,value:"list"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:"WhitespaceTokenizer"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:"span_tokenize"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:k}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"-"}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:l}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,w,x]},children:[{type:a,value:"\"\"\"\noutput : \n[(288, 293), (294, 302), (303, 307), (308, 315), (316, 319), (320, 324), (325, 328), (329, 334), (335, 337), (338, 343), (344, 348), (349, 352), (353, 361), (362, 364), (365, 373)]\n\"\"\""}]},{type:a,value:q}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"위 예제처럼 문장단위, 단어단위, 구두점, 공백과 같은 기준을 가지고 말뭉치(corpus, 코퍼스)를 토큰화할 수 있다."}]},{type:a,value:e},{type:b,tag:y,props:{id:"-2"},children:[{type:b,tag:j,props:{href:"#-2",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]}]},{type:a,value:e},{type:b,tag:"h3",props:{id:S},children:[{type:b,tag:j,props:{href:"#%ED%95%9C%EA%B8%80%EC%9D%80",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"영어만 보면 섭하니 한글 말뭉치 토큰화 도구를 간단하게 짚고 넘어가보자."},{type:b,tag:t,props:{},children:[]},{type:a,value:"\n한글의 분석에는 형태소라는 가장 작은 단위부터 잘 알고 있어야 한다. 형태소는 크게 두가지가 있다."}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:Y,props:{},children:[{type:a,value:"자립형태소"}]},{type:a,value:e},{type:b,tag:Y,props:{},children:[{type:a,value:"의존형태소"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"형태소라는 단어가 아닌 최소단위를 가지고 있기 때문에 영어보다 어려운 난이도를 가지고 있다."},{type:b,tag:t,props:{},children:[]},{type:a,value:"\n그럼에도 한글 토큰화 도구(형태소 분석기)가 있다. KoNLPy, deeq NLP, Okt, 꼬꼬마 등 여러가지가 존재하는데 각기 장점이 다 있다. 개인적으로는 KoNLPy와 deeq NLP를 써보려고 한다."}]},{type:a,value:e},{type:b,tag:y,props:{id:"-3"},children:[{type:b,tag:j,props:{href:"#-3",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]}]},{type:a,value:e},{type:b,tag:s,props:{id:U},children:[{type:b,tag:j,props:{href:"#%EC%9D%B4%ED%9B%84-%ED%95%99%EC%8A%B5-%EB%B0%A9%ED%96%A5",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:V}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Scrapy로 웹상의 텍스트를 가져올 수 있고, 토큰화를 비롯한 전처리에 대한 학습이 일단락 되면 본격적으로 언어모델을 만들어보는 미니프로젝트를 진행해보는 것도 좋을 것 같습니다."}]}]},dir:"\u002Fblog",path:"\u002Fblog\u002Fdata-study-week-3-NLP_tutorial",extension:".md",createdAt:"2022-01-06T13:33:00.000Z",updatedAt:"2022-01-07T06:37:33.000Z"},prev:{slug:"javascript-prototype",title:"JavaScript 프로토타입"},next:null,member:[{slug:"geonwoo",name:E,description:"Interested in DL, NLP, GPU\u002FTPU\u002FNeuromorphic Hardware architecture",role:"Member",img:"geonwoo.jpg",dir:"\u002Fmembers",path:"\u002Fmembers\u002Fgeonwoo",extension:".yaml",createdAt:"2021-11-25T13:01:33.000Z",updatedAt:"2021-11-26T03:05:49.000Z"}],authorName:E}],fetch:{},mutations:void 0}}("text","element","span","token","\n","punctuation","p","keyword","comment","a","(",")","true",-1,"icon","icon-link","\n\n",2,"h2","br","import",".","triple-quoted-string","string","h1","from"," nltk","tokenize ","print","sentence","Choi Geonwoo","[",":","number","15","]","0-서론","0. 서론","1-nlpnatural-language-processing이란","1. NLP(Natural Language Processing)이란?","2-토큰화tokenization란","2. 토큰화(Tokenization)란?","3-토큰화-라이브러리","3. 토큰화 라이브러리","한글은","한글은??","이후-학습-방향","이후 학습 방향","operator","\"\"\"\noutput : \n['The', 'city', 'of', '13', 'million', 'has', 'been', 'under', 'strict', 'lockdown', 'since', 'December', '23', ',', 'as']\n\"\"\"","li")));