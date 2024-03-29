

# 전자마왕 프로젝트

## :star:사이트 소개
    사용자가 다양한 가전제품들을 구매할 수 있고, 가전렌탈 예약 서비스를 통해 
    편안한 삶의 질을 보장받을 수 있는 웹 서비스 개발
## :date:일정
    2023. 02. 10 ~ 2023. 02. 17

## :computer:디바이스
    PC, TABLET, MOBILE 


## :lips:개발언어
- Redux, React, JavaScript, CSS3, JQuery, HTML5

<img src="https://jason-img.s3.amazonaws.com/mdoc/Redux.png" style="width:110px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/react.png" style="width:100px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/js.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/css.png" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/jquery2.jpg" style="width:56px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/html5.png" style="width:56px">
## :earth_americas:개발환경
- VScode, npm, Node.js, AWS

<img src="https://jason-img.s3.amazonaws.com/mdoc/vscode.png" style="width:90px"><img src="https://jason-img.s3.amazonaws.com/mdoc/npm2.png" style="width:60px; margin-left:3px;">
<img src="https://jason-img.s3.amazonaws.com/mdoc/nodejs.png" style="width:91px"> <img src="https://jason-img.s3.amazonaws.com/mdoc/aws.png" style="width:90px">



## :link:배포링크

- 배포방식은 AWS: S3의 배포방식을 이용하였습니다.
- [바로가기](https://jason-electronic-products-02-14.s3.amazonaws.com/index.html)


## :clipboard:프로젝트 설명


 #### 반응형 사이트 개발

1. 반응형 사이트로서 웹, 태블릿, 모바일에서 작동할 수 있는 홈페이지를 개발.
    
        가변그리드와 미디어쿼리를 사용하여 웹, 태블릿, 모바일에서 작동할 수 있는 홈페이지를 개발하였음.


#### 메인 페이지

1. JQuery 로 배너가 움직이는 슬라이드 기능을 개발.

        타이머 함수에서 setInterval과 clearInterval를 사용해서 
        마우스를 배너에 갖다대면 배너가 정지하고, 배너에서 떼면 배너가 움직이는 기능 개발.
        
2. 사용자가 카테고리별 추천 상품, 오늘만 특가, 지금 가장 뜨는 상품을 볼 수 있고, 상품을 클릭하면 상품 상세페이지로 이동하는 기능을 개발.

        Route로 상품 상세 페이지에 연결을 한 뒤에, 상품 상세 페이지에서 Redux를 사용하여 state를 불러와서 
        장바구니 추가 및 삭제가 가능하게 하였다.
        
3. 홈페이지 YOUTUBE 로 이동할 수 있는 기능 구현.

        Link 요소를 사용하여 관련 유튜브 영상으로 이동하게끔 하였다.
        
 
#### 전체상품 페이지

1.  장바구니를 담고 삭제할 수 있는 기능을 개발.

        Route로 전체상품 페이지에 연결을 한 뒤에, 전체상품 페이지에서 Redux를 사용하여 state를 불러와서 
        장바구니 추가 및 삭제가 가능하게 하였다.


#### 장바구니 페이지

1.  개별 상품을 삭제하는 기능과 전체 상품을 삭제하는 모두 비우기 기능을 개발.
    
        Redux를 사용하여 state를 불러와서 개별상품을 삭제하거나 전체 상품을 삭제할 수 있게 하였다.
2.  장바구니에 상품이 없으면 비어있음을 나타내는 안내문을 개발.
    
        && 연산자의 True, False를 이용하여 상품이 없을 때 비어있음을 나타내는 안내문이 나오게 하였다.

#### 가전렌탈 페이지

1. 사용자가 가전렌탈 예약 서비스를 신청할 수 있는 기능을 개발.

        처음에 비어있는 객체를 만들어 놓고, 예약 신청란에 정보를 입력하고 예약하기를 누르면
        입력한 정보의 내용이 예약리스트에 등록되게끔 하였다.
        
2. 사용자가 가전렌탈 예약리스트를 보고, 검색하고, 정렬 및 삭제할 수 있는 기능을 개발.

        JSON 파일에서 불러온 정보를 가져와서 가전 렌탈 예약 리스트를 만들었고,
        useState를 사용해서 검색과 정렬 기능을 개발하였으며 
        리스트 삭제 함수를 만들어서 원하는 항목을 삭제할 수 있게끔 만들었다.


## :pencil2:피드백

### 느낀점




- 가변그리드와 미디어쿼리를 이용한 반응형 사이트에 대한 숙련도를 더욱 높일 수 있어 좋았다.
    

- Redux를 쓰면서 장점으로는 상태관리에 있어 용이하다는 것과 단점으로는 작은 기능을 구현하려 해도 많은 코드의 양이 필요하다는 것을 느꼈다.


- createAsyncThunk와 createSlice를 사용하여 Redux Toolkit만으로 비동기 처리를 쉽게 진행할 수 있다는 것을 느꼈다.
