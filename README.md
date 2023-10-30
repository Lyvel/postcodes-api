# UK Postcodes API with Next.js 13

A simple Next.js application that provides a frontend interface for verifying and formatting UK postcodes.

## Features

- Input validation: Ensures the user enters a valid UK postcode format.
- Backend verification: Uses regex to validate the postcode.
- Formatting: If the entered postcode is valid, it will be formatted to the standard UK postcode format.
- Real-time feedback: Displays either the formatted postcode or a message indicating an invalid postcode.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository:

```bash
git clone https://github.com/Lyvel/postcodes-api.git
cd uk-postcodes-api
```

Install the dependencies:

```bash
npm install
```

## Running the Development Server

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000/`.

## Usage

1. Navigate to the main page of the application.
2. Enter a UK postcode into the input field.
3. Click the "Verify" button or press Enter.
4. The result will be displayed below the input field, indicating whether the postcode is valid or invalid. If valid, the formatted postcode will also be displayed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
