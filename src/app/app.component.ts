import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buildData } from './data'; // Import the buildData function
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  imports: [ButtonComponent, MenuComponent, HeaderComponent, CommonModule]
})
export class AppComponent implements OnInit {
  title = 'angular-fyp';

  itemsData: any[] = []; // Initialize itemsData array
  benchmarkResults = { // Initialize benchmarkResults object
    create: 0,
    read: 0,
    update: 0,
    delete: 0
  };
  numItems = 10; // Number of items for the algorithm benchmark.

  ngOnInit() {
    this.initializeData(); // Initialize data when component initializes
  }

  initializeData() {
    this.itemsData = buildData(this.numItems); // Use the buildData function to generate data
  }

  createOperation() {
    const startTime = performance.now();

    // Simulate creating a new item
    const newItem = {
      id: this.numItems,
      value: buildData(1)[0].value,
      recentlyUpdated: false,
    };

    // Update the itemsData array
    this.itemsData.push(newItem);

    const endTime = performance.now();
    const createDuration = endTime - startTime;

    // Update benchmark results
    this.updateBenchmarkResult('create', createDuration);

    // Increment counter for generating unique IDs
    this.numItems++;
  }

  createOperation1000() {
    const startTime = performance.now();
    const newItems = [];

    for (let i = 0; i < 1000; i++) {
      const newItem = {
        id: this.itemsData.length + i + 1,
        value: buildData(1)[0].value,
        recentlyUpdated: false,
      };
      newItems.push(newItem);
    }

    this.itemsData.push(...newItems);

    const endTime = performance.now();
    const createDuration = endTime - startTime;
    this.updateBenchmarkResult('create', createDuration);
  }

  createOperation10000() {
    const startTime = performance.now();
    const newItems = [];

    for (let i = 0; i < 10000; i++) {
      const newItem = {
        id: this.itemsData.length + i + 1,
        value: buildData(1)[0].value,
        recentlyUpdated: false,
      };
      newItems.push(newItem);
    }

    this.itemsData.push(...newItems);

    const endTime = performance.now();
    const createDuration = endTime - startTime;
    this.updateBenchmarkResult('create', createDuration);
  }

  readOperation() {
    const startTime = performance.now();

    if (this.itemsData.length > 0) {
      this.itemsData.forEach((item) => {
        const value = item.value;
        //console.log(`Item read: ${value}`);
      });
    }

    const endTime = performance.now();
    const readDuration = endTime - startTime;
    this.updateBenchmarkResult('read', readDuration);
  }

  updateOperation() {
    const startTime = performance.now();

    if (this.itemsData.length > 0) {
      const availableIndices = this.itemsData
        .map((item, index) => ({ index, recentlyUpdated: item.recentlyUpdated }))
        .filter((item) => !item.recentlyUpdated)
        .map((item) => item.index);

      if (availableIndices.length > 0) {
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];

        const updatedItem = {
          ...this.itemsData[randomIndex],
          value: `Updated Item ${randomIndex}`,
        };
        this.itemsData[randomIndex] = updatedItem;

        console.log(`Updated item:`, updatedItem);
      } else {
        console.log('All items have been updated. Please refresh.');
      }
    }

    const endTime = performance.now();
    const updateDuration = endTime - startTime;
    this.updateBenchmarkResult('update', updateDuration);
  }

  deleteOneItem() {
    const startTime = performance.now();

    if (this.itemsData.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.itemsData.length);
      this.itemsData.splice(randomIndex, 1);
    }

    const endTime = performance.now();
    const deleteDuration = endTime - startTime;
    this.updateBenchmarkResult('delete', deleteDuration);
  }

  deleteOperation() {
    const startTime = performance.now();
    this.itemsData = [];
    const endTime = performance.now();
    const deleteDuration = endTime - startTime;
    this.updateBenchmarkResult('delete', deleteDuration);
  }

  updateBenchmarkResult(operation: string, duration: number) {
    this.benchmarkResults = {
      ...this.benchmarkResults,
      [operation]: duration.toFixed(4),
    };
  }

  handleButtonClick(operation: string) {
    switch (operation) {
      case 'Create':
        this.createOperation();
        break;
      case 'Create1000':
        this.createOperation1000();
        break;
      case 'Create10000':
        this.createOperation10000();
        break;
      case 'Read':
        this.readOperation();
        break;
      case 'Update':
        this.updateOperation();
        break;
      case 'Delete':
        this.deleteOperation();
        break;
      default:
        console.error('Invalid operation:', operation);
    }
  }
}
