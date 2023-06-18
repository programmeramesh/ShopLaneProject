 //Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
  function towerOfHanoi(numDisks, source, auxiliary, destination) {
    if (numDisks === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }

    towerOfHanoi(numDisks - 1, source, destination, auxiliary);
  
    console.log(`Move disk ${numDisks} from ${source} to ${destination}`);

    towerOfHanoi(numDisks - 1, auxiliary, source, destination);
  }

  const numDisks = 3;
  const sourceTower = "A";
  const auxiliaryTower = "B";
  const destinationTower = "C";
  
  console.log(`Tower of Hanoi solution for ${numDisks} disks:`);
  towerOfHanoi(numDisks, sourceTower, auxiliaryTower, destinationTower);