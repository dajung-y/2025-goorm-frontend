class Node{
  constructor(value){
    this.value = value;
    this.left = null; // 처음 만들면 자식 노드는 없음
    this.right = null;
  }
}

let root = null;

// 자식 노드 생성 함수
function createChildNode(value,side){

  // 자식노드 container 생성
  const children = document.createElement('div');
  children.className = `children ${side==="left" ? 'left-children' : 'right-children'}`;

  const nodeEl = document.createElement('div');
  nodeEl.className = 'node';
  nodeEl.innerText = value;
  children.appendChild(nodeEl);

  return children; // 생성된 div 반환
}

function insert(){
  const inputEl = document.getElementById('input-value');
  const value = inputEl.value;
  const tree = document.getElementById('tree');

  // 예외처리
  if(!value) return alert('추가할 값을 입력하세요');

  // 루트 생성
  if(root === null){
    root = new Node(value);

    // 루트 노드가 들어갈 요소 찾기
    const nodeEl = document.createElement('div');
    nodeEl.className = 'node';
    nodeEl.innerText = root.value;
    tree.appendChild(nodeEl);
    inputEl.value = "";
    return alert('루트를 추가했습니다');
  }

  // left-children
  if(value<root.value){
    root.left = new Node(value);
    console.log('left');
    tree.appendChild(createChildNode(value, 'left'));

  } else{
    root.right = new Node(value);
    console.log('right');

    tree.appendChild(createChildNode(value,'right'));
  }
  inputEl.value ="";
}

