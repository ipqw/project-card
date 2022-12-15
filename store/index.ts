import { makeAutoObservable } from 'mobx';
import { IMember, IProject } from 'types';
import { members, projects, projectCreatedAt } from '../mock/mock';

class Storage {
  constructor() {
    makeAutoObservable(this);
  }

  lang = true;
  changeLang = () => {
    this.lang = !this.lang;
  };

  members: Array<IMember> = [];
  projects: Array<IProject> = [];
  createTime = projectCreatedAt;

  setMembers = (a: any) => {
    this.members = a;
  };
  setProjects = (a: any) => {
    this.projects = a;
  };

  theme = true;
  changeTheme = () => {
    this.theme = !this.theme;
  };
}
export const store = new Storage();
