document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements & State ---
  const barContainer = document.getElementById("bar-container");
  const newArrayBtn = document.getElementById("newArrayBtn");
  const sortBtn = document.getElementById("sortBtn");
  const sizeSlider = document.getElementById("sizeSlider");
  const speedSlider = document.getElementById("speedSlider");
  const algorithmSelect = document.getElementById("algorithmSelect");

  let array = [];
  let isSorting = false;
  let animationSpeed = 50;

  // --- Core Functionality ---

  function generateArray() {
    if (isSorting) return;
    array = [];
    barContainer.innerHTML = "";
    const size = sizeSlider.value;
    const containerHeight = barContainer.clientHeight;
    const barWidth = Math.floor(barContainer.clientWidth / (size * 1.5));

    for (let i = 0; i < size; i++) {
      const value = Math.floor(Math.random() * 95) + 5; // Values between 5 and 100
      array.push(value);
      const bar = document.createElement("div");
      bar.classList.add("bar");
      bar.style.height = `${value}%`;
      bar.style.width = `${barWidth}px`;
      barContainer.appendChild(bar);
    }
  }

  function updateSpeed() {
    // Inverse relationship: higher slider value means faster animation (less delay)
    animationSpeed = 101 - speedSlider.value;
  }

  function toggleControls(enable) {
    isSorting = !enable;
    newArrayBtn.disabled = !enable;
    sizeSlider.disabled = !enable;
    algorithmSelect.disabled = !enable;
    sortBtn.disabled = !enable;
  }

  // --- Visualization Helpers ---

  function sleep() {
    return new Promise((resolve) => setTimeout(resolve, animationSpeed));
  }

  async function finishAnimation() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < bars.length; i++) {
      bars[i].classList.add("sorted");
      await sleep();
    }
  }

  // --- Sorting Algorithms ---

  async function bubbleSort() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        bars[j].classList.add("comparing");
        bars[j + 1].classList.add("comparing");
        await sleep();

        if (array[j] > array[j + 1]) {
          bars[j].classList.add("swapping");
          bars[j + 1].classList.add("swapping");
          await sleep();

          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          bars[j].style.height = `${array[j]}%`;
          bars[j + 1].style.height = `${array[j + 1]}%`;
          await sleep();
        }

        bars[j].classList.remove("comparing", "swapping");
        bars[j + 1].classList.remove("comparing", "swapping");
      }
      bars[array.length - 1 - i].classList.add("sorted");
    }
    bars[0].classList.add("sorted");
  }

  async function selectionSort() {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      bars[i].classList.add("swapping"); // Current element to be swapped
      for (let j = i + 1; j < array.length; j++) {
        bars[j].classList.add("comparing");
        await sleep();
        if (array[j] < array[minIndex]) {
          if (minIndex !== i) {
            bars[minIndex].classList.remove("comparing");
          }
          minIndex = j;
        } else {
          bars[j].classList.remove("comparing");
        }
      }

      await sleep();
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      bars[i].style.height = `${array[i]}%`;
      bars[minIndex].style.height = `${array[minIndex]}%`;

      bars[minIndex].classList.remove("comparing");
      bars[i].classList.remove("swapping");
      bars[i].classList.add("sorted");
    }
  }

  async function insertionSort() {
    const bars = document.getElementsByClassName("bar");
    bars[0].classList.add("sorted");
    for (let i = 1; i < array.length; i++) {
      let key = array[i];
      let j = i - 1;

      bars[i].classList.add("swapping");
      await sleep();

      while (j >= 0 && array[j] > key) {
        bars[j].classList.add("comparing");
        array[j + 1] = array[j];
        bars[j + 1].style.height = `${array[j]}%`;
        await sleep();
        bars[j].classList.remove("comparing");
        j--;
      }
      array[j + 1] = key;
      bars[j + 1].style.height = `${key}%`;
      bars[i].classList.remove("swapping");
      bars[j + 1].classList.add("sorted");

      // Make sure all previous bars are marked as sorted
      for (let k = 0; k <= i; k++) {
        bars[k].classList.add("sorted");
      }
    }
  }

  async function mergeSort(arr, l, r) {
    if (l >= r) return;
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
  }

  async function merge(arr, l, m, r) {
    const bars = document.getElementsByClassName("bar");
    const n1 = m - l + 1;
    const n2 = r - m;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++) {
      L[i] = arr[l + i];
      bars[l + i].classList.add("comparing");
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[m + 1 + j];
      bars[m + 1 + j].classList.add("comparing");
    }
    await sleep();

    let i = 0,
      j = 0,
      k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        bars[k].style.height = `${arr[k]}%`;
        i++;
      } else {
        arr[k] = R[j];
        bars[k].style.height = `${arr[k]}%`;
        j++;
      }
      bars[k].classList.add("swapping");
      await sleep();
      bars[k].classList.remove("swapping", "comparing");
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      bars[k].style.height = `${arr[k]}%`;
      bars[k].classList.add("swapping");
      await sleep();
      bars[k].classList.remove("swapping", "comparing");
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      bars[k].style.height = `${arr[k]}%`;
      bars[k].classList.add("swapping");
      await sleep();
      bars[k].classList.remove("swapping", "comparing");
      j++;
      k++;
    }
  }

  async function quickSort(arr, low, high) {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSort(arr, low, pi - 1);
      await quickSort(arr, pi + 1, high);
    }
  }

  async function partition(arr, low, high) {
    const bars = document.getElementsByClassName("bar");
    let pivot = arr[high];
    let i = low - 1;
    bars[high].classList.add("swapping"); // Pivot color

    for (let j = low; j < high; j++) {
      bars[j].classList.add("comparing");
      await sleep();
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        bars[i].style.height = `${arr[i]}%`;
        bars[j].style.height = `${arr[j]}%`;
        await sleep();
      }
      bars[j].classList.remove("comparing");
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    bars[i + 1].style.height = `${arr[i + 1]}%`;
    bars[high].style.height = `${arr[high]}%`;

    bars[high].classList.remove("swapping");
    return i + 1;
  }

  // --- Event Listeners ---

  newArrayBtn.addEventListener("click", generateArray);
  sizeSlider.addEventListener("input", generateArray);
  speedSlider.addEventListener("input", updateSpeed);

  sortBtn.addEventListener("click", async () => {
    if (isSorting) return;
    toggleControls(false);

    const selectedAlgorithm = algorithmSelect.value;
    switch (selectedAlgorithm) {
      case "bubble":
        await bubbleSort();
        break;
      case "selection":
        await selectionSort();
        break;
      case "insertion":
        await insertionSort();
        break;
      case "merge":
        await mergeSort(array, 0, array.length - 1);
        break;
      case "quick":
        await quickSort(array, 0, array.length - 1);
        break;
    }

    await finishAnimation();
    toggleControls(true);
  });

  // --- Initial Setup ---
  updateSpeed();
  generateArray();
});
