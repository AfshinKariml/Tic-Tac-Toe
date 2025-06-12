# 🎮 Tic-Tac-Toe Game

A modern and responsive Tic-Tac-Toe game built with **Angular 19** and **Tailwind CSS**.

## ✨ Features

- 🎯 Interactive 3x3 game board
- 👥 Two-player gameplay (X vs O)  
- 🏆 Winner detection
- 🤝 Draw game detection
- 🔄 Reset game functionality
- 📱 Responsive design
- 🎨 Beautiful UI with Tailwind CSS

## 🚀 Technologies Used

- **Angular 19** - Frontend framework
- **TypeScript** - Programming language
- **Tailwind CSS** - Styling
- **SCSS** - Additional styling

## 🛠️ Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/tic-tac-toe-angular.git
cd tic-tac-toe-angular
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

## 🎯 How to Play

1. Players take turns clicking on empty cells
2. Player X goes first (red), followed by Player O (blue)
3. First player to get 3 in a row (horizontal, vertical, or diagonal) wins! 🏆
4. If all cells are filled without a winner, it's a draw 🤝
5. Click "Reset Game" to start over 🔄

## 📁 Project Structure

```
src/
├── app/
│   ├── board-game/          # Main game board component
│   ├── cell/                # Individual cell component
│   └── app.component.*      # Root component
```