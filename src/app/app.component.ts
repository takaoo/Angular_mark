import { Component } from '@angular/core';

interface Data {
  id: number;
  level: number;
  title: string;
  text: string;
  data: string;
}

const DATA: Data[] = [
  { id: 1, level: 1, title: 'Main Menu', text: '# Sample Main', data: 'DATA' },
  { id: 2, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA' },
  { id: 3, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA' },
];

const DATA2: Data[] = [
  { id: 4, level: 1, title: 'Main Menu', text: '# Sample Main', data: 'DATA2' },
  { id: 5, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA2' },
  { id: 6, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA2' },
];

const DATA3: Data[] = [
  { id: 7, level: 1, title: 'Main Menu', text: '# Sample Main', data: 'DATA3' },
  { id: 8, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA3' },
  { id: 9, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA3' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = DATA[0].title;
  saveState = false;
  titleSaveState = false;
  markText = DATA[0].text;
  currentId = DATA[0].id;
  items = DATA;
  items2 = DATA2;
  items3 = DATA3;

  i = 10;


  currentData = DATA[0].data;

  constructor() { }

  saveOrEdit() {
    if (this.saveState === false) {
      console.log('save -> edit');
      document.getElementById('btn').innerHTML = 'save';
    } else {
      if (this.currentData === 'DATA') {
        this.savaText(DATA);
      } else if (this.currentData === 'DATA2') {
        this.savaText(DATA2);
      } else if (this.currentData === 'DATA3') {
        this.savaText(DATA3);
      }
    }
    this.saveState = !this.saveState;
  }

  add(item, items, data) {
    if (data === 'DATA') {
      if (item === 2) {
        items.push({ id: this.i, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA' });
      } else if (item === 3) {
        items.push({ id: this.i, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA' });
      }
    } else if (data === 'DATA2') {
      if (item === 2) {
        items.push({ id: this.i, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA2' });
      } else if (item === 3) {
        items.push({ id: this.i, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA2' });
      }
    } else if (data === 'DATA3') {
      if (item === 2) {
        items.push({ id: this.i, level: 2, title: '2nd Menu', text: '# Sample 2nd', data: 'DATA3' });
      } else if (item === 3) {
        items.push({ id: this.i, level: 3, title: '3rd Menu', text: '# Sample 3rd', data: 'DATA3' });
      }
    }

    items.sort((a, b) => {
      if (a.level > b.level) {
        return 1;
      } else {
        return -1;
      }
    });
    this.i++;
  }

  call(item) {
    this.title = item.title;
    this.markText = item.text;
    this.currentId = item.id;
    this.currentData = item.data;
  }

  clickTitle() {
    if (this.titleSaveState === false) {
      document.getElementById('titlebtn').innerHTML = 'save';
    } else {
      if (this.currentData === 'DATA') {
        this.saveTitle(DATA);
      } else if (this.currentData === 'DATA2') {
        this.saveTitle(DATA2);
      } else if (this.currentData === 'DATA3') {
        this.saveTitle(DATA3);
      }
    }
    this.titleSaveState = !this.titleSaveState;
  }

  saveTitle(data) {
    this.title = (document.getElementById('input') as HTMLInputElement).value;
    const index = data.findIndex(item => item.id === this.currentId);
    data[index].title = this.title;
    document.getElementById('titlebtn').innerHTML = 'edit';
  }

  savaText(data) {
    console.log('edit -> save');
    this.markText = (document.getElementById('textarea') as HTMLInputElement).value;
    const index = data.findIndex(item => item.id === this.currentId);
    data[index].text = this.markText;
    document.getElementById('btn').innerHTML = 'edit';
  }

}

