import * as vscode from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';
import * as path from 'path';

let client: LanguageClient;

// all code prefixed with _ for it it is disabled

function _sendActiveDocumentToServer() {
    if (vscode.window.activeTextEditor) {
        const activeDocumentUri = vscode.window.activeTextEditor.document.uri.toString();
        // Assuming 'languageServerExample' is the ID of your language server
        client.sendRequest('custom/activeDocument', activeDocumentUri);
    }
}

export function activate(context: vscode.ExtensionContext) {
    // The server is a locally installed Node.js module
    
    // const serverModule = context.asAbsolutePath(path.join('out', 'server', 'server.js'));
    // const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

    // const serverOptions: ServerOptions = {
    //    run: { module: serverModule, transport: TransportKind.ipc },
    //    debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
    //};

    //const clientOptions: LanguageClientOptions = {
    //    documentSelector: [{ scheme: 'file', language: 'type-c' }],
    //    synchronize: {
    //        fileEvents: vscode.workspace.createFileSystemWatcher('**/.tc')
    //    }
    //};

    //client = new LanguageClient(
    //    'typeCLanguageServer',
    //    'Type-C Language Server',
    //    serverOptions,
    //    clientOptions
    //);

    //client.start()

    //vscode.window.onDidChangeActiveTextEditor(editor => {
    //    _sendActiveDocumentToServer();
    //});

    // Also send the active document when the extension is first activated
    //_sendActiveDocumentToServer();
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }
    return client.stop();
}