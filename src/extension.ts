// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { JokeDataProvider } from "./jokeDataProvider";
import { ApiService } from "./service";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "lrxc-cli-help" is now active!');

	// my code
	const service = new ApiService();
	vscode.window.registerTreeDataProvider('view.joke', new JokeDataProvider(service));
	const panel = vscode.window.createWebviewPanel(
		'Webview', // viewType
		"stockWebview", // 视图标题
		vscode.ViewColumn.One, // 显示在编辑器的哪个部位
		{
			enableScripts: true, // 启用JS，默认禁用
			retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
		}
	);
	let showcontent = vscode.commands.registerCommand('joke.click', (hasdId, content) => {
		panel.webview.html = `<html><body>
		<div>${content}</div>
		</body></html>`;
	});
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('lrxc-cli-help.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from lrxc-cli-help!');
	});

	context.subscriptions.push(showcontent);
}

// this method is called when your extension is deactivated
export function deactivate() { }
