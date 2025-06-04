/*
스택을 이용한 게시판 구현

- 새로운 게시글은 항상 위에

게시판에 들어갈 내용은 id, title, content, timestamp(시간)

1. 스택 관리할 배열 선언

2. HTML요소 찾기

3. 글 올리기 함수 작성
  - 버튼을 클릭하면 input에 있는 제목과 내용 가져옴
  - Date 이용해서 작성 시간
  - id 추가

4. 글 올리고 html화면에 그리기

*/

const createBtn = document.querySelector('#create-btn');
const deleteBtn = document.querySelector('#delete-btn');


// 이벤트 리스너

createBtn.addEventListener('click', createPost);
deleteBtn.addEventListener('click', deletePost);


// 게시글 들어갈 배열
let postList = [];
console.log(postList.length);

// 게시글 작성 함수
function createPost(){
  const titleInput = document.querySelector('#title-input');
  const contentInput = document.querySelector('#content-input');

  // 예외처리
  if(titleInput.value !=="" && contentInput.value !==""){
    // 게시글 객체 생성
    const post = {
      id: postList.length +1,
      title: titleInput.value,
      content: contentInput.value,
      createDate: new Date().toLocaleString(),
    }
    // 게시글 작성
    postList.push(post);
    renderPost();

    
    setTimeout(()=>{
      alert(`${post.id}번째 게시글이 작성되었습니다.`);
    },0);
    titleInput.value = "";
    contentInput.value = "";
  } else{
    alert('게시글 제목과 내용을 입력하세요.');
  }
  // 작성된 것 확인
  console.log(postList);
}

// 게시글 렌더링하는 함수
function renderPost(){
  const postContainer = document.querySelector('.post__container');
  postContainer.innerHTML ="";
  // 게시글 없을 때
  if(postList.length === 0){
    postContainer.innerHTML = `
      <p class="no__post" id="no-post">등록된 글이 없습니다</p>
    `;
  } else{
    [...postList].forEach(post => {
      const postItem = document.createElement('div');
      postItem.className = 'post__item';
      postItem.innerHTML = `
        <p class="post__date">${post.createDate}</p>
        <p class="post__title">${post.title}</p>
        <p class="post__content">${post.content}</p>
      `;
      postContainer.prepend(postItem);
    });
  }
}

// 게시글 삭제 함수
function deletePost(){
  // 예외처리
  if(postList.length === 0){
    alert('등록된 게시글이 없습니다.');
  } else{
    const removed = postList.pop();
    renderPost();
    setTimeout(()=>{
      alert(`${removed.id}번째 게시물이 삭제되었습니다.`);
    },0);
  }
}