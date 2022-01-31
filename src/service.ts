import axios from "axios";
import { JokeTreeItem } from "./lrxc-cli-help";

export class ApiService {
  private items: Array<JokeTreeItem> = [];
  async getJokes(page: number, key: string): Promise<Array<JokeTreeItem>> {
    console.log('fetching  data……');
    const url = 'http://v.juhe.cn/joke/content/text.php';
    const response = await axios.get(url, {
      headers: { 'content-type': 'application/json' },
      params: {
        page: page,
        key: key,
      },
    });

    for (let i = 0; i < response.data.result.data.length; i++) {
      const joke = {
        content: response.data.result.data[i].content,
        hashId: response.data.result.data[i].hashId,
        time: response.data.result.data[i].updatetime
      };
      this.items.push(new JokeTreeItem(joke));
    }
    return this.items;
  }
}
