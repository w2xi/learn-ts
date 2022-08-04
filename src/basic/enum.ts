// 枚举

// 自增 (默认从 0 开始)
enum Direction {
  LEFT,
  RIGHT,
  FRONT,
  BACK,
}

// or
// enum Direction {
//   LEFT = 'LEFT',
//   RIGHT = 'RIGHT',
//   FRONT = 'FRONT',
//   BACK = 'BACK',
// }

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('turn left')
      break;
    case Direction.RIGHT:
      console.log('turn right')
      break;
    default:
      // const f: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT);