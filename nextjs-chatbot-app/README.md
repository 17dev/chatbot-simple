# Next.js Chatbot Application

This is a feature-rich chatbot application built with Next.js, OpenAI gpt-3.5-turbo-16k-0613 models, and Langchain. It allows users to manage multiple chat threads, database configurations, and file uploads, enhancing their chatbot functionalities according to their needs.

## Features

- **Chat Management**: Create, edit, and delete chat threads.
- **Database Configuration**: Connect each chat thread with different databases like MySQL, PostgreSQL, etc.
- **File Uploads**: Upload local files with options to save the files for future use.
- **Responsiveness**: The application is responsive, adapting to different screen sizes and devices, using Tailwind CSS and atomic design principles.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-chatbot-app.git
```

Navigate to the project directory:

```bash
cd nextjs-chatbot-app
```

Install the dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_database_url
```

Replace `your_openai_api_key` and `your_database_url` with your actual OpenAI API key and database URL.

## Running the Application

To start the development server:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

To start the application in production mode:

```bash
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)