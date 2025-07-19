# Sorting Algorithm Visualizer

An interactive, web-based tool designed to bring sorting algorithms to life. This project provides a clear and visually engaging way to understand the inner workings of famous and fundamental sorting algorithms. It is built for students, developers, and computer science enthusiasts who want to see, rather than just read about, how data is sorted.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://en.wikipedia.org/wiki/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://en.wikipedia.org/wiki/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)

---

## 🚀 Live Demo

**[Check out the live version here!](https://your-github-username.github.io/your-repo-name/)**

<!-- Replace the link above with your own once you deploy it on GitHub Pages or another service. -->

---

## ✨ Features

- **Stunning Visuals:** A sleek, modern dark theme with vibrant, color-coded bars to represent array elements.
- **Interactive Controls:**
  - **Generate New Array:** Create a new random array at any time.
  - **Array Size Slider:** Dynamically change the number of elements to sort (from 10 to 150).
  - **Speed Slider:** Control the animation speed to watch the process in slow-motion or fast-forward.
- **Multiple Algorithms:** Visualize and compare a curated list of essential sorting algorithms.
- **Clear State Representation:**
  - **Blue:** Default bar color.
  - **Yellow (`--comparing-color`):** Elements currently being compared.
  - **Red (`--swapping-color`):** Elements currently being swapped or acting as a pivot.
  - **Green (`--sorted-color`):** Elements that are in their final sorted position.
- **Robust & Non-Blocking:** Built with `async/await` to handle animations smoothly without freezing the UI. Controls are disabled during sorting to prevent conflicts.

---

## 🛠️ Technologies Used

- **HTML5:** For the structure and layout of the application.
- **CSS3:** For all styling, animations, and the responsive dark theme. Uses CSS Variables for easy theming.
- **Vanilla JavaScript (ES6+):** For all the logic, including array generation, DOM manipulation, and implementing the sorting algorithms with `async/await`.

---

## 📚 Algorithms Implemented

The visualizer currently includes the following fundamental and widely-used sorting algorithms:

- **Bubble Sort:** A simple algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
- **Selection Sort:** An in-place comparison sort that divides the list into a sorted and an unsorted sublist, and repeatedly finds the minimum element from the unsorted part and puts it at the beginning.
- **Insertion Sort:** Builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort or merge sort.
- **Merge Sort:** An efficient, stable, comparison-based sorting algorithm. It's a classic example of the "Divide and Conquer" paradigm.
- **Quick Sort:** Another highly efficient "Divide and Conquer" algorithm. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays.

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser like Google Chrome, Firefox, or Microsoft Edge.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-github-username/your-repo-name.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```
3.  **Open the `index.html` file in your browser:**
    You can do this by double-clicking the file in your file explorer or by right-clicking and selecting "Open with..." your preferred browser.

And you're all set!

---

## 🗺️ Roadmap

Here are some ideas for future enhancements:

- [ ] **Add More Algorithms:**
  - [ ] Heap Sort
  - [ ] Radix Sort
  - [ ] Bogo Sort (for fun!)
- [ ] **Add Sound Effects:** Play a different tone for comparisons and swaps.
- [ ] **Display Algorithm Complexity:** Show the Time (Best, Average, Worst) and Space complexity for the selected algorithm.
- [ ] **Pause & Resume:** Implement functionality to pause the sorting process and resume it.
- [ ] **Step-by-Step Mode:** Allow users to manually step through the algorithm's execution one move at a time.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-github-username/your-repo-name/issues).

1.  **Fork** the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a **Pull Request**

---

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- If you don't have a LICENSE.txt file, you can remove the link. The badge at the top is usually sufficient for small projects. -->

---

_Project inspired by the universal need to better understand the foundations of computer science._
