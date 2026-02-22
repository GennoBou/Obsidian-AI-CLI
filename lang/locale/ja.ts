// 日本語
export default {
	// ToolView Display Text
	'CLAUDE_CODE': 'Claude Code',
	'GEMINI_CLI': 'Gemini CLI',
	'OPENAI_CODEX': 'OpenAI Codex',
	'QWEN_CODE': 'Qwen Code',

	// Codex Warning
	'CODEX_WARNING': '⚠️ 注意: OpenAI CodexはmacOS、Linux、およびWSL2上のWindowsでのみ正常に動作します。',

	// Prompt Section
	'PROMPT_LABEL': 'プロンプト:',
	'TIPS_AND_EXAMPLES': '💡 ヒントと例',
	'HELP_TEXT': `ファイル（Markdown、テキスト、画像、PDF）を開き、必要に応じてテキストを選択すると、自動的にコンテキストとして追加されます。「実行」ボタンをクリックしてプロンプトを実行します。<br>
		@ファイルパス を使用して、保管庫内の他のファイルを参照できます。例: "@他のノート.md" または "@サブフォルダ/他のノート.md"<br>
		<br><br>
		<strong>プロンプトの例:</strong><br>
		• "選択したテキストをフランス語に翻訳して"<br>
		• "このノートの文法を修正して"<br>
		• "主要なポイントを要約し、ファイルの先頭に新しい「要約」見出しとして追加して"<br>
		• "この画像はキャラクターシートです。フルキャラクター情報を含む新しいノートを作成して"<br>
		• "「todo-list」という名前のノートを作成して。dataviewjsを使用して、この保管庫内の #todo タグが付いたすべてのノートをリストして"<br>
		• "このキャラクターをより面白くするための5つの提案をして"<br>
		• "このPDFを要約して新しいノートにまとめて"<br>
		• "このノートのスタイルを @他のノート.md と同じにして"`,
	'PROMPT_PLACEHOLDER': 'プロンプトをここに入力...',

	// Prompt Management
	'SAVED_PROMPTS_LABEL': '保存済みプロンプト:',
	'SELECT_SAVED_PROMPT': '保存済みプロンプトを選択...',
	'LOAD_BUTTON': '読み込み',
	'SAVE_BUTTON': '保存',

	// Execution Buttons
	'RUN_BUTTON': '実行',
	'RUNNING_BUTTON': '実行中...',
	'CANCEL_BUTTON': 'キャンセル',

	// Result and Output
	'RESULT_LABEL': '結果:',
	'COMMAND_EXECUTION': 'コマンド実行ログ',
	'CONTEXT_LABEL': 'コンテキスト:',
	'INCLUDE_CONTEXT': 'コンテキストを含める',

	// Context Details
	'CURRENT_FILE': '📄 現在のファイル: ',
	'NO_FILE_OPEN': '📄 ファイルが開かれていません',
	'SELECTED_TEXT_PREFIX': '✏️ 選択範囲: ',
	'LINES_SUFFIX': ' (行 ',
	'NO_TEXT_SELECTED': '✏️ テキストが選択されていません',
	'SELECTION_NOTICE': '💡 注意: テキスト選択はノートがプレビューモードではなく編集モードの場合にのみ機能します。',

	// Run/Error Messages
	'ENTER_PROMPT_NOTICE': 'プロンプトを入力してください',
	'PROCESSING_PROMPT': '*プロンプトを処理中...*',
	'COMMAND_EXECUTING': '実行中...',
	'CLI_NOT_FOUND': 'CLIツールが見つかりません。設定でパスを確認してください。',
	'COMMAND_CANCELLED': 'コマンドがキャンセルされました。',
	'COMMAND_FAILED_NOTICE': 'コマンドの実行に失敗しました。詳細は出力を確認してください。',
	'COMMAND_COMPLETED': `コマンドが正常に完了しました。`,
	'COMMAND_CANCELLED_TEXT': `コマンドがキャンセルされました。`,
	'COMMAND_FAILED_EXIT_CODE': `コマンドが終了コード {code} で失敗しました`,

	// Save Prompt Dialog
	'SAVE_PROMPT_TITLE': 'プロンプトを保存',
	'PROMPT_NAME_LABEL': 'プロンプト名:',
	'PROMPT_NAME_PLACEHOLDER': 'プロンプトの名前を入力...',
	'PROMPT_NAME_REQUIRED': 'プロンプト名を入力してください',
	'PROMPT_SAVED_SUCCESS': 'プロンプト「{name}」を保存しました',
	'PROMPT_SAVE_FAILED': 'プロンプトの保存に失敗しました: {error}',
	'PROMPT_NOT_FOUND': 'プロンプト「{name}」が見つかりません',
	'FAILED_LOAD_PROMPT': 'プロンプトの読み込みに失敗しました',
	'PROMPT_DELETE_CONFIRM': 'このプロンプトを削除してもよろしいですか？',

	// Settings
	'SETTINGS_TITLE': 'AIツール設定',
	'CLAUDE_CODE_SETTINGS': 'Claude Code',
	'GEMINI_CLI_SETTINGS': 'Gemini CLI',
	'OPENAI_CODEX_SETTINGS': 'OpenAI Codex',
	'QWEN_CODE_SETTINGS': 'Qwen Code',
	'PROMPT_STORAGE_SETTINGS': 'プロンプト保存先',
	'CLI_PATH_NAME': 'CLIパス',
	'CLI_PATH_DESC': '{tool} CLI実行ファイルのパス',
	'TEST_BUTTON': 'テスト',
	'CLI_FOUND_SUCCESS': '{tool} CLIが見つかり、正常に動作しています！',
	'CLI_NOT_FOUND_ERROR': '{tool} CLIが見つからないか、正常に動作していません。パスを確認してください。',
	'PARAMETERS_NAME': 'パラメータ',
	'PARAMETERS_DESC': '{tool} CLIに渡すコマンドラインパラメータとフラグ',
	'PROMPT_STORAGE_FILE_NAME': 'プロンプト保存ファイル',
	'PROMPT_STORAGE_FILE_DESC': '保存したプロンプトを格納するMarkdownファイルのパス。最初のプロンプトを保存する際に自動的に作成されます。',
	'PATH_NOTE': '注意: CLIツールがインストールされており、システムのPATHからアクセスできることを確認してください。'
};
