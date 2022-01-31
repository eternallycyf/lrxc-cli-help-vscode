import { TreeItem, TreeItemCollapsibleState } from "vscode";

export interface Joke {
  content: string;
  hashId: string;
  time: string;
}

export class JokeTreeItem extends TreeItem {

  constructor(info: Joke) {
    super('', TreeItemCollapsibleState.None);
    this.label = '笑话';
    this.id = info.hashId;
    this.description = 'by 梦回故里';
    this.command = {
      title: '今日笑话',
      command: 'joke.click',
      arguments: [
        info.hashId,
        info.content
      ],
    };
    this.tooltip = '点击查看详情';
  }
}