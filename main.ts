function minPlanesToReachLastAirport(fuels: number[]): number {
  const N = fuels.length;
  if (N === 0) {
    return -1;
  }
  if (N === 1) {
    return 0; // Already at the last airport
  }

  let planesHired = 0;
  let currentMaxReach = 0;
  let nextMaxReach = 0;

  for (let i = 0; i < N; i++) {
    // Update the furthest we can reach with the current plane
    nextMaxReach = Math.max(nextMaxReach, i + fuels[i]);

    // If we have reached or exceeded the last airport, return the count
    if (nextMaxReach >= N - 1) {
      return planesHired + 1;
    }

    // If we have reached the end of our current plane's fuel, hire a new plane
    if (i === currentMaxReach) {
      planesHired += 1;
      currentMaxReach = nextMaxReach;

      // If currentMaxReach has not advanced, return -1
      if (currentMaxReach === i) {
        return -1;
      }
    }
  }

  return -1;
}

// Test cases
console.log(minPlanesToReachLastAirport([2, 1, 2, 3, 1])); // Output: 2
console.log(minPlanesToReachLastAirport([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: 3
