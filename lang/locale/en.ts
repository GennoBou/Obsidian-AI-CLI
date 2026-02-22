// English
export default {
	// ToolView Display Text
	'CLAUDE_CODE': 'Claude Code',
	'GEMINI_CLI': 'Gemini CLI',
	'OPENAI_CODEX': 'OpenAI Codex',
	'QWEN_CODE': 'Qwen Code',

	// Codex Warning
	'CODEX_WARNING': '⚠️ Note: OpenAI Codex only works correctly on macOS, Linux, and Windows under WSL2.',

	// Prompt Section
	'PROMPT_LABEL': 'Prompt:',
	'TIPS_AND_EXAMPLES': '💡 Tips and examples',
	'HELP_TEXT': `Open a file (markdown, text, image, pdf) and optionally select text for automatic context. Click the "Run" button to execute the prompt.<br>
		You can use @file_path to reference other files in your vault. For example, "@other_note.md" or "@subfolder/other_note.md".<br>
		<br><br>
		<strong>Example prompts:</strong><br>
		• "Translate the selected text to French"<br>
		• "Fix grammar in this note"<br>
		• "Summarize the main points and add them to a new Summary header at the top of the file"<br>
		• "This image is a character sheet, create a new note with the full character information"<br>
		• "Create a note named "todo-list". Use dataviewjs to list all the notes with the #todo tag in this vault."<br>
		• "Give me 5 suggestions to make this character more interesting"<br>
		• "Summarize this PDF in a new note"<br>
		• "Make the style of this note the same as @other_note.md"`,
	'PROMPT_PLACEHOLDER': 'Enter your prompt here...',

	// Prompt Management
	'SAVED_PROMPTS_LABEL': 'Saved Prompts:',
	'SELECT_SAVED_PROMPT': 'Select a saved prompt...',
	'LOAD_BUTTON': 'Load',
	'SAVE_BUTTON': 'Save',

	// Execution Buttons
	'RUN_BUTTON': 'Run',
	'RUNNING_BUTTON': 'Running...',
	'CANCEL_BUTTON': 'Cancel',

	// Result and Output
	'RESULT_LABEL': 'Result:',
	'COMMAND_EXECUTION': 'Command Execution',
	'CONTEXT_LABEL': 'Context:',
	'INCLUDE_CONTEXT': 'Include context',

	// Context Details
	'CURRENT_FILE': '📄 Current file: ',
	'NO_FILE_OPEN': '📄 No file open',
	'SELECTED_TEXT_PREFIX': '✏️ Selected: ',
	'LINES_SUFFIX': ' (lines ',
	'NO_TEXT_SELECTED': '✏️ No text selected',
	'SELECTION_NOTICE': '💡 Note: Text selection only works when the note is in edit mode, not preview mode.',

	// Run/Error Messages
	'ENTER_PROMPT_NOTICE': 'Please enter a prompt',
	'PROCESSING_PROMPT': '*Processing prompt...*',
	'COMMAND_EXECUTING': 'Executing...',
	'CLI_NOT_FOUND': 'CLI tool not found. Check the path in settings.',
	'COMMAND_CANCELLED': 'Command was cancelled.',
	'COMMAND_FAILED_NOTICE': 'Command execution failed. Check output for details.',
	'COMMAND_COMPLETED': 'Command completed successfully.',
	'COMMAND_CANCELLED_TEXT': 'Command was cancelled.',
	'COMMAND_FAILED_EXIT_CODE': 'Command failed with exit code ',

	// Save Prompt Dialog
	'SAVE_PROMPT_TITLE': 'Save Prompt',
	'PROMPT_NAME_LABEL': 'Prompt name:',
	'PROMPT_NAME_PLACEHOLDER': 'Enter a name for this prompt...',
	'PROMPT_NAME_REQUIRED': 'Please enter a prompt name',
	'PROMPT_SAVED_SUCCESS': 'Prompt "{name}" saved successfully',
	'PROMPT_SAVE_FAILED': 'Failed to save prompt: {error}',
	'PROMPT_NOT_FOUND': 'Prompt "{name}" not found',
	'FAILED_LOAD_PROMPT': 'Failed to load prompt',
	'PROMPT_DELETE_CONFIRM': 'Are you sure you want to delete this prompt?',

	// Settings
	'SETTINGS_TITLE': 'AI Tools Settings',
	'CLAUDE_CODE_SETTINGS': 'Claude Code',
	'GEMINI_CLI_SETTINGS': 'Gemini CLI',
	'OPENAI_CODEX_SETTINGS': 'OpenAI Codex',
	'QWEN_CODE_SETTINGS': 'Qwen Code',
	'PROMPT_STORAGE_SETTINGS': 'Prompt Storage',
	'CLI_PATH_NAME': 'CLI Path',
	'CLI_PATH_DESC': 'Path to the {tool} CLI executable',
	'TEST_BUTTON': 'Test',
	'CLI_FOUND_SUCCESS': '{tool} CLI found and working!',
	'CLI_NOT_FOUND_ERROR': '{tool} CLI not found or not working. Check the path.',
	'PARAMETERS_NAME': 'Parameters',
	'PARAMETERS_DESC': 'Command line parameters and flags for {tool} CLI',
	'PROMPT_STORAGE_FILE_NAME': 'Prompt Storage File',
	'PROMPT_STORAGE_FILE_DESC': 'Path to the markdown file where saved prompts will be stored. The file will be created automatically when you save your first prompt.',
	'PATH_NOTE': 'Note: Make sure the CLI tools are installed and accessible from your system PATH.'
};
