import { Component } from '@angular/core';

interface Data {
  id: number;
  level: number;
  title: string;
  text: string;
}

const DATA: Data[] = [
  { id: 1, level: 1, title: 'Main Menu', text: '# Sample Main' },
  { id: 2, level: 2, title: '2nd Menu', text: '# Sample 2nd' },
  { id: 3, level: 3, title: '3rd Menu', text: '# Sample 3rd' },
];

const DATA2: Data[] = [
  { id: 1, level: 1, title: 'Main Menu', text: '# Sample Main' },
  { id: 2, level: 2, title: '2nd Menu', text: '# Sample 2nd' },
  { id: 3, level: 3, title: '3rd Menu', text: '# Sample 3rd' },
];

const DATA3: Data[] = [
  { id: 1, level: 1, title: 'Main Menu', text: '# Sample Main' },
  { id: 2, level: 2, title: '2nd Menu', text: '# Sample 2nd' },
  { id: 3, level: 3, title: '3rd Menu', text: '# Sample 3rd' },
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
  items = DATA;
  items2 = DATA2;
  items3 = DATA3;

  i = 4;

  currentId = 1;
  constructor() { }

  saveOrEdit() {
    if (this.saveState === false) {
      console.log('save -> edit');
      console.log('markText', this.markText);
      document.getElementById('btn').innerHTML = 'save';
    } else {
      console.log('edit -> save');
      this.markText = (document.getElementById('textarea') as HTMLInputElement).value;
      const index = DATA.findIndex(item => item.id === this.currentId);
      DATA[index].text = this.markText;
      document.getElementById('btn').innerHTML = 'edit';
      console.log(DATA);
    }
    this.saveState = !this.saveState;
  }

  add(item, items) {
    console.log(items);
    if (item === 2) {
      items.push({ id: this.i, level: 2, title: '2nd Menu', text: '# Sample 2nd' });
    } else if (item === 3) {
      items.push({ id: this.i, level: 3, title: '3rd Menu', text: '# Sample 3rd' });
    }
    items.sort((a, b) => {
      if (a.level > b.level) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(items);
    this.i++;
  }

  call(item) {
    this.title = item.title;
    this.markText = item.text;
    this.currentId = item.id;
    console.log('currentId', this.currentId);
  }

  clickTitle() {
    console.log('click');
    if (this.titleSaveState === false) {
      console.log('save -> edit');
      document.getElementById('titlebtn').innerHTML = 'save';
    } else {
      console.log('edit -> save');
      this.title = (document.getElementById('input') as HTMLInputElement).value;
      console.log(this.title);
      const index = DATA.findIndex(item => item.id === this.currentId);
      DATA[index].title = this.title;
      console.log(index);
      document.getElementById('titlebtn').innerHTML = 'edit';
    }
    this.titleSaveState = !this.titleSaveState;
  }


}

