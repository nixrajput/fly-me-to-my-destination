# fly-me-to-my-destination

## Problem Statement

Consider there are **N** airports in the world, each airport has a plane available with limited units of fuel available to fly.

You are initially positioned at airport **number one** and you have to reach the last airport (**N**) by hiring a **minimum** number of planes. You'd need 1 unit of fuel to fly to the nearest airport from any airport.

You will be given an array of N numbers each representing the units of fuel available in the plane at that particular airport. Print the number of planes you'd need to hire to reach the last airport. If it is not possible to reach the last airport, return -1

Example:

Array = [2,1,2,3,1]

In the given array, there are 5 airports, the plane at the starting airport has 2 units of fuel so you can hire this plane and stop at the 2nd or 3rd airport. The plane at the 2nd airport has 1 unit of fuel so it can fly to the 3rd airport only. The minimum number of planes required in this case is two 2 → 2→ 1.

Example 2:

Array = [1,6,3,4,5,0,0,0,6]

In the given array, there are 9 airports, the plane at the starting airport has 1 unit of fuel, so you can hire this plane and stop at the 2nd airport only. The plane at the 2nd airport has 6 units of fuel, so it can fly to the 3rd, 4th, 5th, 6th, 7th, or 8th airport. If we take the plane at the 5th airport, the minimum number of planes required in this case is three 1 → 6 → 5 → 6

## Solution

To solve the problem of reaching the last airport (airport N) with the minimum number of planes, we can use a greedy approach. This approach involves always making the optimal choice at each step, ensuring that we can reach the furthest possible airport with the current plane before switching to a new one.

Here's the step-by-step approach to solving the problem:

1. **Initialization**: Start at the first airport. Keep track of the current airport and the maximum reach possible with the current plane.

2. **Traversal**: Iterate through each airport, updating the maximum reach possible. If you reach an airport where you need to switch planes, increment the plane count.

3. **Check for Feasibility**: If at any point you cannot move forward, return -1, indicating that it's not possible to reach the last airport.

4. **Termination**: The loop ends when you either reach the last airport or determine that it's not possible.

### Explanation of the Code

1. **Initialization**:
   - `planesHired`: Number of planes hired so far.
   - `currentMaxReach`: Furthest airport reachable with the current plane.
   - `nextMaxReach`: Furthest airport reachable considering the next plane.

2. **Loop**:
   - Iterate over each airport.
   - Update `nextMaxReach` to be the maximum of itself and the furthest airport reachable from the current airport (`i + fuels[i]`).
   - If `nextMaxReach` is greater than or equal to the last airport, increment `planesHired` and return the count.
   - If `i` reaches `currentMaxReach`, it means we need to hire a new plane. Update `currentMaxReach` to `nextMaxReach` and increment `planesHired`.
   - If `currentMaxReach` has not advanced (i.e., it is equal to `i`), return -1 because we are stuck.

This version maintains the \(O(N)\) time complexity and ensures clarity and readability.
