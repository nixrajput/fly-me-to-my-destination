# Min Planes Algorithm

This project implements an algorithm to determine the minimum number of planes required to reach the last airport from the first airport given a list of fuel units available at each airport. The algorithm is implemented in TypeScript, and tests are run using Bun.

[![Stars](https://img.shields.io/github/stars/nixrajput/fly-me-to-my-destination?label=Stars&style=flat)][repo]
[![Forks](https://img.shields.io/github/forks/nixrajput/fly-me-to-my-destination?label=Forks&style=flat)][repo]
[![Watchers](https://img.shields.io/github/watchers/nixrajput/fly-me-to-my-destination?label=Watchers&style=flat)][repo]
[![Contributors](https://img.shields.io/github/contributors/nixrajput/fly-me-to-my-destination?label=Contributors&style=flat)][repo]

[![GitHub last commit](https://img.shields.io/github/last-commit/nixrajput/fly-me-to-my-destination?label=Last+Commit&style=flat)][repo]
[![GitHub issues](https://img.shields.io/github/issues/nixrajput/fly-me-to-my-destination?label=Issues&style=flat)][issues]
[![GitHub pull requests](https://img.shields.io/github/issues-pr/nixrajput/fly-me-to-my-destination?label=Pull+Requests&style=flat)][pulls]
[![GitHub Licence](https://img.shields.io/github/license/nixrajput/fly-me-to-my-destination?label=Licence&style=flat)][license]

## Table of Contents

- [Min Planes Algorithm](#min-planes-algorithm)
  - [Table of Contents](#table-of-contents)
  - [Problem Statement](#problem-statement)
    - [Examples](#examples)
    - [Solution](#solution)
      - [Explanation of the Code](#explanation-of-the-code)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Tests](#running-the-tests)
  - [Contributing](#contributing)
  - [License](#license)
  - [Sponsor Me](#sponsor-me)
  - [Connect With Me](#connect-with-me)

## Problem Statement

Consider there are **N** airports in the world, each airport has a plane available with limited units of fuel available to fly.

You are initially positioned at airport **number one** and you have to reach the last airport (**N**) by hiring a **minimum** number of planes. You'd need 1 unit of fuel to fly to the nearest airport from any airport.

You will be given an array of N numbers each representing the units of fuel available in the plane at that particular airport. Print the number of planes you'd need to hire to reach the last airport. If it is not possible to reach the last airport, return -1.

### Examples

1. **Example 1**:
    - Input: `[2, 1, 2, 3, 1]`
    - Output: `2`

    Explanation: Start at the first airport with 2 units of fuel. You can reach either the 2nd or 3rd airport. From the 3rd airport with 2 units of fuel, you can reach the 5th airport directly.

2. **Example 2**:
    - Input: `[1, 6, 3, 4, 5, 0, 0, 0, 6]`
    - Output: `3`

    Explanation: Start at the first airport with 1 unit of fuel. You can only reach the 2nd airport. From the 2nd airport with 6 units of fuel, you can reach any of the 3rd to 8th airports. From the 5th airport with 5 units of fuel, you can reach the 9th airport.

### Solution

To solve the problem of reaching the last airport (airport N) with the minimum number of planes, we can use a greedy approach. This approach involves always making the optimal choice at each step, ensuring that we can reach the furthest possible airport with the current plane before switching to a new one.

Here's the step-by-step approach to solving the problem:

1. **Initialization**: Start at the first airport. Keep track of the current airport and the maximum reach possible with the current plane.

2. **Traversal**: Iterate through each airport, updating the maximum reach possible. If you reach an airport where you need to switch planes, increment the plane count.

3. **Check for Feasibility**: If at any point you cannot move forward, return -1, indicating that it's not possible to reach the last airport.

4. **Termination**: The loop ends when you either reach the last airport or determine that it's not possible.

#### Explanation of the Code

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

This approach maintains the \(O(N)\) time complexity and ensures clarity and readability.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Bun](https://bun.sh/) (JavaScript runtime)

### Installation

1. Star the repository.

2. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/nixrajput/fly-me-to-my-destination.git
   ```

3. Navigate to the project directory:

   ```bash
   cd fly-me-to-my-destination
   ```

4. Install the project dependencies:

   ```bash
   bun install
   ```

### Running the Tests

You can run the tests using Bun with the following command:

```bash
bun test
```

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Sponsor Me

By sponsoring my efforts, you're not merely contributing to the development of my projects; you're investing in its growth and sustainability.

Your support empowers me to dedicate more time and resources to improving the project's features, addressing issues, and ensuring its continued relevance in the rapidly evolving landscape of technology.

Your sponsorship directly fuels innovation, fosters a vibrant community, and helps maintain the project's high standards of quality. Together, we can shape the future of the projects and make a lasting impact in the open-source community.

Thank you for considering sponsoring my work!

[![Sponsor](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/nixrajput)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/nixrajput)

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/nixrajput)

## Connect With Me

[![GitHub: nixrajput](https://img.shields.io/badge/nixrajput-EFF7F6?logo=GitHub&logoColor=333&link=https://www.github.com/nixrajput)][github]
[![Linkedin: nixrajput](https://img.shields.io/badge/nixrajput-EFF7F6?logo=LinkedIn&logoColor=blue&link=https://www.linkedin.com/in/nixrajput)][linkedin]
[![Instagram: nixrajput](https://img.shields.io/badge/nixrajput-EFF7F6?logo=Instagram&link=https://www.instagram.com/nixrajput)][instagram]
[![Twitter: nixrajput07](https://img.shields.io/badge/nixrajput-EFF7F6?logo=X&logoColor=333&link=https://x.com/nixrajput)][twitter]
[![Telegram: nixrajput](https://img.shields.io/badge/nixrajput-EFF7F6?logo=Telegram&link=https://telegram.me/nixrajput)][telegram]
[![Gmail: nkr.nikhi.nkr@gmail.com](https://img.shields.io/badge/nkr.nikhil.nkr@gmail.com-EFF7F6?logo=Gmail&link=mailto:nkr.nikhil.nkr@gmail.com)][gmail]

[github]: https://github.com/nixrajput
[twitter]: https://twitter.com/nixrajput07
[instagram]: https://instagram.com/nixrajput
[linkedin]: https://linkedin.com/in/nixrajput
[telegram]: https://telegram.me/nixrajput
[gmail]: mailto:nkr.nikhil.nkr@gmail.com

[repo]: https://github.com/nixrajput/fly-me-to-my-destination
[issues]: https://github.com/nixrajput/fly-me-to-my-destination/issues
[pulls]: https://github.com/nixrajput/fly-me-to-my-destination/pulls
[license]: https://github.com/nixrajput/fly-me-to-my-destination/blob/master/LICENSE.md
