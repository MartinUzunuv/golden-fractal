arr = [];

n = 1

function create() {
  arr = [
    { x: window.innerWidth / 2, y: (window.innerHeight / 10) * 2.5 },
    { x: window.innerWidth / 2, y: (window.innerHeight / 10) * 8.5 },
  ];
  for (j = 0; j < n; j++) {
    let direction = true;
    let temparr = [];
    for (i = 0; i < arr.length - 1; i++) {
      temparr.push(arr[i]);
      let center = {
        x: (arr[i].x + arr[i + 1].x) / 2,
        y: (arr[i].y + arr[i + 1].y) / 2,
      };
      let angle = Math.atan2(center.y - arr[i].y, center.x - arr[i].x);
      let distance = Math.sqrt(
        Math.pow(center.x - arr[i].x, 2) + Math.pow(center.y - arr[i].y, 2)
      );
      if(direction === true){
        addition = Math.PI/2
        direction = false
      }else{
        addition = -Math.PI/2
        direction =true
      }
      temparr.push({
        x: center.x + Math.cos(angle + addition) * distance,
        y: center.y + Math.sin(angle + addition) * distance,
      });
    }
    temparr.push(arr[arr.length - 1]);
    arr = temparr;
  }
}

create();

function draw() {
  for (let i = 0; i < arr.length - 1; i++) {
    drawLine(arr[i].x, arr[i].y, arr[i + 1].x, arr[i + 1].y);
  }
}

function update() {
  if(isKeyPressed[32]){
    if(n < 16.9){
      n+=0.05;
    }else{
      n = 1
    }
    create();
  }
}
