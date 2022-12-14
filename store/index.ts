import { makeAutoObservable } from 'mobx';
import { members, projects, projectCreatedAt } from '../mock/mock'

class Storage {
  constructor() {
    makeAutoObservable(this);
  }

  _lang = true;
  _theme = true;

  changeLang = () => {
    this._lang = !this._lang;
  };

  get Lang() {
    return this._lang;
  }

  members = { members };
  projects = { projects };
  createTime = projectCreatedAt;

  changeTheme = () => {
    this._theme = !this._theme;
  };

  get Theme() {
    return this._theme;
  }
}

export const store = new Storage();
