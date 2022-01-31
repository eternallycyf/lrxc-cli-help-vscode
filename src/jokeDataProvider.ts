import { Event, EventEmitter, TreeDataProvider, TreeView } from "vscode";
import { JokeTreeItem } from "./lrxc-cli-help";
import { ApiService } from "./service";

export class JokeDataProvider implements TreeDataProvider<JokeTreeItem>{
  private service: ApiService;
  private _onDidChangeTreeData: EventEmitter<any> = new EventEmitter<any>();
  readonly onDidChangeTreeData: Event<any> = this._onDidChangeTreeData.event;
  constructor(service: ApiService) {
    this.service = service;
  }

  refresh() {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: JokeTreeItem) {
    return element;
  }

  getChildren(element: JokeTreeItem) {
    return this.service.getJokes(1, '23b9da300d551ea41a36559234c5dc64');
  }

  getParent(element: JokeTreeItem) {
    return null;
  }

}