arr = [];

// n = 15;

// count = 1

n = 17;

count = 4

function create() {
  arr = [];
  for (let x = 0; x < count; x++) {
    arr.push([
      {
        x: window.innerWidth / 2 - Math.cos((Math.PI * x) / (count/2)) * 250,
        y: window.innerHeight / 2 - Math.sin((Math.PI * x) / (count/2)) * 250,
      },
      {
        x: window.innerWidth / 2 + Math.cos((Math.PI * x) / (count/2)) * 250,
        y: window.innerHeight / 2 + Math.sin((Math.PI * x) / (count/2)) * 250,
      },
    ]);
    for (j = 0; j < n; j++) {
      let direction = true;
      let temparr = [];
      for (i = 0; i < arr[x].length - 1; i++) {
        temparr.push(arr[x][i]);
        let center = {
          x: (arr[x][i].x + arr[x][i + 1].x) / 2,
          y: (arr[x][i].y + arr[x][i + 1].y) / 2,
        };
        let angle = Math.atan2(center.y - arr[x][i].y, center.x - arr[x][i].x);
        let distance = Math.sqrt(
          Math.pow(center.x - arr[x][i].x, 2) +
            Math.pow(center.y - arr[x][i].y, 2)
        );
        if (direction === true) {
          addition = Math.PI / 2;
          direction = false;
        } else {
          addition = -Math.PI / 2;
          direction = true;
        }
        temparr.push({
          x: center.x + Math.cos(angle + addition) * distance,
          y: center.y + Math.sin(angle + addition) * distance,
        });
      }
      temparr.push(arr[x][arr[x].length - 1]);
      arr[x] = temparr;
    }
  }
}

create();

function draw() {
  context.fillStyle = "black";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  for (let x = 0; x < count; x++) {
    context.strokeStyle = `rgb(${255 - (255 / count) * x},50,${(255 / count) * x})`;
    for (let i = 0; i < arr[x].length - 1; i++) {
      drawLine(arr[x][i].x, arr[x][i].y, arr[x][i + 1].x, arr[x][i + 1].y);
    }
  }
}

function update() {
  if (isKeyPressed[32]) {
    // if (n < 15.9) {
    //   n += 0.05;
    // } else {
    //   n = 1;
    // }
    if (count < 10) {
      count += 0.05;
      n-=0.05
    } else {
      count = 1;
      n = 15;
    }
    create();
  }
}
